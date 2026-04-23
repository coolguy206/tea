import {
  inview
} from './inview.js';

$(document).ready(function () {

  inview('.email-wrap');

  var a;
  var url = window.location.href;
  var c = $(".email-wrap").find("button");
  var e = null;

  var listId = `WwYEri`;
  // var listId = `UERrV4`;
  var companyId = `RAd6JR`;

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  $(c).click(function (c) {
    c.preventDefault();
    var e = $(".email-wrap").find("input").val();
    $(".email-wrap .error").hide();
    var f = emailIsValid(e);

    if (f) {

      $(".email-wrap .input-fields").hide();

      var ac = "AG_Tea_Signup";

      // console.log(ac);

      var theData = {
        data: {
          type: "subscription",
          attributes: {
            list_id: listId,
            custom_source: ac,
            email: e
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
          console.log('klaviyo email sign up page success');
          $(".email-wrap .the-content").hide();
          $(".email-wrap .thanks").css('display', 'flex');
        },
        error: function () {
          $(".email-wrap .error").show();
          $(".email-wrap .input-fields").show();
        }
      });

    } else {

      $(".email-wrap .error").show();
      $(".email-wrap .input-fields").show();
    }

  });

});