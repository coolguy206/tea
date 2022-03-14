(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = void 0;
var keys = {
  api: "8379ab7deccf4e4aa16a01990e0f4fa2",
  secret: "a05b94dd5722b409a097f77b14795d05"
};
exports.keys = keys;


},{}],2:[function(require,module,exports){
"use strict";

var _api = require("./api.js");

// console.log(keys);
$(document).ready(function () {
  var url = window.location.href;
  var ac = "20thsweeps_LP";

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

    if (valid && checkbox && fname !== '' && lname !== '') {
      $('.this-form form').hide();
      $('.this-form .sending').show();
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          // "MASTER_CONTACTS_LIST": 1
          "20Years_Sweeps": 1
        },
        "vars": {
          "ACQUISITION_SOURCE": ac,
          "first_name": fname,
          "last_name": lname,
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
      console.log('error');
      $('.this-form .sending').hide();
      $('.this-form form').show();
      $('.this-form .this-error').css('display', 'block');
      $('.this-form input[name="fname"], .this-form input[name="lname"], .this-form input[name="email"], .this-form input[type=checkbox]').addClass('error-border'); // $('.this-form input').focus();
    }
  });
});


},{"./api.js":1}]},{},[2]);
