(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // jQuery('img[usemap]').rwdImageMaps();
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var message; //for dev
  // month = 9;
  // day = 2;

  switch (month) {
    //november
    case 11:
      if (day >= 26) {
        $('.holiday-closure').hide();
      } else if (day <= 25) {
        message = "<h3>Thanksgiving Day ".concat(month, "/25/").concat(year, "</h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //december & january

    case 12:
      // if(month == 1 && day >= 2){
      //     $('.holiday-closure').hide();
      // } else
      if (day >= 1) {
        year = year + 1; // message = `<ul>
        // <li>Christmas Eve ${month}/24</li>
        // <li>New Years Day 1/1/${year}</li>
        // </ul>`;

        $('.holiday-closure h2').text('CUSTOMER CARE HOLIDAY HOURS');
        message = "\n        <ul>\n          <li>Christmas Eve Hours: 7am PT - 2pm PT</li>\n          <li>Christmas Day CLOSED</li>\n          <li>New Year's Eve Hours: 7am PT - 2pm PT</li>\n          <li>New Years Day CLOSED</li>\n        </ul>\n        ";
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //january

    case 1:
      if (day >= 3) {
        $('.holiday-closure').hide();
      } else if (day <= 2) {
        message = "\n        <ul>\n          <li>New Years Day </li>\n        </ul>\n        ";
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //february
    // case 2:
    //     if(day >= 21){
    //         $('.holiday-closure').hide();
    //     } else if(day >= 1){
    //         message = '<h3>President\'s Day '+ month +'/20/'+ year +'</h3>';
    //         $('.holiday-closure p').html(message);
    //         $('.holiday-closure').show();
    //     }
    //     break;
    //march & april

    case 3:
      var month = month + 1;

      if (day <= 16) {
        $('.holiday-closure').hide();
      } else if (day >= 17) {
        message = "<h3>Easter ".concat(month, "/3/").concat(year, " - ").concat(month, "/4/").concat(year, "</h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //april

    case 4:
      if (day >= 5) {
        $('.holiday-closure').hide();
      } else if (day <= 4) {
        message = "<h3>Easter ".concat(month, "/3/").concat(year, " - ").concat(month, "/4/").concat(year, "</h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //may

    case 5:
      if (day <= 15) {
        $('.holiday-closure').hide();
      } else if (day >= 16) {
        message = "<h3>Memorial Day ".concat(month, "/31/").concat(year, " </h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //june & july

    case 6:
      if (day <= 15) {
        $('.holiday-closure').hide();
      } else if (day >= 16) {
        var month = month + 1;
        message = "<h3>Independence Day ".concat(month, "/4/").concat(year, " </h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //july

    case 7:
      if (day >= 5) {
        $('.holiday-closure').hide();
      } else if (day <= 4) {
        message = "<h3>Independence Day ".concat(month, "/4/").concat(year, " </h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //august & september

    case 8:
      if (day <= 15) {
        $('.holiday-closure').hide();
      } else if (day >= 16) {
        var month = month + 1;
        message = "<h3>Labor Day ".concat(month, "/6/").concat(year, "</h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
    //september

    case 9:
      if (day >= 7) {
        $('.holiday-closure').hide();
      } else if (day <= 6) {
        message = "<h3>Labor Day ".concat(month, "/6/").concat(year, "</h3>");
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }

      break;
  }
});


},{}]},{},[1]);
