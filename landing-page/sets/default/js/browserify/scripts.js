(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  $('.main-title').hide();
  var grid1 = [{
    count: 0
  }, {
    name: 'c01',
    id: '#20M4D931_multi',
    alt: 'BossBabyBrody'
  }, {
    name: 'c5',
    id: '#20M2D932_multi',
    alt: 'StrollerInTheCity'
  }, {
    name: 'c9',
    id: '#20M1D933_multi',
    alt: 'becmgross'
  }, {
    name: 'c11',
    id: '#20M1D934_multi',
    alt: 'Celeste_Wright'
  }, {
    name: 'c13',
    id: '#20M1D930_multi',
    alt: 'AnniePapi'
  }, {
    name: 'c15',
    id: '#20M8D930_multi',
    alt: 'tinygirlgang'
  }, {
    name: 'c17',
    id: '#20M3D932_multi',
    alt: 'andrea.coonrod'
  }, {
    name: 'c19',
    id: '#20M3D930_multi',
    alt: 'CaliGirlGetsFit'
  }, {
    name: 'c21',
    id: '#20M4D932_multi',
    alt: 'kingavriel'
  }
  /*
   {
      name: 'c23',
      id: '#20M3D931_multi',
      alt: 'Ashlee_Stood'
  },
   {
      name: 'c25',
      id: '#20M2D930_multi',
      alt: 'thefunemployedfamily'
  },
   {
      name: 'c27',
      id: '#20M6D931_multi',
      alt: 'papaanddaddy'
  },
  */
  ];
  var grid2 = [{
    count: 0
  }, {
    name: 'c23',
    id: '#20M3D931_multi',
    alt: 'Ashlee_Stood'
  }, {
    name: 'c25',
    id: '#20M2D930_multi',
    alt: 'thefunemployedfamily'
  }, {
    name: 'c27',
    id: '#20M6D931_multi',
    alt: 'papaanddaddy'
  }];

  var addContent = function addContent(arr) {
    $.each(arr, function (i, val) {
      // console.log(val.name, val.id);
      var elem = "\n        <div id=\"".concat(val.alt, "\" class=\"thumb-grid item\">\n            <img src=\"/mas_assets/media/tea_collection/landing-pages/sets/2020/0416/v0/grid/").concat(val.name, ".jpg\" alt=\"").concat(val.alt, "\">\n        </div>");

      if (val.name == 'c01') {
        $(val.id).before(elem);
      } else {
        $(val.id).after(elem);
      }
    });
    arr[0].count = arr[0].count + 1;
  };

  addContent(grid1);
  $('.load-more-wrap').on('inview', function (event, isInView) {
    if (isInView) {
      if (grid2[0].count == 0) {
        addContent(grid2);
      } else {
        console.log('dont do anything');
      }
    }
  });
});


},{}]},{},[1]);
