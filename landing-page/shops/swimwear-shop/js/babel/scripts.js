"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _alt.alt)('.content-wrap div[data-num="2"] img', 'rainbow');
  (0, _alt.alt)('.content-wrap div[data-num="3"] img', 'strawberry');
  (0, _alt.alt)('.content-wrap div[data-num="4"] img', 'flower');
  (0, _inview.inview)('.content-wrap div');
});
//# sourceMappingURL=scripts.js.map
