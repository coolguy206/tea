(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.content-wrap form').submit(function (e) {
    e.preventDefault();
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var type = $("input[name='type']:checked").val();
    var company = $('#company').val();
    var website = $('#URL').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var valid = emailIsValid(email);

    if (valid) {
      console.log(firstName, lastName, email, phone, company, website, city, state);
      $('.content-wrap form .processing').show();
      $('.content-wrap form button').hide();
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "WHOLESALE_LEADS": 1
        },
        "vars": {
          "first name": firstName,
          "last name": lastName,
          "phone": phone,
          "store type": type,
          "company": company,
          "website": website,
          "city": city,
          "state": state
        },
        "onSuccess": function onSuccess() {
          console.log('sailthru tea retailer sucess');
          $('span.error').hide();
          $('.content-wrap form .processing').hide();
          $('.content-wrap form .sent').show(); // $('#emailField').val('')

          setTimeout(function () {
            $('.content-wrap form .sent').fadeOut();
            $('.content-wrap form button').fadeIn();
          }, 2000);
        },
        "onError": function onError() {
          console.log('sailthru footer error');
        }
      });
    } else {
      console.log("email not valid");
      $('span.error').show();
      $('input#email').focus();
    }
  });
});


},{}]},{},[1]);
