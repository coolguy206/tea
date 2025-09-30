"use strict";

var sizeChartArr = require('./measuring-tips.js');
var changeCats = require('./change-cat.js');
var onload = require('./onload.js');
var execute = require('./execute.js');
var getSheets = require('./get-sheets.js');
var showMeasuringTips = require('./show-measuring-tips.js');
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
  $.each(sizeChartArr, function (i, val) {
    var deptOption = '<option value="' + val.dept + '">' + val.dept + '</option>';
    $('.size-chart-container select.department').append(deptOption);
  });

  /*-----------------------------------------------------------------------------------------*/

  //? onload set the department and make the category dropdown and make the table header 
  onload();

  /*-----------------------------------------------------------------------------------------*/

  //? on .department change
  $('.size-chart-container select.department').change(function () {
    var dept = $(this).val();

    //? remove all the <option> in .category
    $('.size-chart-container select.category option').remove();

    //? change the cats dropdown
    changeCats(sizeChartArr);

    //? remake the tables
    execute(sheets);

    //? show the mearsuring tips
    showMeasuringTips(dept);
  });

  /*-----------------------------------------------------------------------------------------*/

  //? on .category change
  $('.size-chart-container select.category').change(function () {
    //? remake the tables
    execute(sheets);
  });

  /*-----------------------------------------------------------------------------------------*/

  //? on .category change
  $('.measure-content .category-headers a').on('click', function (e) {
    e.preventDefault();
    var dept = $(this).text();

    //? show the mearsuring tips
    showMeasuringTips(dept);
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

  //? get the sheets from google and make the tables
  getSheets(sheets, function (data) {
    sheets = data;
  });
});
