(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;

var inview = function inview(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img'); // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);

      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-src'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-src');
      });
      $(this).css('visibility', 'visible');
    }
  });
}; // module.exports = function(elem) {
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


exports.inview = inview;


},{}],2:[function(require,module,exports){
"use strict";

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _inview.inview)('.content-wrap'); //force phone to only be numbers

  $("#this-form form input[name='the-phone']").on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
  var url = window.location.href;
  var ac = "supersecretredirect";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.this-form form button').click(function (e) {
    e.preventDefault(); // console.log(e.target);

    var fname = $('.this-form input[name="fname"]').val();
    var lname = $('.this-form input[name="lname"]').val();
    var email = $('.this-form input[name="email"]').val();
    var phone = $('.this-form input[name="phone"]').val();
    var checkbox = $('.this-form input[type=checkbox]').prop('checked');
    var valid = emailIsValid(email); // console.log(`
    //   fname: ${fname}
    //   lname: ${lname}
    //   email: ${email}
    //   checkbox: ${checkbox}
    //   valid: ${valid}`);

    if (valid) {
      $('.this-form form').hide();
      $('.this-form .sending').show();
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "MASTER_CONTACTS_LIST": 1 // "BTS_Sweeps_2022": 1

        },
        "vars": {
          "ACQUISITION_SOURCE": ac,
          // "first_name": fname,
          // "last_name": lname,
          "phone": phone
        },
        "source": ac,
        "onSuccess": function onSuccess() {
          $('.this-form .sending').hide();
          $('.this-form .successfully-sent').show();
          window.dataLayer.push({
            'event': 'sailthru',
            'theUrl': url,
            'sailthruEmail': email,
            'sailthruSource': ac
          });
        }
      });
    } else {
      console.log('error');
      $('.this-form .sending').hide();
      $('.this-form form').show();
      $('.this-form .this-error').css('display', 'block');
      $('.this-form input[name="fname"], .this-form input[name="lname"], .this-form input[name="email"], .this-form input[type=checkbox]').addClass('error-border'); // $('.this-form input').focus();
    }
  });
});


},{"./inview.js":1}]},{},[2]);
