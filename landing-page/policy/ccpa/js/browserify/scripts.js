(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  } //add states


  $.getJSON("https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json", function (result) {
    // console.log(result);
    $.each(result, function (i, val) {
      // console.log(val.name);
      switch (val.name) {
        case 'American Samoa':
        case 'Federated States Of Micronesia':
        case 'Guam':
        case 'Marshall Islands':
        case 'Northern Mariana Islands':
        case 'Palau':
        case 'Puerto Rico':
        case 'Virgin Islands':
          console.log('nope');
          break;

        default:
          var option = '<option value="' + val.abbreviation + '">' + val.name + '</option>';
          $('#states').append(option);
      }
    });
  });
  $('.question').on('click', 'button', function (e) {
    var value = $(this).attr('data-answer');

    if (value == 'yes') {
      $('.question').fadeOut(function () {
        $('.yes').fadeIn();
      });
    } else {
      $('.question').fadeOut(function () {
        $('.no').fadeIn();
      });
    }
  });
  $('.yes').on('click', 'button', function (e) {
    e.preventDefault();
    var first = $('.yes .first').val();
    var last = $('.yes .last').val();
    var email = $('.yes .email').val();
    var address1 = $('.yes .address1').val();
    var address2 = $('.yes .address2').val();
    var city = $('.yes .city').val();
    var zip = $('.yes .zip').val();
    var state = $('.yes #states').val();
    console.log(first, last, email, address1, address2, city, zip, states);
    var valid = emailIsValid(email);

    if (valid) {
      $('.yes').fadeOut(function () {
        $('.sending').fadeIn();
      });
      var y = $('.sending').position().top;
      window.scrollTo(0, y);
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "test": 1
        },
        "source": 'CCPA',
        "vars": {
          "First Name": first,
          "Last Name": last,
          "Address 1": address1,
          "Address 2": address2,
          "City": city,
          "State": state,
          "Zip": zip,
          "ACQUISITION_SOURCE": 'CCPA'
        },
        "onSuccess": function onSuccess() {
          console.log('sailthru success');
          $('.sending').fadeOut(function () {
            $('.success').fadeIn();
          });
          window.dataLayer.push({
            'event': 'sailthru CCPA',
            "theEmail": email,
            "theFirst": first,
            "theLast": last,
            "theAddress1": address1,
            "theAddress2": address2,
            "theCity": city,
            "theState": state,
            "theZip": zip
          });
        },
        "onError": function onError() {
          console.log('sailthru error');
          $('.sending').fadeOut(function () {
            $('.error').fadeIn();
          });
        }
      });
    } else {
      $('.error-message').show();
      var y = $('.error-message').position().top;
      window.scrollTo(0, y);
      $('.email').focus();
    }
  });
});


},{}]},{},[1]);
