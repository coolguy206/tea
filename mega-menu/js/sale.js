$(document).ready(function() {
    $('.site-nav-submenu .bar>div').hover(function() {
        var href = $(this).find('a').first().attr('href');
        // console.log(href);


        var promo1 = href;
        var promo2 = href;

        /*
        switch (href) {
            //sale to new arrivals
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
                break

                //new arrivals to sale
                // case '/girls-clothing/new-arrivals':
                // case '/boys-clothing/new-arrivals':
                // case '/baby-girl-clothes/new-arrivals':
                // case '/baby-boy-clothes/new-arrivals':

                //     promo1 = promo1.replace('new-arrivals', '');
                //     promo1 = `/sale${promo1}`;

                //     break;

                // case '/toddler-girls-clothes/favorites/new-arrivals':
                // case '/toddler-boys-clothes/favorites/new-arrivals':
                // case '/newborn-clothes/favorites/new-arrivals':

                //     promo1 = promo1.replace('es/favorites/new-arrivals', 'ing');
                //     promo1 = `/sale${promo1}`;

                //     break;


                // case '/tween-girls-clothing/favorites/new-arrivals':

                //     promo1 = promo1.replace('favorites/new-arrivals', '');
                //     promo1 = `/sale${promo1}`;

                //     break;

            default:
                // code block
        }
        */

        // console.log(promo1);
        $('.promo1-url').attr('href', promo1);
        // $('.promo2-url').attr('href', promo2);
        $('.promo1-url').show();


    }, function() {

    })


});