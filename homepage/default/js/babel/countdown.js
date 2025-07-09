"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countdown = void 0;
var countdown = exports.countdown = function countdown(str) {
  //   console.log(`countdown.js`);
  $("#countdown span").countdown(str, function (event) {
    $(this).text(
    // event.strftime('%-DD %HH %MM %SS');
    event.strftime('%-D days %H hrs %M mins'));
  });
};
