(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

jQuery(document).ready(function () {
  var ac = "catalog_optout"; //submit the form

  $('.sailthru').submit(function (e) {
    e.preventDefault(); //remove all errors

    $('.sailthru .the-error').remove(); //make sure a state is selected

    var states = $('#states').val();

    if (states == 'Please Select*') {
      var err = '<div class="the-error"><label></label><span class="error">Please Select a State</span></div>';
      $('#states').closest('div').before(err);
    } else {
      //push to sail thru
      // console.log('push to sailthru');
      //set hidden field
      var date = new Date().toJSON(); // var date = new Date().toSource();
      // date = date.replace('(new Date(', '').replace('))', '');

      date = date.replace(/:/g, ''); // console.log(date);

      $('.sailthru input[name="email"]').val(date); //vars

      var email = $('.sailthru input[name="email"]').val() + '@teacollection.com';
      var fname = $('.sailthru input[name="FIRST_NAME"]').val();
      var lname = $('.sailthru input[name="LAST_NAME"]').val();
      var address1 = $('.sailthru input[name="POSTAL_STREET_1_"]').val();
      var address2 = $('.sailthru input[name="POSTAL_STREET_2_"]').val();
      var city = $('.sailthru input[name="CITY_"]').val();
      var state = $('.sailthru select[name="STATE_"]').val();
      var zip = $('.sailthru input[name="POSTAL_CODE_"]').val(); // console.log(email, fname, lname, address1, address2, city, state, zip);
      //hide form & show processing

      $('.sailthru').hide();
      $('.processing').show();
      Sailthru.integration("userSignUp", {
        "email": email,
        "lists": {
          "catalog_optouts": 1
        },
        "vars": {
          "ACQUISITION_SOURCE": ac,
          "first_name": fname,
          "last_name": lname,
          "address_1": address1,
          "address_2": address2,
          "city": city,
          "state": state,
          "zip": zip
        },
        "source": ac,
        "onSuccess": function onSuccess(e) {
          // console.log('success');
          $('.catalog-wrap .success').show();
          $('.sailthru').show();
          $('.processing').hide(); // console.log(e);
        },
        "onError": function onError(e) {
          console.log('error');
          console.log(e);
        }
      }); //clear field

      $('.sailthru input[name="FIRST_NAME"]').val('');
      $('.sailthru input[name="LAST_NAME"]').val('');
      $('.sailthru input[name="POSTAL_STREET_1_"]').val('');
      $('.sailthru input[name="POSTAL_STREET_2_"]').val('');
      $('.sailthru input[name="CITY_"]').val('');
      $('.sailthru input[name="POSTAL_CODE_"]').val('');
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
