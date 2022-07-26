"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _alt.alt)('.content-wrap .c1 .first img', 'tea x hello kitty logo');
  (0, _alt.alt)('.content-wrap .c1 .second img', 'girl in hello kitty dress');
  (0, _alt.alt)('.content-wrap .c1 .third img', 'baby in hello kitty romper'); //

  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2');
  $('.load-more-wrap').after($('.content-wrap .c2'));
  $('.c2')[1].remove();
});
//# sourceMappingURL=scripts.js.map
