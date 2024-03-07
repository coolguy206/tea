(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//on .size-chart click
$('.size-chart').click(function (e) {
  e.preventDefault();
  //console.log(e);

  //get the department & category
  //var dept = $('#the-dept-cat').attr('data-department').toLowerCase();
  //var cat = $('#the-dept-cat').attr('data-category').toLowerCase();

  //prod
  var dept = $('#the-mpd').attr('data-department').toLowerCase();
  var cat = $('#the-mpd').attr('data-category').toLowerCase();

  //if statements
  if (dept == 'kid girl' || dept == '') {
    dept = 'girl';
  }
  if (dept == 'little girl') {
    dept = 'baby girl';
  }
  if (dept == 'little boy') {
    dept = 'baby boy';
  }
  if (dept.indexOf('newborn') !== -1 || dept.indexOf('layette') !== -1) {
    dept = 'newborn';
    cat = 'all categories';
  }
  var setCats = function setCats() {
    // console.log('function setCats: ', dept,cat);

    if (cat == 'hoodies' || cat == 'tops') {
      if (dept == 'girl' || dept == 'baby girl') {
        cat = 'tops';
      }
      if (dept == 'boy' || dept == 'baby boy') {
        cat = 'tees + shirts';
      }
    } else if (cat == 'dresses') {
      cat = 'dresses';
    } else if (cat == 'leggings' || cat == 'pants' || cat == 'skirts' || cat == 'bottoms') {
      cat = 'bottoms';
    } else if (cat == 'swimwear') {
      cat = 'swim';
    } else if (cat == 'outerwear' || cat == 'sweaters') {
      cat = 'sweater + outerwear';
    } else if (cat == 'sleepwear') {
      cat = 'pajamas';
    } else if (cat == 'accessories' || cat == 'shoes') {
      cat = 'shoes + accessories';
    } else {
      if (dept == 'girl') {
        // console.log('its girl defaults');
        cat = 'dresses';
      } else if (dept == 'boy') {
        // console.log('its boy defaults');
        cat = 'tees + shirts';
      }

      // else if (dept == 'baby girl' || dept == 'baby boy') {
      // console.log('its baby girl & baby boy defaults');
      // cat = 'rompers';
      // }
    }

    // console.log('results ',cat);
  };

  //set defautls
  setCats();
  // console.log('after setCats: ',cat);

  //set the <a> to open in a new window with the URL parameters
  $(this).attr('target', '_blank');
  $(this).attr('href', '/here-to-help/size-chart?selectedDept=' + dept + '&selectedCat=' + cat);
  window.open('/here-to-help/size-chart?selectedDept=' + dept + '&selectedCat=' + cat, '_blank');

  /*
  ! THIS CODE DOESN'T WORK AND NEEDS FIXING
    ! FOR DEV
  // var dept = 'girl';
  // var cat = 'dresses';
    ! THE SIZE CHART URL 
  var url = '/cms/size-chart/size-chart-tea-collection/1.html';
    ! APPEND THE PARAMETERS AT THE END OF THE URL
  var params = encodeURI('selectedDept=' + dept + '&selectedCat=' + cat);
  var thisUrl = window.location.href;
  
  !CHECK IF HAVE PARAMETERS ALREADY
  if (thisUrl.indexOf('?') !== -1) {
    window.location.href = thisUrl + '&' + params;
  } else {
    window.location.href = thisUrl + '?' + params;
  }
    !MAKE THE GET CALL
  $.get(url, function(data) {
      !FIND THE SIZE CHART
    var sizeChart = $(data).find('#size-chart-section').html();
    //console.log(sizeChart);
      //desktop
    if ($(window).width() > 737) {
      ! MAKE THE OVERLAY ELEMENT 
      var overlay = '<div class="overlay" style="width:100%; height:100%; background:#000; opacity:.5; position:fixed; z-index:99999;"></div>';
        ! MAKE THE CONTENT ELEMENT
      var overlayContent = $('<div class="overlay-content" style="background: #fff; position: fixed; top: 5%; left: 29%; width: 700px; height: 87%; overflow: auto; z-index: 999999; padding-bottom: 20px;"></div>');
        //prepend overlay element to body
      $('body').prepend(overlay);
        //prepend overlay content element to body
      $('body').prepend(overlayContent);
        //append sizeChart to overlayContent
      $('.overlay-content').append(sizeChart);
    }
      //mobile
    else if ($(window).width() < 737) {
        !MAKE THE CONTENT ELEMENT
      var overlayContent = $('<div class="overlay-content" style="background: #fff; position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; z-index: 999999; padding-bottom: 20px;"></div>');
        //prepend overlay content element to body
      $('body').prepend(overlayContent);
        //append sizeChart to overlayContent
      $('.overlay-content').append(sizeChart);
    }
      //hide the h1 in overlayContent
    // $('.size-chart-container h1').text('');
      //add h1 background image of the x
    $('.size-chart-container h1').css({
      background: "url('https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/close.png') no-repeat 24px center",
      padding: "17px 0"
    });
      //add css for hover h1 and overlay
    $('.size-chart-container h1, .overlay').hover(function() {
      $(this).css('cursor', 'pointer');
    }, function() {
      $(this).css('cursor', 'none');
    });
      ! CLOSE THE LIGHTBOX
    $('.overlay, .size-chart-container h1').click(function() {
      //remove the url parameters
      var theUrl = window.location.href;
      var newUrl;
      if (theUrl.indexOf('?' + params) !== -1) {
        newUrl = theUrl.replace('?' + params, '');
      } else {
        newUrl = theUrl.replace('&' + params, '');
      }
      window.location.href = newUrl;
        //remove the elements
      $('.overlay, .overlay-content').remove();
    });
  });
  */
});


},{}]},{},[1]);
