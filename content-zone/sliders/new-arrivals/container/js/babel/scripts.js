"use strict";

$(document).ready(function () {
  $('.new-arrivals-slider.boy').hide();
  $('.new-arrivals-slider.girl').hide();
  $('.new-arrivals-slider.baby').hide();
  $('.the-gender span').on('click', function () {
    var str = $(this).text().toLowerCase();
    $('.the-gender span').removeClass('selected');
    if (str == "girl") {
      $('.new-arrivals-slider.boy').hide();
      $('.new-arrivals-slider.all').hide();
      $('.new-arrivals-slider.baby').hide();
      $('.new-arrivals-slider.girl').show();
      $(this).addClass('selected');
    } else if (str == "boy") {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.all').hide();
      $('.new-arrivals-slider.baby').hide();
      $('.new-arrivals-slider.boy').show();
      $(this).addClass('selected');
    } else if (str == "all") {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.boy').hide();
      $('.new-arrivals-slider.baby').hide();
      $('.new-arrivals-slider.all').show();
      $(this).addClass('selected');
    } else if (str == "baby") {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.boy').hide();
      $('.new-arrivals-slider.all').hide();
      $('.new-arrivals-slider.baby').show();
      $(this).addClass('selected');
    }
  });
});
