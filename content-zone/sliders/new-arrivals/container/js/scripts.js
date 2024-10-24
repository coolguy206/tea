
$(document).ready(function () {

  $('.new-arrivals-slider.boy').hide();

  $('.the-gender span').on('click', function(){
    var str = $(this).text().toLowerCase();

    $('.the-gender span').removeClass('selected');

    if(str == "girl"){
      $('.new-arrivals-slider.girl').show();
      $(this).addClass('selected');
      $('.new-arrivals-slider.boy').hide();
    } else {
      $('.new-arrivals-slider.girl').hide();
      $('.new-arrivals-slider.boy').show();
      $(this).addClass('selected');
    }
  });
});