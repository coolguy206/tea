"use strict";

// import {
//   keys
// } from './api.js';
// console.log(keys);
$(document).ready(function () {
  var url = window.location.href;
  var ac = "baby giveaway";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.this-form form button').click(function (e) {
    e.preventDefault(); // console.log(e.target);

    var fname = $('.this-form input[name="fname"]').val();
    var lname = $('.this-form input[name="lname"]').val();
    var email = $('.this-form input[name="email"]').val();
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
          "Baby_giveaway_sept_2021": 1
        },
        "vars": {
          "ACQUISITION_SOURCE": ac,
          "first_name": fname,
          "last_name": lname
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
          }); // var pdpObj = `{"id": "${email}", "optout_email": "none"}`;
          // // console.log(pdpObj);
          //
          // var sig = md5(`${keys.secret}${keys.api}json${pdpObj}`);
          // // console.log(sig);
          //
          // var baseUrl = `https://api.sailthru.com/user`;
          //
          // var data = new FormData();
          // data.append("api_key", keys.api);
          // data.append("format", "json");
          // data.append("json", pdpObj);
          // data.append("sig", sig);
          //
          // var xhr = new XMLHttpRequest();
          // xhr.withCredentials = true;
          //
          // xhr.addEventListener("readystatechange", function() {
          //   if (this.readyState === 4) {
          //     console.log(this.responseText);
          //   }
          // });
          //
          // xhr.open("POST", baseUrl);
          //
          // xhr.send(data);
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
//# sourceMappingURL=scripts.js.map
