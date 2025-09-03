const setCats = require('./set-cats.js');
const setDepts = require('./set-depts.js');
const getSheets = require('./get-sheets.js');
const sizeChartArr = require('./measuring-tips.js');
const changeCats = require('./change-cat.js');
const changeRow = require('./change-first-row-table.js');
const makeBrands = require('./make-shoe-brands.js');
const execute = require('./execute.js');
const matchCats = require('./match-cats.js');

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
  var overlayContent = `
  <div class="overlay-content-size-chart">

    <div id="size-chart-section">
      <div class="size-chart-container">
        <h2 class="close">size chart</h2>

      <div class="dropdowns">
        <select class="department"></select>
        <select class="category"></select>
      </div>

      <div class="main-content">
        <div class="size-chart-table">
          <table class="the-table">
            <tr class="size-chart-header">
              <th></th>
            </tr>
          </table>
        </div>
      </div>

    </div>
  </div>
`;

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
  getSheets(sheets, function (sheetsData) { sheets = sheetsData });


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