import {
  urls
} from './urls.js';
export const switchNewArrivals = (href) => {
  var promo1 = href;
  var promo2 = href;
  var promo3 = href;
  var clearance = href;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = urls.promo.blackFriday.girl;
      promo2 = urls.promo.sale.girl;
      promo3 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;
      // $('.promo1-url.girl').show();
      $('.promo1-url').show();
      $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      promo1 = urls.promo.blackFriday.boy;
      promo2 = urls.promo.sale.boy;
      promo3 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;
      // $('.promo1-url.boy').show();
      $('.promo1-url').show();
      $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = urls.promo.blackFriday.baby.girl;
      promo2 = urls.promo.sale.baby.girl;
      promo3 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;
      // $('.promo1-url.baby-girl').show();
      $('.promo1-url').show();
      $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = urls.promo.blackFriday.baby.boy;
      promo2 = urls.promo.sale.baby.boy;
      promo3 = urls.promo.sale.baby.boy;
      clearance = urls.promo.clearance.baby.boy;
      // $('.promo1-url.baby-boy').show();
      $('.promo1-url').show();
      $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      promo1 = urls.promo.blackFriday.toddler.girl;
      promo2 = urls.promo.sale.toddler.girl;
      promo3 = urls.promo.sale.toddler.girl;
      clearance = urls.promo.clearance.toddler.girl;
      // $('.promo1-url.girl').show();
      // $('.promo1-url.girl').show();
      $('.promo1-url').show();
      $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      promo1 = urls.promo.blackFriday.toddler.boy;
      promo2 = urls.promo.sale.toddler.boy;
      promo3 = urls.promo.sale.toddler.boy;
      clearance = urls.promo.clearance.toddler.boy;
      // $('.promo1-url.boy').show();
      //  $('.promo1-url.boy').show();
      $('.promo1-url').show();
      $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = urls.promo.blackFriday.baby.newborn;
      promo2 = urls.promo.sale.baby.newborn;
      promo3 = urls.promo.sale.baby.newborn;
      clearance = urls.promo.clearance.baby.newborn;
      // $('.promo1-url.newborn').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/swim-shop':
      // promo1 = urls.promo.blackFriday.select.swim;
      promo1 = urls.promo.blackFriday.promo;
      promo2 = urls.promo.sale.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.girl;
      // $('.promo1-url.swim').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo3);
  // $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);

};