import {
  urls
} from './urls.js';

export const switchSale = (href) => {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {

    case '/sale/girls-clothing/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.girl;
      promo2 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;
      // $('.promo1-url.girl').show();
      // $('.promo2-url.girl').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.boy;
      promo2 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;
      // $('.promo1-url.boy').show();
      // $('.promo2-url.boy').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.baby.girl;
      promo2 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;
      // $('.promo1-url.baby-girl').show();
      // $('.promo2-url.baby-girl').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.baby.boy;
      promo2 = urls.promo.sale.baby.boy;
      clearance = urls.promo.clearance.baby.boy;
      // $('.promo1-url.baby-boy').show();
      // $('.promo2-url.baby-boy').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.toddler.girl;
      promo2 = urls.promo.sale.toddler.girl;
      clearance = urls.promo.clearance.toddler.girl;
      // $('.promo1-url.toddler-girl').show();
      // $('.promo2-url.toddler-girl').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.toddler.boy;
      promo2 = urls.promo.sale.toddler.boy;
      clearance = urls.promo.clearance.toddler.boy;
      // $('.promo1-url.toddler-boy').show();
      // $('.promo2-url.toddler-boy').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      // promo1 = urls.promo.sale.promo;
      promo1 = urls.promo.sale.baby.newborn;
      promo2 = urls.promo.sale.baby.newborn;
      clearance = urls.promo.clearance.baby.newborn;
      // $('.promo1-url.newborn').show();
      //  $('.promo2-url.newborn').show();
      $('.promo2-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);

};