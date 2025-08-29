"use strict";

// const shoeBrands = require('./shoe-brands.js');
var sizeChartArr = require('./measuring-tips.js');
// const deptCat = require('./set-dept-cat.js');
var changeCats = require('./change-cat.js');
// const changeBackground = require('./change-background-image.js');
// const adjustMeasureCSS = require('./measuring-tips-css.js');
// const adjustTipsCSS = require('./tips-css.js');
// const addDataAttr = require('./add-data-dept.js');
// const changeRow = require('./change-first-row-table.js');
var selectDeptCat = require('./set-dept-cat-by-url.js');
// const changeCopy = require('./change-measuring-tips-copy.js');
// const changeOrder = require('./change-order.js');
// const brandChange = require('./change-shoe-brand.js');
// const makeBrands = require('./make-shoe-brands.js');
// const makeTd = require('./make-td.js');
// const outputTable = require('./output-table.js');
// const makeTableHeader = require('./make-table-header.js');
// const makeTable = require('./make-table.js');

module.exports = function () {
  //? onload get select Dept Cat based on url params
  var urlDept = selectDeptCat('selectedDept', '.size-chart-container select.department');

  //? this changes the dept although if there are no url params then it will return undefined so we add the default value of girl
  // console.log('onload.js')
  // console.log(urlDept);
  if (urlDept == undefined) {
    urlDept = 'girl';
  }
  //?  set the dept dropdown
  $('.size-chart-container select.department').val(urlDept);

  //? onload change the cats dropdown if dept has changed
  //? make the category dropdown
  changeCats(sizeChartArr);

  //? onload get select Cat based on url params
  var urlCat = selectDeptCat('selectedCat', '.size-chart-container select.category');

  //? this changes the cat although if there are no url params then it will return undefined so we add the default value of tops,dresses,bottoms
  // console.log('onload.js')
  // console.log(urlCat);
  if (urlCat == undefined) {
    urlCat = "tops,dresses,bottoms";
  }

  //? this will set the correct cats to match the sheets based on the receieved url params
  //? for example: selectedDept=baby girl&selectedCat=swim
  if (urlDept == "girl") {
    switch (urlCat) {
      case "dresses":
      case "tops":
      case "bottoms":
        $('.size-chart-container select.category').val("tops,dresses,bottoms");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "boy") {
    switch (urlCat) {
      case "tees + shirts":
      case "bottoms":
        $('.size-chart-container select.category').val("tees + shirts,bottoms");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "baby girl") {
    switch (urlCat) {
      case "dresses":
      case "tops":
      case "bottoms":
      case "swim":
      case "sweater + outerwear":
      case "pajamas":
        $('.size-chart-container select.category').val("dresses, tops, bottoms, swim, sweater + outerwear, pajamas");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "baby boy") {
    switch (urlCat) {
      case "tees + shirts":
      case "bottoms":
      case "swim":
      case "sweater + outerwear":
      case "pajamas":
        $('.size-chart-container select.category').val("tees + shirts, bottoms, swim, sweater + outerwear, pajamas");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "newborn") {
    switch (urlCat) {
      case "all categories":
        $('.size-chart-container select.category').val("all categories, Booties, Bibs, hats");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "women") {
    switch (urlCat) {
      case "swim":
      case "pajamas":
      case "dresses":
      case "tops":
        $('.size-chart-container select.category').val("swim,pajamas,dresses,tops");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else {
    $('.size-chart-container select.category').val(urlCat);
  }

  //onload change the background image
  // changeBackground(sizeChartArr);

  //onload change the copy
  // changeCopy(sizeChartArr);

  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  // adjustMeasureCSS();

  //if baby boy or baby girl adjust css on .tips
  // adjustTipsCSS();

  //add class to .tips
  // addDataAttr();

  //? change <th> of the .size-chart-table table
  // changeRow();

  //? make the table
  // makeTable();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  // makeBrands();

  //re-order the tables if shoes + accessories
  // changeOrder();
};
