"use strict";

var shoeBrands = require('./shoe-brands.js');
var sizeChartArr = require('./measuring-tips.js');
var changeCats = require('./change-cat.js');
var changeRow = require('./change-first-row-table.js');
var selectDeptCat = require('./set-dept-cat-by-url.js');
var brandChange = require('./change-shoe-brand.js');
var makeBrands = require('./make-shoe-brands.js');
var makeTd = require('./make-td.js');
var outputTable = require('./output-table.js');
var makeTableHeader = require('./make-table-header.js');
var makeTable = require('./make-table.js');
var onload = require('./onload.js');
var execute = require('./execute.js');
$(document).ready(function () {
  //? add sizeChartArr to the page for pdp pages
  $('.size-chart-container').prepend('<div id="sizeChartArr"></div>');

  //? loop through sizeChartArr and add the attribute to #sizeChartArr
  $.each(sizeChartArr, function (i, val) {
    var cats = [];
    var dept = val.dept;
    dept = dept.replace(' ', '-');

    //? loop through the categories and push to cats
    $.each(val.cat, function (j, cat) {
      cats.push(cat.name);
    });

    //? convert cats to string
    var theCats = cats.join();
    //? add data attribute to page
    $('#sizeChartArr').attr('data-' + dept, theCats);
  });

  /*-----------------------------------------------------------------------------------------*/

  //? onload make the department dropdown
  //? make the department dropdown
  $.each(sizeChartArr, function (i, val) {
    var deptOption = '<option value="' + val.dept + '">' + val.dept + '</option>';
    $('.size-chart-container select.department').append(deptOption);
  });

  /*-----------------------------------------------------------------------------------------*/

  //? onload check if there are url params
  //? if there are then set the dept and cat dropdowns
  //? otherwise set the default dept and cat
  onload();

  /*-----------------------------------------------------------------------------------------*/

  //? on .department change
  $('.size-chart-container select.department').change(function () {
    //? remove all the <option> in .category
    $('.size-chart-container select.category option').remove();

    //? change the cats dropdown
    changeCats(sizeChartArr);

    //? remake the tables
    execute();
  });

  /*-----------------------------------------------------------------------------------------*/

  //? on .category change
  $('.size-chart-container select.category').change(function () {
    //? remake the tables
    execute();
  });

  /*-----------------------------------------------------------------------------------------*/

  //? collapse ul.brand when click on .size-chart-table
  $('.brands h2').click(function () {
    $('ul.brand').removeAttr('style');
  });

  /*-----------------------------------------------------------------------------------------*/

  //? add the loading
  $('.size-chart-table').append('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');

  /*-----------------------------------------------------------------------------------------*/

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

      //? make the table
      makeTable();

      //? remove the loading
      $('.tables-loading').remove();
    });
  } else {
    console.log('sheets found');
    // console.log(sheets);

    //? make the table
    makeTable();

    //? remove the loading
    $('.tables-loading').remove();
  }
});
