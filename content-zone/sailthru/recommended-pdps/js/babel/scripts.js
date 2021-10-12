"use strict";

var theURL = window.location.href; // console.log(theURL);
//popular or trending

var id_popular = '8286a49c-84e0-11ea-91cc-002590d1a41a'; //context

var id_context = "2c3a95ec-a5cb-11ea-87c0-002590d1a2f6"; //viewed or purchased

var id_purchased = "134796ac-8591-11ea-b811-002590d1a41a"; //interest or prediction

var id_interest = "dcc9346e-8590-11ea-bec9-002590d1a2f6";

var x = function x(data, parent) {
  var jsonArr = JSON.parse(data.json); // console.log(jsonArr.length);
  // console.log(jsonArr);

  if (jsonArr.length > 0) {
    $.each(jsonArr, function (i, val) {
      var url = val.url;
      var img = val.image;
      var price = val.price;
      price = price / 100;
      price = price.toFixed(2);
      var title = val.title;

      if (title !== undefined) {
        title = title.replace(/Tea Collection/, '');
      }

      var originalPrice = "";
      var vars = val.vars;

      if (vars !== undefined) {
        originalPrice = vars.variants[0].original_price_column;
        originalPrice = originalPrice.replace(/ USD/g, '');
        originalPrice = Number(originalPrice).toFixed(2); //console.log(originalPrice);
      }

      var priceElem = "";

      if (originalPrice !== "") {
        if (originalPrice !== price) {
          priceElem = "<p><strike>$".concat(originalPrice, "</strike> <span class=\"sale_price\">$").concat(price, "</span></p>");
        } else {
          priceElem = "<p>$".concat(price, "</p>");
        }
      } else {
        priceElem = "<p>$".concat(price, "</p>");
      } // console.log(url, img, price, title);


      if (url !== undefined && url.indexOf('teashowroom') == -1 && url.indexOf('sandbox.') == -1) {
        // console.log('tea pdp');
        if (img !== undefined && price !== undefined && title !== undefined) {
          var elem = "\n            <li>\n              <a href=\"".concat(url, "\">\n                <img src=\"").concat(img, "\" alt=\"").concat(title, "\">\n              </a>\n              <h3>\n                <a href=\"").concat(url, "\">").concat(title, "</a>\n              </h3>\n              ").concat(priceElem, "\n            </li>");
          $(parent + ' .sailthru-list').append(elem);
        } //end of if(img...)

      } // end of if(url...)

    }); //end of $.each

    $(parent + ' .sailthru-list').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      slideWidth: 300,
      moveSlides: 1,
      controls: true,
      nextText: '<span class="fas fa-chevron-right"></span>',
      prevText: '<span class="fas fa-chevron-left"></span>',
      pager: false
    });
    $(parent + ' h2.sailthru-h2').show();
  } //end of if jsonArr.length > 0
  else {
      console.log('no pdps returned'); // console.log(data);
    }
};

Sailthru.personalize({
  sections: [
  /*
  {
    id: id_popular,
    selector: '.sailthru-popular .sailthru-list',
    onSuccess: function(data) {
      console.log('sailthru recommended pdps for popular & trending');
      console.log(data);
      x(data, '.sailthru-popular');
      $('#pdp-item-suggestions').after($('.sailthru-pdps'));
    },
    onError: function(err) {
      console.log('sailthru recommended pdps popular & trending error');
      console.log(err);
    }
  },
  */
  {
    id: id_context,
    selector: '.sailthru-context .sailthru-list',
    onSuccess: function onSuccess(data) {
      // console.log('sailthru recommended pdps for context');
      // console.log(data);
      x(data, '.sailthru-context');
      $('#pdp-item-suggestions').after($('.sailthru-pdps'));
    },
    onError: function onError(err) {
      console.log('sailthru recommended pdps context error');
      console.log(err);
    }
  }
  /*
  {
    id: id_purchased,
    selector: '.sailthru-purchased .sailthru-list',
    onSuccess: function(data) {
      console.log('sailthru recommended pdps for purchased & viewed');
      console.log(data);
      x(data, '.sailthru-purchased');
    },
    onError: function(err) {
      console.log('sailthru recommended pdps purchased & viewed error');
      console.log(err);
    }
  },
  {
    id: id_interest,
    selector: '.sailthru-interest .sailthru-list',
    onSuccess: function(data) {
      console.log('sailthru recommended pdps for interest & prediction');
      console.log(data);
      x(data, '.sailthru-interest');
    },
    onError: function(err) {
      console.log('sailthru recommended pdps interest & prediction error');
      console.log(err);
    }
  },
  */
  ],
  vars: {
    "context_key": theURL
  }
});
//# sourceMappingURL=scripts.js.map
