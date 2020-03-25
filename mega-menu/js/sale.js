$(document).ready(function() {
    $('.site-nav-submenu .bar>div').hover(function() {
        var href = $(this).find('a').first().attr('href');
        // console.log(href);


        var promo1 = href;


        switch (href) {
            case '/sale/girls-clothing/view-all':
            case '/sale/boys-clothing/view-all':
            case '/sale/baby-girl-clothes/view-all':
            case '/sale/baby-boy-clothes/view-all':


                promo1 = promo1.replace('/sale', '');
                promo1 = promo1.replace('view-all', 'new-arrivals');
                break;

            case '/sale/toddler-girls-clothing/view-all':
            case '/sale/toddler-boys-clothing/view-all':
            case '/sale/newborn-clothing/view-all':

                promo1 = promo1.replace('/sale', '');
                promo1 = promo1.replace('ing/view-all', 'es/favorites/new-arrivals');
                break;


            case '/sale/tween-girls-clothing/view-all':

                promo1 = promo1.replace('/sale', '');
                promo1 = promo1.replace('view-all', 'favorites/new-arrivals');
                break;

            default:
                // code block
        }

        // console.log(promo1);
        $('.promo1-url').attr('href', promo1);
        $('.promo1-url').show();


    }, function() {

    })


});