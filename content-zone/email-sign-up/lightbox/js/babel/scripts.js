"use strict";

var _api = require("./api.js");

// console.log(keys);
$(document).ready(function () {
  var url = window.location.href;
  var ac = "Desktop pop-up";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.signup .form button').click(function (e) {
    // console.log(e.target);
    var email = e.target.previousElementSibling.value;
    var valid = emailIsValid(email); // console.log('valid:' + valid);

    if (valid) {
      $('.signup .form').hide();
      $('.signup .sending').show();
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "MASTER_CONTACTS_LIST": 1 // "test list": 1

        },
        "vars": {
          "ACQUISITION_SOURCE": ac
        },
        "source": ac,
        "onSuccess": function onSuccess() {
          $('.signup .the-form').hide();
          $('.signup .thanks').show();
          window.dataLayer.push({
            'event': 'sailthru',
            'theUrl': url,
            'sailthruEmail': email,
            'sailthruSource': ac
          });
          var pdpObj = "{\"id\": \"".concat(email, "\", \"optout_email\": \"none\"}"); // console.log(pdpObj);

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
        }
      });
    } else {
      $('.signup .error').show();
      $('.signup input').focus();
    }
  }); //close the signup form

  $('.the-overlay, #close-icon2').click(function () {
    // console.log('close desktop');
    divinity.box.close();
    $('#tea-promo-subscribe').remove();
  });
});
//# sourceMappingURL=scripts.js.map
