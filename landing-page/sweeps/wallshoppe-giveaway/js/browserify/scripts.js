(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;
var inview = exports.inview = function inview(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img');
      // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);
      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-set');
        // console.log(src);
        if (src) {
          $(val).attr('src', src);
        }
        $(val).removeAttr('data-set');
      });
      $(this).css('visibility', 'visible');
    }
  });
};

// module.exports = function(elem) {
//   // console.log(`from inview.js`);
//   $(elem).on('inview', function(event, isInView) {
//     if (isInView) {
//       // element is now visible in the viewport
//       // console.log('in view');
//       let imgs = $(this).find('img');
//       // let width = $(window).width();
//       // console.log(imgs);
//       // console.log(width);
//       $.each(imgs, function(i, val) {
//         let src = $(val).attr('data-src');
//         // console.log(src);
//         if (src) {
//           $(val).attr('src', src);
//         }
//         $(val).removeAttr('data-src');
//       });
//     }
//   });
// };

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneConvert = void 0;
var phoneConvert = exports.phoneConvert = function phoneConvert(string) {
  var newString = string.match(/[0-9]{0,14}/g);
  if (newString === null) {
    return '';
  }

  // Join parts returned from RegEx match
  newString = newString.join('');

  // Start number with "+"
  // newString = '+' + newString;

  if (newString[0].includes('1')) {
    newString = '+' + newString;
  } else {
    newString = '+1' + newString;
  }

  // Limit length to 15 characters
  newString = newString.substring(0, 15);
  return newString;
};

},{}],3:[function(require,module,exports){
"use strict";

var _inview = require("./inview.js");
var _phone = require("./phone.js");
// console.log(keys);

$(document).ready(function () {
  var notifiedDate = "10/17/25";
  $('.notified-date').html(notifiedDate);
  (0, _inview.inview)('.content-wrap');
  var companyId = "RAd6JR";
  var list = "SQf8fq";
  var custom_source = "WSG1025";
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  //? force phone to only be numbers
  $('.this-form input[name="the-phone"]').on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
  $('.this-form form button').click(function (e) {
    e.preventDefault();
    // console.log(e.target);
    var fname = $('.this-form input[name="fname"]').val();
    var lname = $('.this-form input[name="lname"]').val();
    var instagram = $('.this-form input[name="instagram"]').val();
    var email = $('.this-form input[name="email"]').val();
    // var childAge = $('.this-form input[name="childAge"]').val();
    var phone = $('.this-form input[name="the-phone"]').val();
    var checkbox = $('.this-form input[type=checkbox]').prop('checked');
    var valid = emailIsValid(email);
    // console.log(`
    //   fname: ${fname}
    //   lname: ${lname}
    //   email: ${email}
    //   checkbox: ${checkbox}
    //   valid: ${valid}`);

    if (valid && checkbox && fname !== '' && lname !== '' && instagram !== '') {
      $('.this-form form').hide();
      $('.this-form .sending').show();
      var theData = {
        data: {
          type: "subscription",
          attributes: {
            profile: {
              data: {
                type: "profile",
                attributes: {
                  properties: {
                    instagram: instagram
                  },
                  first_name: fname,
                  last_name: lname,
                  email: email
                }
              }
            },
            custom_source: custom_source
          },
          relationships: {
            list: {
              data: {
                type: "list",
                id: list
              }
            }
          }
        }
      };

      // if (childAge !== ``) {
      //   theData.data.attributes.properties.child_age = childAge;
      // }

      if (phone !== "" && phone.length == 10) {
        phone = (0, _phone.phoneConvert)(phone);
        theData.data.attributes.profile.data.attributes.phone_number = phone;
      }
      console.log(theData);
      theData = JSON.stringify(theData);
      $.ajax({
        url: "https://a.klaviyo.com/client/subscriptions/?company_id=".concat(companyId),
        type: 'post',
        data: theData,
        headers: {
          revision: '2024-10-15',
          'content-type': 'application/json'
        },
        success: function success(data, status, xhr) {
          console.log('klaviyo success register');
          // jQuery(document).trigger('klaviyoSuccess', data);
          $('.this-form .sending').hide();
          $('.this-form .successfully-sent').show();
        }
      });
    } else {
      console.log('error');
      $('.this-form .sending').hide();
      $('.this-form form').show();
      $('.this-form .this-error').css('display', 'block');
      $('.this-form input[name="fname"], .this-form input[name="lname"], .this-form input[name="instagram"], .this-form input[name="email"], .this-form input[type=checkbox]').addClass('error-border');
      // $('.this-form input').focus();
    }
  });
});

},{"./inview.js":1,"./phone.js":2}]},{},[3]);
