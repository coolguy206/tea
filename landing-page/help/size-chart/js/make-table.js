var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
var checkIfBaby = require('./check-if-baby.js');
var makeNewborn = require('./make-newborn.js');
var makeShoeAccessories = require('./make-shoe-accessories.js');

module.exports = function (sheets) {
  //? function to create the tables
  //? show .the-table
  $('.size-chart-table .the-table').show();

  //? remove all <tr> except the 1st one
  var trs = $('.size-chart-table table tr');
  $.each(trs, function (i, val) {
    if ($(val).attr('class') !== 'size-chart-header') {
      $(val).remove();
    }
  });

  //? remove all the tables except the .the-table
  var tables = $('.size-chart-table table');
  $.each(tables, function (i, val) {
    if ($(val).attr('class') !== 'the-table') {
      $(val).remove();
    }
  });

  //? the selected values
  var dept = $('.size-chart-container select.department').val();
  var cat = $('.size-chart-container select.category').val();
  // console.log(dept,cat);

  var sheet = sheets;
  console.log('from make-table.js');
  console.log(sheet);

  //? loop through sheet and find the matched table
  $.each(sheet, function (i, val) {
    //? var to hold the sheet dept and cat
    var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
    //? split the sheetVal because it is in the format of dept:category
    var sheetArr = sheetVal.split(':');
    //? the dept var from the sheets
    var sheetDept = sheetArr[0];
    //? the cat var from the sheets
    var sheetCatArr = sheetArr[1];
    // console.log(sheetCatArr);

    //? if the sheet dept is baby change to array of baby girl and baby boy
    if (sheetDept == 'baby') {
      sheetDept = ['baby girl', 'baby boy'];
    }

    //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change to match sheet because it does not match the measuring-tips.js array of objects
    cat = checkIfBaby(dept, cat);

    //? if newborn show all the categories and tables
    if (dept == `newborn`) {

      makeNewborn(cat, sheetDept, dept, sheetCatArr, val, i);

    } else if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
      //? all other departments NOT newborn

      //? if category is shoes + accessories
      if (cat.indexOf('shoes + accessories') !== -1) {

        makeShoeAccessories(cat, sheetDept, dept, sheetCatArr, val, i);

      } else if (cat.indexOf(sheetCatArr) !== -1) {

        //? all other categories that are not shoes + accessories and only have 1 table
        // console.log(i,val);
        var rows;
        var colspan;

        // console.log(`only activate`);

        rows = val.merges[0].endColumnIndex - 1;
        colspan = val.merges[0].endColumnIndex;

        //? add colspan to .size-chart-header
        $('.size-chart-header th').attr('colspan', colspan);

        //? output the table contents
        outputTable(i, val, rows);

        //? stop the function
        return false;

      }

    }
  });

};