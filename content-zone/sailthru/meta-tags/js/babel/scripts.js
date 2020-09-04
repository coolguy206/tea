"use strict";

$(document).ready(function () {
  var url = window.location.href;
  var color;

  if (url.indexOf('?') !== -1) {
    color = url.split('?')[1];
    color = color.split('#')[1];
    color = color.toLowerCase();
  } else {
    color = url.split('#')[1];
    color = color.toLowerCase();
  } // color = $('.pdp-item-details-attributes dt .selected-value').text().toLowerCase();


  console.log("color: ".concat(color));
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
  var tags = "".concat(gender, ", ").concat(category);

  if (colorTag !== "") {
    tags = "".concat(tags, ", ").concat(colorTag);
  } // console.log(`inventory: ${inventory}`);


  var api_key = "8379ab7deccf4e4aa16a01990e0f4fa2";
  var secret = "a05b94dd5722b409a097f77b14795d05";
  var format = "json";

  if (color !== undefined) {
    // if (url.indexOf('#') !== -1) {
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
    });
    console.log("thePrice: ".concat(thePrice));

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
    }

    console.log("priceTag: ".concat(priceTag));
    tags = "".concat(tags, ", ").concat(colorName, ", ").concat(priceTag);
    var theJSON = "{\"id\": \"".concat(url, "\", \"tags\": \"").concat(tags, "\", \"inventory\": ").concat(inventory, ", \"price\": ").concat(price, ", \"images\":{\"full\": {\"url\": \"").concat(imgURL, "\"}, \"thumb\": {\"url\": \"").concat(imgURL, "\"}}}");
    sig = md5(secret + api_key + format + theJSON);
    console.log("\n    sig: ".concat(sig, "\n    \"json\": ").concat(theJSON, "\n    ")); // var settings = {
    //   "url": "https://api.sailthru.com/content",
    //   "method": "POST",
    //   "timeout": 0,
    //   "dataType": "jsonp",
    //   "headers": {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   "data": {
    //     "api_key": api_key,
    //     "sig": sig,
    //     "format": format,
    //     "json": theJSON
    //   }
    // };
    //console.log(settings);
    // $.post("https://api.sailthru.com/content", {
    //     "api_key": api_key,
    //     "sig": sig,
    //     "format": format,
    //     "json": theJSON
    //   }, function(data) {
    //     console.log('ajax sailthru content api update complete');
    //     console.log(data);
    //   },
    //   "jsonp"
    // );
    // $.ajax(settings).done(function(response) {
    //   console.log('ajax sailthru content api update complete');
    //   console.log(response);
    // });
    // var data = `api_key=${api_key}&sig=${sig}&format=${format}&json=${theJSON}`;
    // console.log(data);
    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    //
    // xhr.addEventListener("readystatechange", function() {
    //   if (this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // });
    //
    // xhr.open("POST", "https://api.sailthru.com/content");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //
    // xhr.send(data);

    var data = new FormData();
    data.append("api_key", api_key);
    data.append("format", format);
    data.append("json", theJSON);
    data.append("sig", sig);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", "https://api.sailthru.com/content");
    xhr.send(data);

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
  }
});
//# sourceMappingURL=scripts.js.map
