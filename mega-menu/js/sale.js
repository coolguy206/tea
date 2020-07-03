$(document).ready(function() {
    var urls = {
        girl: `/girls-dresses`,
        toddler: `/toddler-girls-clothes/dresses`,
        tween: `/tween-girls-clothing/category/dresses`,
        babyGirl: `/baby-girl-dresses`,
        sale: {
            girl: `/sale/girls-dresses`,
            toddler: `/sale/toddler-girls-dresses`,
            tween: `/sale/tween-girls-dresses`,
            babyGirl: `/sale/baby-dresses`
        }
    };
    $('.dept-girl, .dept-baby').hover(function() {
        $('.promo1-url').show();
    }, function() {

    });
    $('.dept-boy').hover(function() {
        $('.promo1-url').hide();
    }, function() {

    });

    $('.site-nav-submenu .bar>div').hover(function() {
        var href = $(this).find('a').first().attr('href');
        // console.log(href);


        var promo1 = href;
        var promo2 = href;

        $('.promo1-url').hide();


        switch (href) {
            // sale to new arrivals
            // case '/sale/girls-clothing/view-all':
            // promo1 = urls.girl;
            //     promo2 = '/sale/girls-clothing/clearance';
            //     break;

            case '/sale/boys-clothing/view-all':
            case '/boys-clothing/new-arrivals':
                // promo1 = '/boys-clothing/new-arrivals';
                promo2 = '/sale/boys-clothing/clearance';
                break;

                // case '/sale/baby-girl-clothes/view-all':
                //     promo1 = '/baby-girl-clothes/new-arrivals';
                //     promo2 = '/sale/baby-girl-clothes/clearance';
                //     break;

            case '/sale/baby-boy-clothes/view-all':
            case '/baby-boy-clothes/new-arrivals':
                // promo1 = '/baby-boy-clothes/new-arrivals';
                promo2 = '/sale/baby-boy-clothes/clearance';
                break;

                // case '/sale/toddler-girls-clothing/view-all':
                //     promo1 = '/toddler-girls-clothes/favorites/new-arrivals';
                //     promo2 = '/sale/toddler-girls-clothing/clearance';
                //     break;

            case '/sale/toddler-boys-clothing/view-all':
            case '/toddler-boys-clothes/favorites/new-arrivals':
                // promo1 = '/toddler-boys-clothes/favorites/new-arrivals';
                promo2 = '/sale/toddler-boys-clothing/clearance';
                break;

            case '/sale/newborn-clothing/view-all':
            case '/newborn-clothes/favorites/new-arrivals':
            case '/newborn-clothes/':
                // promo1 = '/newborn-clothes/favorites/new-arrivals';
                promo2 = '/sale/newborn-clothing/clearance';
                break;

                // case '/sale/tween-girls-clothing/view-all':
                //     promo1 = '/tween-girls-clothing/favorites/new-arrivals';
                //     promo2 = '/sale/tween-girls-clothing/clearance';
                //     break;

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

                // case '/newborn-clothes/':
                //     promo1 = `/newborn-clothes/favorites/new-arrivals`;
                //     break;

                //show girls categories
            case '/girls-clothes':
            case '/girls-clothing/new-arrivals':
                $('.promo1-url').show();
                promo1 = urls.girl;
                promo2 = '/sale/girls-clothing/clearance';
                break;
            case '/sale/girls-clothing/view-all':
                $('.promo1-url').show();
                promo1 = urls.sale.girl;
                promo2 = '/sale/girls-clothing/clearance';
                break;
            case '/baby-girl-clothes/new-arrivals':
                $('.promo1-url').show();
                promo1 = urls.babyGirl;
                promo2 = '/sale/baby-girl-clothes/clearance';
                break;
            case '/sale/baby-girl-clothes/view-all':
                $('.promo1-url').show();
                promo1 = urls.sale.babyGirl;
                promo2 = '/sale/baby-girl-clothes/clearance';
                break;
            case '/toddler-girls-clothes/favorites/new-arrivals':
                $('.promo1-url').show();
                promo1 = urls.toddler;
                promo2 = '/sale/toddler-girls-clothing/clearance';
                break;
            case '/sale/toddler-girls-clothing/view-all':
                $('.promo1-url').show();
                promo1 = urls.sale.toddler;
                promo2 = '/sale/toddler-girls-clothing/clearance';
                break;
            case '/tween-girls-clothing/favorites/new-arrivals':
                $('.promo1-url').show();
                promo1 = urls.tween;
                promo2 = '/sale/tween-girls-clothing/clearance';
                break;
            case '/sale/tween-girls-clothing/view-all':
                $('.promo1-url').show();
                promo1 = urls.sale.tween;
                promo2 = '/sale/tween-girls-clothing/clearance';
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