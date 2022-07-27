$(document).ready(function() {
  const url = window.location.href;

  $('.main-content a').click(function(e) {
    // e.preventDefault();
    var id = $(this).attr('href');
    $('.forms div').hide();
    $(id).show();

  });

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  $('.forms button').click(function(e) {
    // console.log(e.target);
    e.preventDefault();
    var ac = $(this).attr('data-list');
    var thisForm = $(this).closest('form');
    //user info
    var email = $(thisForm).find('input[name="user-email"]').val();
    var fname = $(thisForm).find('input[name="user-fname"]').val();
    var lname = $(thisForm).find('input[name="user-lname"]').val();
    var phone = $(thisForm).find('input[name="user-phone"]').val();
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

      if (ac == "school days sign up" && orgEIN !== "") {

        Sailthru.integration("userSignUp", {
          "id": email,
          "email": email,
          "lists": {
            "school days sign up": 1,
            "MASTER_CONTACTS_LIST": 1
            // "test list": 1
          },
          "vars": {
            "ACQUISITION_SOURCE": ac,
            "school days sign up Organization name": orgName,
            "school days sign up Organization address": orgAddress,
            "school days sign up Organization city": city,
            "school days sign up Organization state": states,
            "school days sign up Organization EIN": orgEIN,
            "school days sign up organization affiliation": affiliation,
            "school days sign up First Name": fname,
            "school days sign up Last Name": lname,
            "school days sign up Phone": phone,
            "School days sign up How did you hear about this program": how,
          },
          "source": ac,
          "onSuccess": function() {
            console.log(`successfully sent to sailthru! email: ${email} source: ${ac}`);
            // $('.signup .the-form').hide();
            // $('.signup .thanks').show();

            $('.forms .error, .forms .join-today').hide();
            $('.forms .success h2').html('Successfully sent! <br> Look out for an email from <br> The School Days team shortly.');
            $('.forms .success').show();

            window.dataLayer.push({
              'event': 'sailthru',
              'theUrl': url,
              'sailthruEmail': email,
              'sailthruSource': ac
            });

          }
        });

      } else if (ac == "school days referral") {
        // console.log(`state: ${states}`)
        Sailthru.integration("userSignUp", {
          "id": email,
          "email": email,
          "lists": {
            "school days referral": 1,
            "MASTER_CONTACTS_LIST": 1
            // "test list": 1
          },
          "vars": {
            "ACQUISITION_SOURCE": ac,
            "school days refer Organization name": orgName,
            "school days refer Organization city": city,
            "school days refer Organization state": states,
            "school days refer Organization affiliation": affiliation,
            "school days refer First Name": fname,
            "school days refer Last Name": lname,
            "school days refer Phone": phone,
            "school days refer Refer Name": refer

          },
          "source": ac,
          "onSuccess": function() {
            console.log(`successfully sent to sailthru! email: ${email} source: ${ac}`);
            // $('.signup .the-form').hide();
            // $('.signup .thanks').show();

            $('.forms .error, .forms .refer-org').hide();
            $('.forms .success h2').html('Successfully sent!');
            $('.forms .success').show();

            window.dataLayer.push({
              'event': 'sailthru',
              'theUrl': url,
              'sailthruEmail': email,
              'sailthruSource': ac
            })

          }
        });

      } else {
        $('.forms .error').show();
      }

    } else {
      $('.forms .error').show();
    }

  });

});