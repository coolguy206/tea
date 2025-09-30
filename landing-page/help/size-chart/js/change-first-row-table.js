
//? function to change the 1st row of the size chart table
module.exports = function () {

  var d = $('.size-chart-container select.department').val();
  var c = $('.size-chart-container select.category').val();

  var str;

  if (d == 'newborn') {
    str = d + ' size chart';
  } else if (c == 'sweater + outerwear') {
    str = d + ' outerwear size chart (sweaters + jackets)';
  } else {
    str = d + ' ' + c + ' size chart';
  }

  $('.size-chart-table table .size-chart-header th').html(str);
};