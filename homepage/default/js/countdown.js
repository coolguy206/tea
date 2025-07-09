export const countdown = function(str) {
//   console.log(`countdown.js`);
   $("#countdown span").countdown(str, function (event) {
    $(this).text(
      // event.strftime('%-DD %HH %MM %SS');
      event.strftime('%-D days %H hrs %M mins')
    );
  });
};

