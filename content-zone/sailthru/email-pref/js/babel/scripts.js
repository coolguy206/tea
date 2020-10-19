"use strict";

$(document).ready(function () {
  var api_key = "8379ab7deccf4e4aa16a01990e0f4fa2";
  var secret = "a05b94dd5722b409a097f77b14795d05";
  var format = "json";
  var email = "david@david.com";
  var theJSON = "{\"id\": \"".concat(email, "\"}");
  var sig = md5(secret + api_key + format + theJSON);
  var url = "https://api.sailthru.com/user?api_key=".concat(api_key, "&sig=").concat(sig, "&format=").concat(format, "&json=").concat(theJSON);
  console.log("\n    sig: ".concat(sig, "\n    \"json\": ").concat(theJSON, "\n    "));
  $.get(url, function (data) {
    console.log("sailthru user GET success:");
    console.log(data);
  }); // var xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;
  // xhr.addEventListener("readystatechange", function(data) {
  //   console.log(`xhr data`);
  //   console.log(data)
  //   if (this.readyState === 4) {
  //     console.log(`ready state`);
  //     console.log(this.responseText);
  //   }
  // });
  //
  // xhr.open("GET", url);
  //
  // xhr.send();
  // var data = new FormData();
  // data.append("api_key", api_key);
  // data.append("format", format);
  // data.append("json", theJSON);
  // data.append("sig", sig);
  //
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
  //
  // xhr.send(data);
  // Sailthru.track('pageview', {
  //   "url": url,
  //   onSuccess: function() {
  //     console.log('trackPageView success');
  //   },
  //   onError: function() {
  //     console.log('trackPageView failure');
  //   }
  // });
});
//# sourceMappingURL=scripts.js.map
