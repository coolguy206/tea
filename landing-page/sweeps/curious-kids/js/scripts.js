import {
  inview
} from './inview.js';
import {
  phoneConvert
} from './phone.js';
// console.log(keys);

$(document).ready(function () {

  inview('.content-wrap');

  var companyId = `RAd6JR`;
  var list = `W4CxEr`;
  var custom_source = `CKG0824`;

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  //? force phone to only be numbers
  $('.this-form input[name="the-phone"]').on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });

  $('.this-form form button').click(function (e) {
    e.preventDefault();
    // console.log(e.target);
    var fname = $('.this-form input[name="fname"]').val();
    var lname = $('.this-form input[name="lname"]').val();
    var instagram = $('.this-form input[name="instagram"]').val();
    var email = $('.this-form input[name="email"]').val();
    // var childAge = $('.this-form input[name="childAge"]').val();
    var phone = $('.this-form input[name="the-phone"]').val();
    var checkbox = $('.this-form input[type=checkbox]').prop('checked');
    var valid = emailIsValid(email);
    // console.log(`
    //   fname: ${fname}
    //   lname: ${lname}
    //   email: ${email}
    //   checkbox: ${checkbox}
    //   valid: ${valid}`);

    if (valid && checkbox && fname !== '' && lname !== '' && instagram !== '' && phone !== ``) {
      $('.this-form form').hide();
      $('.this-form .sending').show();

      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: list,
            custom_source: custom_source,
            email: email,
            properties: {
              first_name: fname,
              last_name: lname,
              instagram: instagram,
            },

          }
        }
      }

      // if (childAge !== ``) {
      //   theData.data.attributes.properties.child_age = childAge;
      // }

      if (phone !== `` && phone.length == 10) {
        phone = phoneConvert(phone);
        theData.data.attributes.phone_number = phone;
      }

      console.log(theData);

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
          console.log('klaviyo success register');
          // jQuery(document).trigger('klaviyoSuccess', data);
          $('.this-form .sending').hide();
          $('.this-form .successfully-sent').show();
        }
      });

    } else {
      console.log('error');
      $('.this-form .sending').hide();
      $('.this-form form').show();
      $('.this-form .this-error').css('display', 'block');
      $('.this-form input[name="fname"], .this-form input[name="lname"], .this-form input[name="instagram"], .this-form input[name="email"], .this-form input[name="the-phone"], .this-form input[type=checkbox]').addClass('error-border')
      // $('.this-form input').focus();
    }
  });

});