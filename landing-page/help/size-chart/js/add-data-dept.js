
module.exports = function () {
  //? add class to .tips

  var onloadDeptVal = $('.size-chart-container select.department').val();

  $('.size-chart-container').find($('.tips')).attr('data-dept', onloadDeptVal);
};