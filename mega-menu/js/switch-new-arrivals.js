import {
  urls
} from './urls.js';
export const switchNewArrivals = (href) => {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = urls.promo1.sale.girl;
      promo2 = urls.promo1.sale.girl;
      clearance = urls.promo2.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      promo1 = urls.promo1.sale.boy;
      promo2 = urls.promo1.sale.boy;
      clearance = urls.promo2.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = urls.promo1.sale.baby.girl;
      promo2 = urls.promo1.sale.baby.girl;
      clearance = urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = urls.promo1.sale.baby.boy;
      promo2 = urls.promo1.sale.baby.boy;
      clearance = urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      promo1 = urls.promo1.sale.toddler.girl;
      promo2 = urls.promo1.sale.toddler.girl;
      clearance = urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      promo1 = urls.promo1.sale.toddler.boy;
      promo2 = urls.promo1.sale.toddler.boy;
      clearance = urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = urls.promo1.sale.baby.newborn;
      promo2 = urls.promo1.sale.baby.newborn;
      clearance = urls.promo2.baby.newborn;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    case '/tween-girls-clothing/favorites/new-arrivals':
      promo1 = urls.promo1.sale.tween;
      promo2 = urls.promo1.sale.tween;
      clearance = urls.promo2.tween;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();

      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.clearance-url').attr('href', clearance);

};
