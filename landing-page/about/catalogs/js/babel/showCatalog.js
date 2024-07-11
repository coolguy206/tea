"use strict";

// const vars = require('./vars.js');

module.exports = function (name, width, desc) {
  var url = name;
  url = "https://issuu.com/teacollection/docs/".concat(url);
  url = encodeURIComponent(url);
  $.get("https://issuu.com/oembed?url=".concat(url, "&format=json&maxwidth=").concat(width), function (data) {
    // console.log(data);
    $('#flipBook').append(data.html);
    $('#flipBook').append("<p> ".concat(desc, "</p>"));
    $('.loading').hide();
  });
};
//# sourceMappingURL=showCatalog.js.map
