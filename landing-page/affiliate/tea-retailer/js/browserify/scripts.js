(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneConvert = void 0;

var phoneConvert = function phoneConvert(string) {
  var newString = string.match(/[0-9]{0,14}/g);

  if (newString === null) {
    return '';
  } // Join parts returned from RegEx match


  newString = newString.join(''); // Start number with "+"
  // newString = '+' + newString;

  if (newString[0].includes('1')) {
    newString = '+' + newString;
  } else {
    newString = '+1' + newString;
  } // Limit length to 15 characters


  newString = newString.substring(0, 15);
  return newString;
};

exports.phoneConvert = phoneConvert;


},{}],2:[function(require,module,exports){
"use strict";

var _phone = require("./phone.js");

$(document).ready(function () {
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.content-wrap form').submit(function (e) {
    e.preventDefault();
    var companyId = "RAd6JR";
    var list = "YmWmN9";
    var custom_source = "";
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
      $('.content-wrap form .processing').show();
      $('.content-wrap form button').hide();
      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: list,
            custom_source: custom_source,
            email: email,
            properties: {
              first_name: firstName,
              last_name: lastName,
              store_type: type,
              company: company,
              website: website,
              city: city,
              country: "United States",
              region: state
            }
          }
        }
      };

      if (phone !== "") {
        phone = (0, _phone.phoneConvert)(phone);
        theData.data.attributes.phone_number = phone;
      }

      console.log(theData);
      theData = JSON.stringify(theData);
      $.ajax({
        url: "https://a.klaviyo.com/client/subscriptions/?company_id=".concat(companyId),
        type: 'post',
        data: theData,
        headers: {
          revision: '2023-02-22',
          'content-type': 'application/json'
        },
        success: function success(data, status, xhr) {
          console.log('klaviyo success register'); // jQuery(document).trigger('klaviyoSuccess', data);

          $('span.error').hide();
          $('.content-wrap form .processing').hide();
          $('.content-wrap form .sent').show(); // $('#emailField').val('')

          setTimeout(function () {
            $('.content-wrap form .sent').fadeOut();
            $('.content-wrap form button').fadeIn();
          }, 2000);
        }
      });
    } else {
      console.log("email not valid");
      $('span.error').show();
      $('input#email').focus();
    }
  });
});


},{"./phone.js":1}]},{},[2]);
