"use strict";

var makeTable = require('./make-table.js');
module.exports = function (sheets, callback) {
  //? function to get the sheets from google sheets and make the tables

  //? sheetId
  var sheetId = "1ZzzDWxntUHpk4pSavmAgCSSUpNpmmbC1xkyKIH_2P8c";

  //? api key
  // var hidden = 'AIzaSyDHknRbkWGT1ozvC_H_rNtFlLsGGjXFs';
  var hidden = 'AIzaSyCya37AW8ylhzoeU3FDFuUG824MfdW8wY8';
  var sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/".concat(sheetId, "?key=").concat(hidden, "&includeGridData=true");

  // console.log(sheetUrl);

  //? if sheets is undefined make the $.get call else just call makeTable() and remove the loading
  if (sheets == undefined) {
    console.log('no sheets go get sheets');

    //? make the get call
    $.getJSON(sheetUrl, function (data) {
      // console.log(data.sheets);
      sheets = data.sheets;
      // console.log(sheets)

      //? make the table
      makeTable(sheets);

      //? remove the loading
      $('.tables-loading').remove();

      //? a callback function to pass sheets back to pdp-function.js
      callback(sheets);
    });
  } else {
    console.log('sheets found');
    // console.log(sheets);

    //? make the table
    makeTable(sheets);

    //? remove the loading
    $('.tables-loading').remove();
  }
};
