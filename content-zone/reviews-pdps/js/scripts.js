$(document).ready(function () {

  $('.product-page #item-reviews #review-container .h-review .pdp-review .review').on('click', function () {
    var classList = $(this).find('span').attr('class');
    console.log(classList);
    if (classList == undefined || classList == '') {
      $(this).addClass('showing');
      $(this).find('span').attr('class', 'showing');
      $(this).find('span').fadeIn();
      $(this).next().addClass('showing');
      $(this).next().fadeIn();
    } else if (classList == 'showing') {
      $(this).removeClass('showing');
      $(this).find('span').attr('class', '');
      $(this).find('span').fadeOut();
      $(this).next().removeClass('showing');
      $(this).next().fadeOut();
    }
  });

});
