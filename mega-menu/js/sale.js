$(document).ready(function() {
    $('.site-nav-submenu .bar>div').hover(function() {
        var href = $(this).find('a').first().attr('href');
        // console.log(href);


        var promo1 = href;
        var promo2 = href;


        switch (href) {
            //sale to new arrivals
            case '/sale/girls-clothing/view-all':
                promo2 = '/girls-pajamas-sleepwear';
                break;

            case '/sale/boys-clothing/view-all':
                promo2 = '/boys-pajamas-sleepwear';
                break;

            case '/sale/baby-girl-clothes/view-all':
                promo2 = '/baby-girl-pajamas';
                break;

            case '/sale/baby-boy-clothes/view-all':
                promo2 = '/baby-boy-pajamas';
                break;

            case '/sale/toddler-girls-clothing/view-all':
                promo2 = '/toddler-girls-clothes/pajamas';
                break;

            case '/sale/toddler-boys-clothing/view-all':
                promo2 = '/toddler-boys-clothes/pajamas';
                break;

            case '/sale/newborn-clothing/view-all':
            case '/sale/tween-girls-clothing/view-all':
                promo2 = '/pajamas';
                break;

                // case '/sale/tween-girls-clothing/view-all':
                //     promo2 = '';
                //     break;

                //new arrivals to view all
            case '/girls-clothing/new-arrivals':
            case '/boys-clothing/new-arrivals':
            case '/baby-girl-clothes/new-arrivals':
            case '/baby-boy-clothes/new-arrivals':

                promo1 = promo1.replace('new-arrivals', 'view-all');
                // promo1 = `/sale${promo1}`;

                break;

            case '/toddler-girls-clothes/favorites/new-arrivals':
            case '/toddler-boys-clothes/favorites/new-arrivals':
            case '/newborn-clothes/favorites/new-arrivals':
            case '/tween-girls-clothing/favorites/new-arrivals':

                promo1 = promo1.replace('favorites/new-arrivals', 'view-all');
                // promo1 = `/sale${promo1}`;

                break;

            case '/newborn-clothes/':
                promo1 = `${promo1}view-all`;

                // case '/tween-girls-clothing/favorites/new-arrivals':

                //     promo1 = promo1.replace('favorites/new-arrivals', '');
                //     promo1 = `/sale${promo1}`;

                //     break;

            default:
                // code block
        }


        // console.log(promo1);
        $('.promo1-url').attr('href', promo1);
        $('.promo2-url').attr('href', promo2);
        $('.promo1-url, .promo2-url').show();


    }, function() {

    })


});