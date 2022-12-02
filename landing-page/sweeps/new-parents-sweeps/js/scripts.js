import {
  inview
} from './inview.js';

$(document).ready(function () {

  //change maxlength for phone to 10 digit
  // $('#this-form form input[name="the-phone"]').attr('maxlength', 10);

  //? force phone to only be numbers
  $("#this-form form input[name='the-phone']").on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });

  //? on click animate scroll to form
  $('.enter-to-win').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#this-form").offset().top - 200
    },
      'slow');
  });

  inview('.content-wrap');

  const url = window.location.href;
  const ac = "new parent sweeps 2022";

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  $('.this-form form button').click(function (e) {
    e.preventDefault();
    // console.log(e.target);
    var fname = $('.this-form input[name="fname"]').val();
    var lname = $('.this-form input[name="lname"]').val();
    var email = $('.this-form input[name="email"]').val();
    var phone = $('.this-form input[name="the-phone"]').val();
    var checkbox = $('.this-form input[type=checkbox]').prop('checked');
    var valid = emailIsValid(email);
    // console.log(`
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
          "MASTER_CONTACTS_LIST": 1,
          'new_parent_sweeps_2022': 1
        },
        "vars": {
          "ACQUISITION_SOURCE": ac,
          "first_name": fname,
          "last_name": lname,
          "phone": phone
        },
        "source": ac,
        "onSuccess": function () {
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
      $('.this-form input[name="fname"], .this-form input[name="lname"], .this-form input[name="email"], .this-form input[type=checkbox]').addClass('error-border')
      // $('.this-form input').focus();
    }
  });


});