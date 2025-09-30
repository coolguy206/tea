const sizeChartArr = require('./measuring-tips.js');
const changeCats = require('./change-cat.js');
const changeRow = require('./change-first-row-table.js');
const makeBrands = require('./make-shoe-brands.js');
const matchCats = require('./match-cats.js');
const showMeasuringTips = require('./show-measuring-tips.js');


module.exports = function () {

  var urlDept = 'girl';

  //?  set the dept dropdown
  $('.size-chart-container select.department').val(urlDept);

  //? onload change the cats dropdown if dept has changed
  //? make the category dropdown
  changeCats(sizeChartArr)

  var urlCat = `tops,dresses,bottoms`;

  //? this will set the correct cats to match the sheets based on the receieved url params
  //? for example: selectedDept=baby girl&selectedCat=swim
  matchCats(urlDept, urlCat);

  //? add the table header 
  changeRow();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();

  //? show measuring tips
  showMeasuringTips(urlDept);

};