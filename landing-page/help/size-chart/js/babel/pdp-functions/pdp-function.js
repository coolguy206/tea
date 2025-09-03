"use strict";

var setCats = require('./set-cats.js');
var setDepts = require('./set-depts.js');
var getSheets = require('./../get-sheets.js');

//? on .size-chart click
$('.size-chart').click(function (e) {
  e.preventDefault();
  //console.log(e);

  var sheets, rows, colspan;

  //prod
  var dept = $('#the-mpd').attr('data-department').toLowerCase();
  var cat = $('#the-mpd').attr('data-category').toLowerCase();

  //? set the departments
  dept = setDepts(dept);

  //? set the categories
  cat = setCats(cat, dept);

  // console.log('after setCats: ',cat);

  //! FOR DEV
  // var dept = 'girl';
  // var cat = 'dresses';

  //! MAKE THE OVERLAY ELEMENT 
  var overlay = '<div class="overlay" style="display: block; width:100%; height:100%; top:0; left:0; background:#000; opacity:.5; position:fixed; z-index:99;"></div>';

  //! MAKE THE CONTENT ELEMENT
  var overlayContent = "\n  <div class=\"overlay-content\" style=\"\n    background: #fff;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    height: 90%;\n    overflow: auto;\n    z-index: 999;\n    padding-bottom: 20px;\n    transform: translate(-50%, -50%);\">\n\n    <div id=\"size-chart-section\">\n      <div class=\"size-chart-container\">\n        <h2>size chart</h2>\n\n      <div class=\"dropdowns\">\n        <select class=\"department\"></select>\n        <select class=\"category\"></select>\n      </div>\n\n      <div class=\"main-content\">\n        <div class=\"size-chart-table\">\n          <table class=\"the-table\">\n            <tr class=\"size-chart-header\">\n              <th></th>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n";

  //? prepend overlay element to body
  $('body').prepend(overlay);

  //? prepend overlay content element to body
  $('body').prepend(overlayContent);

  //? get the sheets from google and make the tables
  getSheets();

  //? add h1 background image of the x
  $('.size-chart-container h1').css({
    background: "url('https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/close.png') no-repeat 24px center",
    padding: "17px 0"
  });

  //? add css for hover h1 and overlay
  $('.size-chart-container h1, .overlay').hover(function () {
    $(this).css('cursor', 'pointer');
  }, function () {
    $(this).css('cursor', 'none');
  });

  //! CLOSE THE LIGHTBOX
  $('.overlay, .size-chart-container h1').click(function () {
    //remove the url parameters
    var theUrl = window.location.href;
    var newUrl;
    if (theUrl.indexOf('?' + params) !== -1) {
      newUrl = theUrl.replace('?' + params, '');
    } else {
      newUrl = theUrl.replace('&' + params, '');
    }
    window.location.href = newUrl;

    //? remove the elements
    $('.overlay, .overlay-content').remove();
  });

  /*
  //! MAKE THE GET CALL
  $.get(url, function (data) {
      //! FIND THE SIZE CHART
    var sizeChart = $(data).find('#size-chart-section').html();
    //console.log(sizeChart);
      //desktop
    if ($(window).width() > 737) {
  
      //append sizeChart to overlayContent
      $('.overlay-content').append(sizeChart);
    }
      //mobile
    else if ($(window).width() < 737) {
        //! MAKE THE CONTENT ELEMENT
      var overlayContent = $('<div class="overlay-content" style="background: #fff; position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; z-index: 999999; padding-bottom: 20px;"></div>');
        //prepend overlay content element to body
      $('body').prepend(overlayContent);
        //append sizeChart to overlayContent
      $('.overlay-content').append(sizeChart);
    }
      //? hide the h1 in overlayContent
    // $('.size-chart-container h1').text('');
    });
  */
});
