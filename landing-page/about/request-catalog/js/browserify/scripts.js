(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

jQuery(document).ready(function () {
  jQuery('#optin').change(function () {
    cb = jQuery(this);

    if (cb.prop('checked')) {
      jQuery(this).val('yes');
    } else {
      jQuery(this).val('no');
    }
  }); //add the states

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
  }]; //add the user source

  $.each(userSrc, function (i, val) {
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
    } //remove all errors


    $('.responsys .the-error').remove(); //make sure a state is selected

    var states = $('#states').val();

    if (states == 'Please Select*') {
      var err = '<div class="the-error"><label></label><span class="error">Please Select a State</span></div>';
      $('#states').closest('div').before(err);
    } else {
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "MASTER_CONTACTS_LIST": 1
        },
        "vars": {
          "CATALOG_REQUEST": "yes",
          "first_name": fname,
          "last_name": lname,
          "Address 1": address1,
          "Address 2": address2,
          "City": city,
          "State": state,
          "Zip": zip,
          "Subscribe": subscribe,
          "How Did You Hear About Tea?": howHear
        },
        "onSuccess": function onSuccess() {
          $('form.responsys .sending').hide();
          $('form.responsys .success').show();
          setTimeout(function () {
            $('form.responsys .success').fadeOut(function () {
              $('form.responsys input[type="submit"]').fadeIn();
            });
          }, 2000);
        }
      });
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


},{}]},{},[1]);
