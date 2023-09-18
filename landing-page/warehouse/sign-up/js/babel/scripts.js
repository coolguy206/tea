"use strict";

var _inview = require("./inview.js");

var _phone = require("./phone.js");

$(document).ready(function () {
  //change maxlength for phone to 10 digit
  // $('#this-form form input[name="the-phone"]').attr('maxlength', 10);
  //? force phone to only be numbers
  $("#this-form form input[name='the-phone']").on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
  (0, _inview.inview)('.content-wrap');
  var url = window.location.href;
  var ac = "Sept_WH_Signup";
  var listId = "WiTjSE";
  var companyId = "RAd6JR";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.this-form form button').click(function (e) {
    e.preventDefault(); // console.log(e.target);

    var fname = $('.this-form input[name="fname"]').val();
    var lname = $('.this-form input[name="lname"]').val();
    var email = $('.this-form input[name="email"]').val();
    var phone = $('.this-form input[name="the-phone"]').val();

    if (phone !== "") {
      phone = (0, _phone.phoneConvert)(phone);
    }

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
      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: listId,
            custom_source: ac,
            email: email,
            properties: {
              first_name: fname,
              last_name: lname
            }
          }
        }
      };

      if (phone !== "" && phone.length == 10) {
        phone = (0, _phone.phoneConvert)(phone);
        theData.data.attributes.phone_number = phone;
      }

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
          console.log('klaviyo warehouse sign up page success');
          $('.this-form .sending').hide();
          $('.this-form .successfully-sent').show();
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
