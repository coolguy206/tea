$(document).ready(function() {
  var url = window.location.href;
  var color = url.split('#')[1];
  var mpd = $('#the-mpd').text();
  var json = JSON.parse(mpd);
  var imgURL;
  var sku;
  var sig;
  var price;
  var api_key = `8379ab7deccf4e4aa16a01990e0f4fa2`;
  var secret = `a05b94dd5722b409a097f77b14795d05`;
  var format = `json`;


  if (color !== undefined) {

    color = color.replace(/%20/g, " ");

    $.each(json.parent_data, function(i, val) {
      var thisColor = val.color;
      thisColor = thisColor.toLowerCase();

      if (color == thisColor) {
        imgURL = val.large_image_url;

        var theSku = val.sku;
        theSku = theSku.split('-');
        theSku = theSku[0] + '-' + theSku[1];
        sku = theSku;
        console.log(theSku);

        price = val.store_price;
        price = Number(price.slice(1)) * 100;
        //console.log(price);
      }
    });

    var theJSON = `{"id": "${url}", "price": ${price}, "keys": {"sku": "${sku}"}, "images":{"full": {"url": "${imgURL}"}, "thumb": {"url": "${imgURL}"}}}`;
    sig = md5(secret + api_key + format + theJSON);

    /*
    console.log(`
    api_key: ${api_key}
    sig: ${sig}
    format: ${format}
    "json": ${theJSON}
    `);
    */

    // var settings = {
    //   "url": "https://api.sailthru.com/content",
    //   "method": "POST",
    //   "timeout": 0,
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


    // $.ajax(settings).done(function(response) {
    //   console.log('ajax sailthru content api update complete');
    //   console.log(response);
    // });

    var data = `api_key=${api_key}&sig=${sig}&format=${format}&json=${theJSON}`;

    // console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://api.sailthru.com/content");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

  }

  //console.log(imgURL);
  if (imgURL !== undefined) {
    $('meta[name="sailthru.image.full"]').attr('content', imgURL);
  }

  if (sku !== undefined) {
    $('meta[name="sku"]').attr('content', sku);
  }

  if (price !== undefined) {
    $('meta[name="sailthru.price"]').attr('content', price);
  }

});