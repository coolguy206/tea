"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countdown = void 0;
var countdown = exports.countdown = function countdown(str) {
  //   console.log(`countdown.js`);
  $("#countdown span").countdown(str, function (event) {
    $(this).text(event.strftime('%-D days %H hrs %M mins')
    // event.strftime('%-DDAYS %HHRS %MMINS %SS')
    // event.strftime('%-D days %H hrs %M mins')
    );
  });
};
