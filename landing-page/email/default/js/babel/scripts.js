"use strict";

var _inview = require("./inview.js");
$(document).ready(function () {
  (0, _inview.inview)('.email-wrap');
  var a;
  var url = window.location.href;
  var c = $(".email-wrap").find("button");
  var e = null;
  var listId = "WiTjSE";
  // var listId = `UERrV4`;
  var companyId = "RAd6JR";
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (url.indexOf("?") !== -1) {
    var f = url.split("?")[1].split("&");
    $.each(f, function (b, c) {
      if (c.indexOf("utm_campaign") !== -1) {
        var d = c.split("=")[1];
        a = d;
      } else if (c.indexOf("p") !== -1) {
        var f = c.split("=")[1];
        e = f;
      }
    });
    console.log("e = ".concat(e));

    //? ONLY EXECUTE IF E EQUALS A VALUE NOT NULL
    if (e !== null) {
      var g = "<p>Sign up for exclusive offers, new<br> styles, and ".concat(e, "% off your first order!*</p>");
      $(".email-wrap .sign-up .default").hide();
      $(".email-wrap .sign-up .promo-message").append(g);
      $(".email-wrap .new-customers").show();
      var h = "<p>Keep an eye on your<br class=\"br-m\"> inbox for ".concat(e, "% off.</p>");
      $(".email-wrap .thanks .default").hide();
      $(".email-wrap .thanks .promo-message").append(h);
    }
  } else {
    a = "email sign up landing page";
    // a = "25FFE10";
  }
  $(c).click(function (c) {
    c.preventDefault();
    var e = $(".email-wrap").find("input").val();
    $(".email-wrap .error").hide();
    var f = emailIsValid(e);
    if (f) {
      $(".email-wrap .sign-up .load-more-wrap").show();
      $(".email-wrap .input-fields").hide();
      var ac = "email sign up landing page";

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
