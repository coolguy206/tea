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
      $(this).css('opacity', '1');
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

var _inview = require("./inview.js");
$(document).ready(function () {
  (0, _inview.inview)('.email-wrap');
  var a;
  var url = window.location.href;
  var c = $(".email-wrap").find("button");
  var e = null;
  var listId = "WpCvnc";
  // var listId = `UERrV4`;
  var companyId = "RAd6JR";
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  $(c).click(function (c) {
    c.preventDefault();
    var e = $(".email-wrap").find("input").val();
    $(".email-wrap .error").hide();
    var f = emailIsValid(e);
    if (f) {
      $(".email-wrap .sign-up .load-more-wrap").show();
      $(".email-wrap .input-fields").hide();
      var ac = "catalog_email_signup";

      // console.log(ac);

      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: listId,
            custom_source: ac,
            email: e
          }
        }
      };
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
          console.log('klaviyo email sign up page success');
          $(".email-wrap .sign-up").hide();
          $(".email-wrap .thanks").show();
        },
        error: function error() {
          $(".email-wrap .error").show();
          $(".email-wrap .input-fields").show();
          $(".email-wrap .sign-up .load-more-wrap").hide();
        }
      });
    } else {
      $(".email-wrap .error").show();
      $(".email-wrap .input-fields").show();
      $(".email-wrap .sign-up .load-more-wrap").hide();
    }
  });
});

},{"./inview.js":1}]},{},[2]);
