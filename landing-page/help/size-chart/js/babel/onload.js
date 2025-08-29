"use strict";

var sizeChartArr = require('./measuring-tips.js');
var changeCats = require('./change-cat.js');
var changeRow = require('./change-first-row-table.js');
var selectDeptCat = require('./set-dept-cat-by-url.js');
var makeBrands = require('./make-shoe-brands.js');
module.exports = function () {
  //? onload get select Dept Cat based on url params
  var urlDept = selectDeptCat('selectedDept', '.size-chart-container select.department');

  //? this changes the dept although if there are no url params then it will return undefined so we add the default value of girl
  // console.log('onload.js')
  // console.log(urlDept);
  if (urlDept === undefined || urlDept === null) {
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
  if (urlCat === undefined || urlCat === null) {
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

  //? add the table header 
  changeRow();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();
};
