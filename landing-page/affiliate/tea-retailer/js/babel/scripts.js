"use strict";

var _phone = require("./phone.js");

$(document).ready(function () {
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.content-wrap form').submit(function (e) {
    e.preventDefault();
    var companyId = "RAd6JR";
    var list = "YmWmN9";
    var custom_source = "";
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var type = $("input[name='type']:checked").val();
    var company = $('#company').val();
    var website = $('#URL').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var valid = emailIsValid(email);

    if (valid) {
      $('.content-wrap form .processing').show();
      $('.content-wrap form button').hide();
      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: list,
            custom_source: custom_source,
            email: email,
            properties: {
              first_name: firstName,
              last_name: lastName,
              store_type: type,
              company: company,
              website: website,
              city: city,
              country: "United States",
              region: state
            }
          }
        }
      };

      if (phone !== "") {
        phone = (0, _phone.phoneConvert)(phone);
        theData.data.attributes.phone_number = phone;
      }

      console.log(theData);
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
          console.log('klaviyo success register'); // jQuery(document).trigger('klaviyoSuccess', data);

          $('span.error').hide();
          $('.content-wrap form .processing').hide();
          $('.content-wrap form .sent').show(); // $('#emailField').val('')

          setTimeout(function () {
            $('.content-wrap form .sent').fadeOut();
            $('.content-wrap form button').fadeIn();
          }, 2000);
        }
      });
    } else {
      console.log("email not valid");
      $('span.error').show();
      $('input#email').focus();
    }
  });
});
//# sourceMappingURL=scripts.js.map
