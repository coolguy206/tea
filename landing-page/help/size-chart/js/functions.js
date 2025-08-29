const shoeBrands = require('./shoe-brands.js');
const sizeChartArr = require('./measuring-tips.js');
const changeCats = require('./change-cat.js');
const changeRow = require('./change-first-row-table.js');
const selectDeptCat = require('./set-dept-cat-by-url.js');
const brandChange = require('./change-shoe-brand.js');
const makeBrands = require('./make-shoe-brands.js');
const makeTd = require('./make-td.js');
const outputTable = require('./output-table.js');
const makeTableHeader = require('./make-table-header.js');
const makeTable = require('./make-table.js');
const onload = require('./onload.js');
const execute = require('./execute.js');

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
  const sheetId = `1ZzzDWxntUHpk4pSavmAgCSSUpNpmmbC1xkyKIH_2P8c`;

  //? api key
  // var hidden = 'AIzaSyDHknRbkWGT1ozvC_H_rNtFlLsGGjXFs';
  const hidden = 'AIzaSyCya37AW8ylhzoeU3FDFuUG824MfdW8wY8';
  const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${hidden}&includeGridData=true`;

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