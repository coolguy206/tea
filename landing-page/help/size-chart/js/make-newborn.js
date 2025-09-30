var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');

module.exports = function (cat, sheetDept, dept, sheetCatArr, val, i) {
    //? function to build the newborn tables

    //? hide the top table
    $('.size-chart-table .the-table').hide();

    //? split the selected categories into an array to loop through and change the string to match the sheetCatArr
    var nbCatArr = cat.split(',');
    $.each(nbCatArr, function (j, str) {
        if (str == ` Booties` || str == ` Bibs`) {
            nbCatArr[j] = `all categories, accessories`;
        } else if (str == ` hats`) {
            nbCatArr[j] = `all categories, hats`;
        }
    });

    //? remove duplicates
    var uniqueNbCatArr = [...new Set(nbCatArr)];
    // console.log(uniqueNbCatArr);

    //? find the matching sheetDepts for newborn
    if (sheetDept == dept) {

        //? loop through uniqueNbCatArr and find matching data and output
        $.each(uniqueNbCatArr, function (j, nb) {
            if (nb == sheetCatArr) {
                var rows;

                //? change the headers for the newborn tables
                if (nb == `all categories, accessories`) {
                    nb = `Booties & Bibs`;
                } else if (nb == `all categories, hats`) {
                    nb = `hats`;
                }

                //? THIS MAKES THE MULTIPLE TABLES and table headers
                rows = makeTableHeader(i, val, dept, nb);

                //? output the tables and contents
                outputTable(i, val, rows);

                //? stop the function
                return false;
            }
        });

    }

};