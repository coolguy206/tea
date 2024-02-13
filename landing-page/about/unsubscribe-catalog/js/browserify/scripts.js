(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

jQuery(document).ready(function () {
  var ac = "catalog_optout";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  } //submit the form


  $('.sailthru').submit(function (e) {
    e.preventDefault(); //remove all errors

    $('.sailthru .the-error').remove(); //make sure a state is selected

    var states = $('#states').val();

    if (states == 'Please Select*') {
      var err = '<div class="the-error"><label></label><span class="error">Please Select a State</span></div>';
      $('#states').closest('div').before(err);
    } else {
      //vars
      var companyId = "RAd6JR";
      var list = "WspXGk";
      var email = $('.sailthru input[name="email"]').val();
      var fname = $('.sailthru input[name="FIRST_NAME"]').val();
      var lname = $('.sailthru input[name="LAST_NAME"]').val();
      var address1 = $('.sailthru input[name="POSTAL_STREET_1_"]').val();
      var address2 = $('.sailthru input[name="POSTAL_STREET_2_"]').val();
      var city = $('.sailthru input[name="CITY_"]').val();
      var state = $('.sailthru select[name="STATE_"]').val();
      var zip = $('.sailthru input[name="POSTAL_CODE_"]').val(); //hide form & show processing

      $('.sailthru').hide();
      $('.processing').show();
      var valid = emailIsValid(email);

      if (valid) {
        var theData = {
          data: {
            type: 'profile',
            attributes: {
              email: email,
              first_name: fname,
              last_name: lname,
              location: {
                address1: address1,
                address2: address2,
                city: city,
                country: "United States",
                region: state,
                zip: zip
              },
              properties: {
                catalog_optout: 'y'
              }
            }
          }
        };
        console.log(theData);
        theData = JSON.stringify(theData);
        fetch("https://a.klaviyo.com/client/profiles/?company_id=".concat(companyId), {
          method: "POST",
          headers: {
            revision: '2023-12-15',
            'content-type': 'application/json'
          },
          body: theData
        }).then(function (data) {
          console.log('klaviyo success register');
          console.log(data);
          $('.catalog-wrap .success').show();
          $('.sailthru').show();
          $('.processing').hide();
          $('span.error').hide(); //clear field

          $('.sailthru input[name="FIRST_NAME"]').val('');
          $('.sailthru input[name="LAST_NAME"]').val('');
          $('.sailthru input[name="POSTAL_STREET_1_"]').val('');
          $('.sailthru input[name="POSTAL_STREET_2_"]').val('');
          $('.sailthru input[name="CITY_"]').val('');
          $('.sailthru input[name="POSTAL_CODE_"]').val('');
        })["catch"](function (err) {
          console.log("something went wrong");
          console.log(err);
        });
      } else {
        console.log("email not valid");
        $('.sailthru').show();
        $('.processing').hide();
        $('span.error').show();
        $('input#email').focus();
      }
    }
  }); //#states change

  $('#states').change(function (e) {
    var states = $('#states').val();

    if (states !== 'Please Select*') {
      //remove all errors
      $('.sailthru .the-error').remove();
    }
  });
});


},{}]},{},[1]);
