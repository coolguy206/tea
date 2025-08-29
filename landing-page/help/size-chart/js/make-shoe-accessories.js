var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');

module.exports = function (cat, sheetDept, dept, sheetCatArr, val, i) {
    //? function to make the shoes + accessories tables

    //? hide the top table
    $('.size-chart-table .the-table').hide();

    //? split the selected categories into an array
    var catArr = cat.split(',');

    //? loop through the array and check if any of the values match
    $.each(catArr, function (k, c) {
        // console.log(k,c);

        //? this var holds the actual category from the sheets because the format is shoes + accessories,brand
        var shoesAccess = sheetCatArr.split(',')[1];

        //? skip shoe + accessories but match the rest eg: socks & hats
        if (c !== 'shoes + accessories' && shoesAccess == c) {
            // console.log('match found');
            // console.log(shoesAccess, c);

            var rows;

            //? THIS MAKES THE MULTIPLE TABLES and table headers
            rows = makeTableHeader(i, val, dept, c);

            //? output the table contents
            outputTable(i, val, rows);

            //? stop the function
            return false;
        }
    });

};