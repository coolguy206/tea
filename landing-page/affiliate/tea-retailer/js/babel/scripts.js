"use strict";

$(document).ready(function () {
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('.content-wrap form').submit(function (e) {
    e.preventDefault();
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
      console.log(firstName, lastName, email, phone, company, website, city, state);
      $('.content-wrap form .processing').show();
      $('.content-wrap form button').hide();
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "WHOLESALE_LEADS": 1
        },
        "vars": {
          "first name": firstName,
          "last name": lastName,
          "phone": phone,
          "store type": type,
          "company": company,
          "website": website,
          "city": city,
          "state": state
        },
        "onSuccess": function onSuccess() {
          console.log('sailthru tea retailer sucess');
          $('span.error').hide();
          $('.content-wrap form .processing').hide();
          $('.content-wrap form .sent').show(); // $('#emailField').val('')

          setTimeout(function () {
            $('.content-wrap form .sent').fadeOut();
            $('.content-wrap form button').fadeIn();
          }, 2000);
        },
        "onError": function onError() {
          console.log('sailthru footer error');
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
