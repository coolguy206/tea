"use strict";

module.exports = function (sizeChartArr) {
  //? function to change the cats dropdown
  //? get the value of the .department

  var dept = $('.size-chart-container select.department').val();
  $.each(sizeChartArr, function (i, val) {
    //? get the cats that match the dept
    if (val.dept == dept) {
      //?loop through the cats and add to page
      $.each(val.cat, function (j, arr) {
        var catM = '<option value="' + arr.name + '">' + arr.name + '</option>';
        $('.size-chart-container select.category').append(catM);
      });
    }
  });
};
