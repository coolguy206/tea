export const countdown = function(str) {
//   console.log(`countdown.js`);
   $("#countdown span").countdown(str, function (event) {
    $(this).text(
      event.strftime('%-D DAYS %H HRS %M MINS')
      // event.strftime('%-DDAYS %HHRS %MMINS %SS')
      // event.strftime('%-D days %H hrs %M mins')
    );
  });
};

