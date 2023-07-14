import {
  phoneConvert
} from './phone.js';

$(document).ready(function () {
  const url = window.location.href;

  var companyId = `RAd6JR`;
  var list1 = `VXJMcN`;
  var list2 = `VXJMcN`;
  var custom_source = ``;

  $('.main-content a').click(function (e) {
    // e.preventDefault();
    var id = $(this).attr('href');
    $('.forms div').hide();
    $(id).show();

  });

  //? force phone to only be numbers
  $('.this-form input[name="the-phone"]').on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  $('.forms button').click(function (e) {
    // console.log(e.target);
    e.preventDefault();
    var ac = $(this).attr('data-list');
    var thisForm = $(this).closest('form');
    //user info
    var email = $(thisForm).find('input[name="user-email"]').val();
    var fname = $(thisForm).find('input[name="user-fname"]').val();
    var lname = $(thisForm).find('input[name="user-lname"]').val();
    var phone = $(thisForm).find('input[name="the-phone"]').val();
    var affiliation = $(thisForm).find('input[name="user-affiliation"]').val();
    var how = $(thisForm).find('input[name="user-how"]').val();
    var refer = $(thisForm).find('input[name="user-refer-name"]').val();

    //org info
    var orgName = $(thisForm).find('input[name="org-name"]').val();
    var orgAddress = $(thisForm).find('input[name="org-address"]').val();
    var orgEIN = $(thisForm).find('input[name="org-ein"]').val();
    var states = $(thisForm).find('.states').val();
    var city = $(thisForm).find('input[name="org-city"]').val();

    var valid = emailIsValid(email);
    // console.log('valid:' + valid);

    if (valid && fname !== "" && lname !== "" && orgName !== "" && orgAddress !== "" && city !== "" && states !== "please choose") {
      // $('.signup .form').hide();
      // $('.signup .sending').show();

      var theData = {
        data: {
          type: "subscription",
          attributes: {
            email: email,
            properties: {
              first_name: fname,
              last_name: lname,
              organization: orgName,
              affiliation: affiliation,
              organization_city: city,
              organization_region: state,
              organization_country: "United States",
            },

          }
        }
      }

      if (phone !== `` && phone.length == 10) {
        phone = phoneConvert(phone);
        theData.data.attributes.phone_number = phone;
      }

      if (ac == "school days sign up" && orgEIN !== "") {

        theData.data.attributes.custom_source = ac;
        theData.data.attributes.list_id = list1;
        theData.data.attributes.org_ein = orgEIN;
        theData.data.attributes.organization_address =  orgAddress;
        theData.data.attributes.how = how;

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
            $('.forms .error, .forms .join-today').hide();
            $('.forms .success h2').html('Successfully sent! <br> Look out for an email from <br> The School Days team shortly.');
            $('.forms .success').show();
          }
        });

          //! NEED TO MAKE LIST IN KLAVIYO
          "lists": {
            "school days sign up": 1,
            "MASTER_CONTACTS_LIST": 1
            // "test list": 1
          }

      } else if (ac == "school days referral") {

        theData.data.attributes.custom_source = ac;
        theData.data.attributes.list_id = list2;
        theData.data.attributes.refer =  refer;

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
            $('.forms .error, .forms .refer-org').hide();
            $('.forms .success h2').html('Successfully sent!');
            $('.forms .success').show();
          }
        });

          //! NEED TO MAKE LIST IN KLAVIYO
          "lists": {
            "school days referral": 1,
            "MASTER_CONTACTS_LIST": 1
            // "test list": 1
          },

      } else {
        $('.forms .error').show();
      }

    } else {
      $('.forms .error').show();
    }

  });

});