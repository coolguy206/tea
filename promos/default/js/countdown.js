//? CODE REFRENCE FOR COUNTDOWN.JS

//? COUNTDOWN.JS
$(".the-promo.countdown-promo #countdown span").countdown("2025/12/02 23:59:59", function (event) {
    $(this).text(
        event.strftime('%-DD %HH %MM %SS')
        // event.strftime('%-D %H:%M:%S')
    );
});
