// import '../../../../node_modules/countdown/countdown.js'

export const countDown = function(elem, str) {
//   console.log(`countdown.js`);
   $(elem).countdown(str, function (event) {
    $(this).text(
      event.strftime('%-D days %H hrs %M mins')
      // event.strftime('%-DDAYS %HHRS %MMINS %SS')
      // event.strftime('%-D days %H hrs %M mins')
    );
  });
};

