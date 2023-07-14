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
  var url = window.location.href;
  var companyId = "RAd6JR";
  var list1 = "XQN7pP";
  var list2 = "SGNXSc";
  var custom_source = "";
  $('.main-content a').click(function (e) {
    // e.preventDefault();
    var id = $(this).attr('href');
    $('.forms div').hide();
    $(id).show();
  });

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.forms button').click(function (e) {
    // console.log(e.target);
    e.preventDefault();
    var ac = $(this).attr('data-list');
    var thisForm = $(this).closest('form'); //? force phone to only be numbers

    console.log($(thisForm).find('input[name="the-phone"]'));
    $(thisForm).find('input[name="the-phone"]').on('input', function (e) {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
    }); //user info

    var email = $(thisForm).find('input[name="user-email"]').val();
    var fname = $(thisForm).find('input[name="user-fname"]').val();
    var lname = $(thisForm).find('input[name="user-lname"]').val();
    var phone = $(thisForm).find('input[name="the-phone"]').val();
    var affiliation = $(thisForm).find('input[name="user-affiliation"]').val();
    var how = $(thisForm).find('input[name="user-how"]').val();
    var refer = $(thisForm).find('input[name="user-refer-name"]').val(); //org info

    var orgName = $(thisForm).find('input[name="org-name"]').val();
    var orgAddress = $(thisForm).find('input[name="org-address"]').val();
    var orgEIN = $(thisForm).find('input[name="org-ein"]').val();
    var state = $(thisForm).find('.states').val();
    var city = $(thisForm).find('input[name="org-city"]').val();
    var valid = emailIsValid(email); // console.log('valid:' + valid);

    if (valid && fname !== "" && lname !== "" && orgName !== "" && orgAddress !== "" && city !== "" && state !== "please choose") {
      // $('.signup .form').hide();
      // $('.signup .sending').show();
      var theData = {
        data: {
          type: "subscription",
          attributes: {
            email: email,
            properties: {
              first_name: fname,
              last_name: lname,
              school_days_organization_name: orgName,
              school_days_organization_affiliation: affiliation,
              school_days_organization_city: city,
              school_days_organization_region: state,
              school_days_organization_country: "United States"
            }
          }
        }
      };

      if (phone !== "" && phone.length == 10) {
        phone = (0, _phone.phoneConvert)(phone);
        theData.data.attributes.phone_number = phone;
      }

      if (ac == "school days sign up" && orgEIN !== "") {
        theData.data.attributes.custom_source = ac;
        theData.data.attributes.list_id = list1;
        theData.data.attributes.properties.school_days_organization_org_ein = orgEIN;
        theData.data.attributes.properties.school_days_organization_address = orgAddress;
        theData.data.attributes.properties.school_days_organization_how = how;
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

            $('.forms .error, .forms .join-today').hide();
            $('.forms .success h2').html('Successfully sent! <br> Look out for an email from <br> The School Days team shortly.');
            $('.forms .success').show();
          }
        });
      } else if (ac == "school days referral") {
        theData.data.attributes.custom_source = ac;
        theData.data.attributes.list_id = list2;
        theData.data.attributes.properties.school_days_organization_referer = refer;
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

            $('.forms .error, .forms .refer-org').hide();
            $('.forms .success h2').html('Successfully sent!');
            $('.forms .success').show();
          }
        });
      } else {
        $('.forms .error').show();
      }
    } else {
      $('.forms .error').show();
    }
  });
});


},{"./phone.js":1}]},{},[2]);
