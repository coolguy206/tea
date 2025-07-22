import {
  urls
} from './urls.js';

export const switchSale = (href) => {
  let promo1 = href;
  let promo2 = href;
  let promo3 = href;
  let clearance = href;

  switch (href) {

    case '/sale/girls-clothing/view-all':
      promo1 = urls.promo.select.girl;
      promo2 = urls.promo.sale.girl;
      promo3 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;
      // $('.promo1-url.girl').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      promo1 = urls.promo.select.boy;
      promo2 = urls.promo.sale.boy;
      promo3 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;
      // $('.promo1-url.boy').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = urls.promo.select.baby.girl;
      promo2 = urls.promo.sale.baby.girl;
      promo3 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;
      // $('.promo1-url.baby-girl').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = urls.promo.select.baby.boy;
      promo2 = urls.promo.sale.baby.boy;
      promo3 = urls.promo.sale.baby.boy;
      clearance = urls.promo.clearance.baby.boy;
      // $('.promo1-url.baby-boy').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = urls.promo.select.toddler.girl;
      promo2 = urls.promo.sale.toddler.girl;
      promo3 = urls.promo.sale.toddler.girl;
      clearance = urls.promo.clearance.toddler.girl;
      // $('.promo1-url.toddler-girl').show();
      //  $('.promo1-url.girl').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = urls.promo.select.toddler.boy;
      promo2 = urls.promo.sale.toddler.boy;
      promo3 = urls.promo.sale.toddler.boy;
      clearance = urls.promo.clearance.toddler.boy;
      // $('.promo1-url.toddler-boy').show();
      //  $('.promo1-url.boy').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = urls.promo.select.baby.newborn;
      promo2 = urls.promo.sale.baby.newborn;
      promo3 = urls.promo.sale.baby.newborn;
      clearance = urls.promo.clearance.baby.newborn;
      // $('.promo1-url.newborn').show();
      $('.promo1-url').show();
      // $('.promo2-url').show();
      $('.promo3-url').show();
      // $('.clearance-url').show();
      //  $('.promo2-url.newborn').show();
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
  $('.clearance-url').attr('href', clearance);

};