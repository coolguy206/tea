"use strict";

var _api = require("./api.js");

$(document).ready(function () {
  var a,
      b = window.location.href,
      c = $(".email-wrap").find("button"),
      d = function d(a) {
    return /^[^s@]+@[^s@]+.[^s@]+$/.test(a);
  },
      e = null;

  if (b.indexOf("?") !== -1) {
    var f = b.split("?")[1].split("&");

    if ($.each(f, function (b, c) {
      if (c.indexOf("utm_campaign") !== -1) {
        var d = c.split("=")[1];
        a = d;
      } else if (c.indexOf("p") !== -1) {
        var f = c.split("=")[1];
        e = f;
      }
    }), console.log(e), null !== e) {
      var g = "<p>Sign up for exclusive offers, new<br> styles, and ".concat(e, "% off your first order!*</p>");
      $(".email-wrap .sign-up .default").hide(), $(".email-wrap .sign-up .promo-message").append(g), $(".email-wrap .new-customers").show();
      var h = '<p>Keep an eye on your<br class="br-m"> inbox for '.concat(e, "% off.</p>");
      $(".email-wrap .thanks .default").hide(), $(".email-wrap .thanks .promo-message").append(h);
    }
  } else a = "email sign up landing page";

  $(c).click(function (c) {
    c.preventDefault();
    var e = $(".email-wrap").find("input").val();
    $(".email-wrap .error").hide();
    var f = d(e);
    f ? ($(".email-wrap .sign-up .load-more-wrap").show(), $(".email-wrap .input-fields").hide(), Sailthru.integration("userSignUp", {
      id: e,
      email: e,
      lists: {
        MASTER_CONTACTS_LIST: 1
      },
      vars: {
        ACQUISITION_SOURCE: a
      },
      source: a,
      onSuccess: function onSuccess() {
        console.log("sailthru email sign up page success"), $(".email-wrap .sign-up").hide(), $(".email-wrap .thanks").show(), window.dataLayer.push({
          event: "sailthru",
          theUrl: b,
          sailthruEmail: e,
          sailthruSource: a
        });
        var pdpObj = "{\"id\": \"".concat(e, "\", \"optout_email\": \"none\"}"); // console.log(pdpObj);

        var sig = md5("".concat(_api.keys.secret).concat(_api.keys.api, "json").concat(pdpObj)); // console.log(sig);

        var baseUrl = "https://api.sailthru.com/user";
        var data = new FormData();
        data.append("api_key", _api.keys.api);
        data.append("format", "json");
        data.append("json", pdpObj);
        data.append("sig", sig);
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });
        xhr.open("POST", baseUrl);
        xhr.send(data);
      },
      onError: function onError() {
        console.log("sailthru email sign up page error");
      }
    })) : ($(".email-wrap .error").show(), $(".email-wrap .input-fields").show(), $(".email-wrap .sign-up .load-more-wrap").hide());
  });
});
//# sourceMappingURL=scripts.js.map
