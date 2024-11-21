$(document).ready(function () {
  //? COUNTDOWN.JS
  $("#countdown span").countdown("2024/11/29 23:59:59", function (event) {
    $(this).text(
      event.strftime('%-DD %HH %MM %SS')
      // event.strftime('%-D %H:%M:%S')
    );
  });
});