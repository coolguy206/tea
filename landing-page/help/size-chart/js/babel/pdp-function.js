"use strict";

var setCats = require('./set-cats.js');
var setDepts = require('./set-depts.js');
var getSheets = require('./get-sheets.js');
var sizeChartArr = require('./measuring-tips.js');
var changeCats = require('./change-cat.js');
var changeRow = require('./change-first-row-table.js');
var makeBrands = require('./make-shoe-brands.js');
var execute = require('./execute.js');
var matchCats = require('./match-cats.js');

//! CLOSE THE LIGHTBOX
$('body').on('click', '.overlay-size-chart, .size-chart-container h2.close', function () {
  //? remove the elements
  $('.overlay-size-chart, .overlay-content-size-chart').remove();
});

//? on .size-chart click
$('.size-chart').click(function (e) {
  e.preventDefault();
  //console.log(e);

  //prod
  var dept = $('#the-mpd').attr('data-department').toLowerCase();
  var cat = $('#the-mpd').attr('data-category').toLowerCase();

  //? set the departments
  dept = setDepts(dept);

  //? set the categories
  cat = setCats(cat, dept);

  // console.log('after setCats: ',cat);

  //! FOR DEV
  // var dept = 'girl';
  // var cat = 'dresses';

  //! MAKE THE OVERLAY ELEMENT 
  var overlay = '<div class="overlay-size-chart"></div>';

  //! MAKE THE CONTENT ELEMENT
  var overlayContent = "\n  <div class=\"overlay-content-size-chart\">\n\n    <div id=\"size-chart-section\">\n      <div class=\"size-chart-container\">\n        <h2 class=\"close\">size chart</h2>\n\n      <div class=\"dropdowns\">\n        <select class=\"department\"></select>\n        <select class=\"category\"></select>\n      </div>\n\n      <div class=\"main-content\">\n        <div class=\"size-chart-table\">\n          <table class=\"the-table\">\n            <tr class=\"size-chart-header\">\n              <th></th>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n";

  //? prepend overlay element to body
  $('body').prepend(overlay);

  //? prepend overlay content element to body
  $('body').prepend(overlayContent);

  //? add the loading
  $('.size-chart-table').append('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');

  //? make the dept dropdown
  $.each(sizeChartArr, function (i, val) {
    var deptOption = '<option value="' + val.dept + '">' + val.dept + '</option>';
    $('.size-chart-container select.department').append(deptOption);
  });

  //? set the dept dropdown
  $('.size-chart-container select.department').val(dept);

  //? make the category dropdown based on the dept
  changeCats(sizeChartArr);

  //? this will set the correct cats to match the sheets
  matchCats(dept, cat);

  //? add the table header 
  changeRow();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();

  //? get the sheets from google and make the tables
  getSheets(sheets, function (sheetsData) {
    sheets = sheetsData;
  });

  /*-----------------------------------------------------------------------------------------*/

  //? on .department change
  $('.size-chart-container select.department').change(function () {
    //? remove all the <option> in .category
    $('.size-chart-container select.category option').remove();

    //? change the cats dropdown
    changeCats(sizeChartArr);

    //? remake the tables
    execute(sheets);
  });

  /*-----------------------------------------------------------------------------------------*/

  //? on .category change
  $('.size-chart-container select.category').change(function () {
    //? remake the tables
    execute(sheets);
  });

  /*-----------------------------------------------------------------------------------------*/
});
