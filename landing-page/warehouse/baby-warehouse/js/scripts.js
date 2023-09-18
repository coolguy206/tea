import {
  inview
} from './inview.js';
import {
  phoneConvert
} from './phone.js';

$(document).ready(function () {

  //change maxlength for phone to 10 digit
  // $('#this-form form input[name="the-phone"]').attr('maxlength', 10);

  //? force phone to only be numbers
  $("#this-form form input[name='the-phone']").on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });


  inview('.content-wrap');

  const url = window.location.href;
  const ac = "Baby WH Sign Up Landing Page";
  var listId = `QYj5hy`;
  var companyId = `RAd6JR`;

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
    if(phone !== ``){
      phone = phoneConvert(phone);
    }
    
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

      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: listId,
            custom_source: ac,
            email: email,
            phone_number: phone,
          }
        }
      };

      theData = JSON.stringify(theData);

      $.ajax({
        url: `https://a.klaviyo.com/client/subscriptions/?company_id=${companyId}`,
        type: 'post',
        data: theData,
        headers: {
          revision: '2023-02-22',
          'content-type': 'application/json'
        },
        success: function (data, status, xhr) {
          console.log('klaviyo baby warehouse sign up page success');
          $('.this-form .sending').hide();
          $('.this-form .successfully-sent').show();
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