import {
    inview
  } from './inview.js';

$(document).ready(function () {
    inview('.container-promo-header');
    var url = window.location.pathname;
    var title = ``;
    switch (url) {
        case `/family-outfitting/swim`:
            title = `Family Swim`;
            break;
        case `/family-outfitting/adult`:
            title = `Adult Styles`;
            break;
        case `/sibling-shop`:
            title = `Sibling Shop`;
            break;
    }

    $('.container-promo-header h1').text(title);
});