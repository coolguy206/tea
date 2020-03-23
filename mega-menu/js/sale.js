$(document).ready(function() {
    $('.site-nav-submenu .bar>div').hover(function() {
        var href = $(this).find('a').first().attr('href');
        // console.log(href);

        var last = href;
        last = href.replace('view-all', 'last-chance');
        $('.sale-url').attr('href', last);

        var clearance = href;
        clearance = clearance.replace('view-all', 'clearance');

        if (href !== '/sale/newborn-clothing/view-all') {

            switch (href) {
                case '/girls-clothing/new-arrivals':
                case '/boys-clothing/new-arrivals':
                case '/baby-girl-clothes/new-arrivals':
                case '/baby-boy-clothes/new-arrivals':

                    clearance = clearance.replace('new-arrivals', 'last-chance');
                    clearance = `/sale${clearance}`;
                    break;

                case '/toddler-girls-clothes/favorites/new-arrivals':
                case '/toddler-boys-clothes/favorites/new-arrivals':
                case '/newborn-clothes/favorites/new-arrivals':

                    clearance = clearance.replace('es/favorites/new-arrivals', 'ing/last-chance');
                    clearance = `/sale${clearance}`;
                    break;

                 case '/tween-girls-clothing/favorites/new-arrivals':

                    clearance = clearance.replace('favorites/new-arrivals', 'last-chance');
                    clearance = `/sale${clearance}`;
                    break;

                default:
                    // code block
            }


            // console.log(clearance);
            $('.clearance-url').attr('href', clearance);
            $('.clearance-url').show();
        } else {
            $('.clearance-url').hide();
        }


    }, function() {

    })


});