$(document).ready(function() {
    $('.site-nav-submenu .bar>div').hover(function() {
        var href = $(this).find('a').first().attr('href');
        console.log(href);


        var promo1 = href;
        var promo2 = href;


        switch (href) {
            // sale to new arrivals
            case '/sale/girls-clothing/view-all':
                promo1 = '/girls-clothing/new-arrivals';
                promo2 = '/sale/girls-clothing/clearance';
                break;

            case '/sale/boys-clothing/view-all':
                promo1 = '/boys-clothing/new-arrivals';
                promo2 = '/sale/boys-clothing/clearance';
                break;

            case '/sale/baby-girl-clothes/view-all':
                promo1 = '/baby-girl-clothes/new-arrivals';
                promo2 = '/sale/baby-girl-clothes/clearance';
                break;

            case '/sale/baby-boy-clothes/view-all':
                promo1 = '/baby-boy-clothes/new-arrivals';
                promo2 = '/sale/baby-boy-clothes/clearance';
                break;

            case '/sale/toddler-girls-clothing/view-all':
                promo1 = '/toddler-girls-clothes/favorites/new-arrivals';
                promo2 = '/sale/toddler-girls-clothing/clearance';
                break;

            case '/sale/toddler-boys-clothing/view-all':
                promo1 = '/toddler-boys-clothes/favorites/new-arrivals';
                promo2 = '/sale/toddler-boys-clothing/clearance';
                break;

            case '/sale/newborn-clothing/view-all':
                promo1 = '/newborn-clothes/favorites/new-arrivals';
                promo2 = '/sale/newborn-clothing/clearance';
                break;

            case '/sale/tween-girls-clothing/view-all':
                promo1 = '/tween-girls-clothing/favorites/new-arrivals';
                promo2 = '/sale/tween-girls-clothing/clearance';
                break;

                // new arrivals to view all
                // case '/girls-clothing/new-arrivals':
                // case '/sale/girls-clothing/view-all':
                //     promo1 = '/girls-swimwear';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

                // case '/boys-clothing/new-arrivals':
                // case '/sale/boys-clothing/view-all':
                //     promo1 = '/boys-swimwear';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

                // case '/baby-girl-clothes/new-arrivals':
                // case '/sale/baby-girl-clothes/view-all':
                //     promo1 = '/baby-girl-swimwear';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

                // case '/baby-boy-clothes/new-arrivals':
                // case '/sale/baby-boy-clothes/view-all':
                //     promo1 = '/baby-boy-swimwear';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

                // case '/toddler-girls-clothes/favorites/new-arrivals':
                // case '/sale/toddler-girls-clothing/view-all':
                //     promo1 = '/toddler-girls-clothes/swim';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

                // case '/toddler-boys-clothes/favorites/new-arrivals':
                // case '/sale/toddler-boys-clothing/view-all':
                //     promo1 = '/toddler-boys-clothes/swim';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

                // case '/newborn-clothes/favorites/new-arrivals':
                // case '/sale/newborn-clothing/view-all':
                //     promo1 = '/select-styles';
                //     $('.promo1-url, .promo2-url').hide();
                //     break;
                // case '/tween-girls-clothing/favorites/new-arrivals':
                // case '/sale/tween-girls-clothing/view-all':
                //     promo1 = '/tween-girls-clothing/category/swimwear';
                //     $('.promo1-url, .promo2-url').show();
                //     break;

            case '/newborn-clothes/':
                promo1 = `/newborn-clothes/favorites/new-arrivals`;
                break;

            default:
                break;

        };

        // console.log(promo1);
        $('.promo1-url').attr('href', promo1);
        $('.promo2-url').attr('href', promo2);
        // $('.promo1-url, .promo2-url').show();

    }, function() {

    });

});