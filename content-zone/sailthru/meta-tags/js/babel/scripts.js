"use strict";

$(document).ready(function () {
  var url = window.location.href;
  var color = $('.pdp-item-details-attributes dt .selected-value').text().toLowerCase(); // console.log(`color: ${color}`);

  var mpd = $('#the-mpd').text();
  var json = JSON.parse(mpd);
  var gender = $('#the-mpd').attr('data-department').toLowerCase();
  var category = $('#the-mpd').attr('data-category').toLowerCase();
  var colorTag = $('#the-mpd').attr('data-color').toLowerCase();
  var colorName;
  var thePrice;
  var priceTag;
  var imgURL;
  var sku;
  var sig;
  var price;
  var inventory = Number($('meta[name="inventory"]').attr('content'));
  var tags = "tea, tea-collection, kids-clothes, children-clothes, kids-clothing, kids-outfits, ".concat(gender, ", ").concat(category);

  if (colorTag !== "") {
    tags = "".concat(tags, ", ").concat(colorTag);
  } // console.log(`inventory: ${inventory}`);


  color = color.replace(/%20/g, " ");
  $.each(json.parent_data, function (i, val) {
    var thisColor = val.color;
    thisColor = thisColor.toLowerCase();

    if (thisColor.indexOf(color) !== -1) {
      imgURL = val.large_image_url;
      colorName = thisColor;
      var theSku = val.sku;
      theSku = theSku.split('-');
      theSku = theSku[0] + '-' + theSku[1];
      sku = theSku; // console.log(theSku);

      thePrice = val.store_price;
      thePrice = Number(thePrice.substring(1));
      price = val.store_price;
      price = Number(price.slice(1)) * 100; //console.log(price);
    }
  }); // console.log(`thePrice: ${thePrice}`);

  if (thePrice <= 25) {
    priceTag = "price-0-25";
  } else if (thePrice > 25 && thePrice <= 50) {
    priceTag = "price-25-50";
  } else if (thePrice > 50 && thePrice <= 75) {
    priceTag = "price-50-75";
  } else if (thePrice > 75 && thePrice <= 100) {
    priceTag = "price-75-100";
  } else if (thePrice > 100) {
    priceTag = "price-100+";
  } // console.log(`priceTag: ${priceTag}`);


  tags = "".concat(tags, ", ").concat(colorName, ", ").concat(priceTag);

  if (tags !== undefined) {
    $('meta[name="sailthru.tags"]').attr('content', tags);
  }

  if (imgURL !== undefined) {
    $('meta[name="sailthru.image.full"]').attr('content', imgURL);
  }

  if (sku !== undefined) {
    $('meta[name="sku"]').attr('content', sku);
  }

  if (price !== undefined) {
    $('meta[name="sailthru.price"]').attr('content', price);
  }

  Sailthru.track('pageview', {
    "url": url,
    onSuccess: function onSuccess() {
      console.log('trackPageView success');
    },
    onError: function onError() {
      console.log('trackPageView failure');
    }
  });
});
//# sourceMappingURL=scripts.js.map
