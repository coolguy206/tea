module.exports = function () {
  //? function when click shoe brand go to external url

  //? collapse ul.brand on .brands click
  $('.brands, table, .measure-tips').click(function () {
    $('ul.brand').removeAttr('style');
  });

  //?expand or collapse
  //desktop dropdown to expand and collapse
  $('ul.brand').click(function () {
    //?check if has style attr remove it
    if ($(this).attr('style') !== undefined) {
      $(this).removeAttr('style');
    } else {
      //? if doesn't have style attr add css to expand
      $(this).css('height', 'auto');
    }
  });

  //? on .shoes change
  $('.size-chart-table').find('ul.brand li').click(function () {
    var txt = $(this).text();
    txt = txt.toLowerCase();
    var brand = $(this).attr('data-url');
    if (txt !== 'please select a brand') {
      window.open(brand, '_blank');
    }
  });


};