export const countdown = function(str) {
//   console.log(`countdown.js`);
   $("#countdown span").countdown(str, function (event) {
    $(this).text(
      event.strftime('%-D days %H hrs %M mins')
      // event.strftime('%-DDAYS %HHRS %MMINS %SS')
      // event.strftime('%-D days %H hrs %M mins')
    );
  });
};

