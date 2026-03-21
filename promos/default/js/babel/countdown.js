"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countDown = void 0;
// import '../../../../node_modules/countdown/countdown.js'

var countDown = exports.countDown = function countDown(elem, str) {
  //   console.log(`countdown.js`);
  $(elem).countdown(str, function (event) {
    $(this).text(event.strftime('%-D days %H hrs %M mins')
    // event.strftime('%-DDAYS %HHRS %MMINS %SS')
    // event.strftime('%-D days %H hrs %M mins')
    );
  });
};
