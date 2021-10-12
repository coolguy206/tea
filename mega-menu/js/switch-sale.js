import {
  urls
} from './urls.js';

export const switchSale = (href) => {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {

    case '/sale/girls-clothing/view-all':
      promo1 = urls.promo1.girl;
      promo2 = urls.promo1.girl;
      clearance = urls.promo2.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      promo1 = urls.promo1.boy;
      promo2 = urls.promo1.boy;
      clearance = urls.promo2.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = urls.promo1.baby.girl;
      promo2 = urls.promo1.baby.girl;
      clearance = urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = urls.promo1.baby.boy;
      promo2 = urls.promo1.baby.boy;
      clearance = urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = urls.promo1.toddler.girl;
      promo2 = urls.promo1.toddler.girl;
      clearance = urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = urls.promo1.toddler.boy;
      promo2 = urls.promo1.toddler.boy;
      clearance = urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = urls.promo1.baby.newborn;
      promo2 = urls.promo1.baby.newborn;
      clearance = urls.promo2.baby.newborn;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/tween-girls-clothing/view-all':
      promo1 = urls.promo1.tween;
      promo2 = urls.promo1.tween;
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