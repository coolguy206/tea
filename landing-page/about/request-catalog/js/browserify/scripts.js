(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _userSrc = require("./user-src.js");

jQuery(document).ready(function () {
  var companyId = "RAd6JR"; //? CATALOG REQUEST LIST

  var list1 = "VyxhXA"; //? MASTER EMAIL LIST

  var list2 = "WiTjSE";
  var custom_source = "request catalog";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  jQuery('#optin').change(function () {
    var cb = jQuery(this);

    if (cb.prop('checked')) {
      jQuery(this).val('yes');
    } else {
      jQuery(this).val('no');
    }
  }); //add the user source

  $.each(_userSrc.userSrc, function (i, val) {
    var option = '<option value="' + val.key + '">' + val.value + '</option>';
    $('#user-src').append(option);
  }); //submit the form

  $('.responsys').submit(function (e) {
    e.preventDefault();
    $('form.responsys input[type="submit"]').hide();
    $('form.responsys .sending').show();
    var fname = $('form.responsys input[name="first_name"]').val();
    var lname = $('form.responsys input[name="last_name"]').val();
    var address1 = $('form.responsys input[name="POSTAL_STREET_1_"]').val();
    var address2 = $('form.responsys input[name="POSTAL_STREET_2_"]').val();
    var city = $('form.responsys input[name="CITY_"]').val();
    var state = $('#states').val();
    var zip = $('form.responsys input[name="POSTAL_CODE_"]').val();
    var email = $('form.responsys input[name="EMAIL_ADDRESS_"]').val();
    var subscribe = $('#optin').val();
    var howHear = $('#user-src').val();

    if (howHear == "Please Select") {
      howHear = "";
    }

    var valid = emailIsValid(email); //remove all errors

    $('.responsys .the-error').remove();
    var theData = {
      data: {
        type: "subscription",
        attributes: {
          email: email,
          custom_source: custom_source,
          properties: {
            first_name: fname,
            last_name: lname,
            address1: address1,
            address2: address2,
            city: city,
            region: state,
            zip: zip,
            request_catalog_how_did_you_hear: howHear,
            country: "United States"
          }
        }
      }
    }; //? MAKE SURE A STATE IS SELECTED

    var states = $('#states').val();

    if (states == 'Please Select*') {
      var err = '<div class="the-error"><label></label><span class="error">Please Select a State</span></div>';
      $('#states').closest('div').before(err);
    } else if (valid && fname !== "" && lname !== "" && address1 !== "" && city !== "" && zip !== "") {
      //? PUSH TO CATALOG REQUEST LIST
      theData.data.attributes.list_id = list1;
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
          console.log('klaviyo success register push to catalog'); // jQuery(document).trigger('klaviyoSuccess', data);

          $('form.responsys .sending').hide();
          $('form.responsys .success').show();
          setTimeout(function () {
            $('form.responsys .success').fadeOut(function () {
              $('form.responsys input[type="submit"]').fadeIn();
            });
          }, 2000);
        }
      });

      if (subscribe == "yes") {
        //? PUSH MASTER EMAIL LIST IF SUBSCRIBE
        theData = JSON.parse(theData);
        theData.data.attributes.list_id = list2;
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
            console.log('klaviyo success register push to master'); // jQuery(document).trigger('klaviyoSuccess', data);
          }
        });
      }
    }
  }); //#states change

  $('#states').change(function (e) {
    var states = $('#states').val();

    if (states !== 'Please Select*') {
      //remove all errors
      $('.responsys .the-error').remove();
    }
  });
});


},{"./user-src.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSrc = void 0;
var userSrc = [{
  value: 'friend',
  key: 'friend'
}, {
  value: 'gift',
  key: 'gift'
}, {
  value: 'social media',
  key: 'social media'
}, {
  value: 'online ad',
  key: 'online ad'
}, {
  value: 'magazine/online article/blog',
  key: 'magazine/online article/blog'
}, {
  value: 'search engine',
  key: 'search'
}, {
  value: 'children\'s boutique',
  key: 'children boutique'
}, {
  value: 'department store',
  key: 'department store'
}, {
  value: 'Amazon',
  key: 'amazon'
}, {
  value: 'Zulily',
  key: 'zulily'
}, {
  value: 'registry website',
  key: 'registry website'
}, {
  value: 'other',
  key: 'other'
}];
exports.userSrc = userSrc;


},{}]},{},[1]);
