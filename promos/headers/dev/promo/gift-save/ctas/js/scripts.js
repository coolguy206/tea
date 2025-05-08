
$(document).ready(function () {

    var dresses = {
        h1: `Bundle & Save: Dresses`,
        p: `Made to twirl, built to last—Tea dresses bring heirloom quality to playful prints and comfy silhouettes. `
    };

    var leggings = {
        h1: `Bundle & Save: Leggings`,
        p: `Stretchy, soft, and built to last—our leggings pair perfectly with dresses and tops in a rainbow of colors. `
    };

    var pajamas = {
        h1: `Bundle & Save: Pajamas`,
        p: `Super-soft and breathable, our pajamas feature playful prints for cozy nights and sweet dreams.`
    };

    var pants = {
        h1: `Bundle & Save: Playwear Pants`,
        p: `Play-all-day pants with soft French terry, reinforced knees, and pockets—made for school, sports, and beyond.`
    };

    var rompers = {
        h1: `Bundle & Save: Baby Rompers`,
        p: `Style starts from day one—our soft, all-in-one rompers are perfect for crawling, cuddles, and everyday comfort.`
    };

    var shorts = {
        h1: `Bundle & Save: Shorts`,
        p: `Tea shorts are made with durable fabrics and thoughtful details—designed for play and built to last.`
    };

    var tees = {
        h1: `Bundle & Save: Graphic Tees`,
        p: `Soft cotton jersey meets globally-inspired, hand-drawn graphics by our San Francisco studio’s design team.`
    };

    var sets = {
        h1: `Outfit Sets`,
        p: `Ready in a snap—our matching sets take the guesswork out of dressing and add extra style to every day.`
    };

    // var textArr = [dresses, leggings, pajamas, pants, rompers, shorts, tees, sets];

    var url = window.location.href;

    switch (url) {
        case `https://www.teacollection.com/promo-code/dresses`:
            // code block
            $('.container-promo-header.gift-save h1').html(dresses.h1);
            $('.container-promo-header.gift-save p').html(dresses.p);
            break;
        case `https://www.teacollection.com/leggings-shop/promo`:
            // code block
            $('.container-promo-header.gift-save h1').html(leggings.h1);
            $('.container-promo-header.gift-save p').html(leggings.p);
            break;
        case `https://www.teacollection.com/pajamas/promo`:
            // code block
            $('.container-promo-header.gift-save h1').html(pajamas.h1);
            $('.container-promo-header.gift-save p').html(pajamas.p);
            break;
        case `https://www.teacollection.com/playwear-pants/promo`:
            // code block
            $('.container-promo-header.gift-save h1').html(pants.h1);
            $('.container-promo-header.gift-save p').html(pants.p);
            break;
        case `https://www.teacollection.com/promo-code/baby-rompers`:
            // code block
            $('.container-promo-header.gift-save h1').html(rompers.h1);
            $('.container-promo-header.gift-save p').html(rompers.p);
            break;
        case `https://www.teacollection.com/promo-code/shorts`:
            // code block
            $('.container-promo-header.gift-save h1').html(shorts.h1);
            $('.container-promo-header.gift-save p').html(shorts.p);
            break;
        case `https://www.teacollection.com/tee-shop/promo`:
            // code block
            $('.container-promo-header.gift-save h1').html(tees.h1);
            $('.container-promo-header.gift-save p').html(tees.p);
            break;
        case `https://www.teacollection.com/?type=&page=category&action=&id=sets&mode=&search_query=&category=&thumb_sort=store_price.asc`:
            // code block
            $('.container-promo-header.gift-save h1').html(sets.h1);
            $('.container-promo-header.gift-save p').html(sets.p);
            break;
        default:
        // code block
    }

});

