"use strict";

var _inview = require("./inview.js");

// import {
//   alt
// } from './alt.js';
// RUN NODE STORE-LOCATOR.JS TO BUILD OPTION.HTML AND LI.HTML 
$(document).ready(function () {
  // alt('.content-wrap .c1 > a img', 'babies');
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2');
  $('.c1 select').change(function (e) {
    console.log("select changed");
    console.log(this.value);
    var state = this.value;
    $(".c2 ul li").map(function (i, val) {
      var liState = $(val).attr('data-state');

      if (state == liState) {
        $(val).show();
      } else if (state == 'all') {
        $(".c2 ul li").show();
      } else {
        $(val).hide();
      }
    });
  });
});
//# sourceMappingURL=scripts.js.map
