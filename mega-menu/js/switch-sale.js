import {
  urls
} from './urls.js';

export const switchSale = (href) => {
  var promo1 = href;
  var promo2 = href;

  switch (href) {

    case '/sale/girls-clothing/view-all':
      promo1 = urls.promo1.sale.girl;
      promo2 = urls.promo2.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/boys-clothing/view-all':
      promo1 = urls.promo1.sale.boy;
      promo2 = urls.promo2.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = urls.promo1.sale.baby.girl;
      promo2 = urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = urls.promo1.sale.baby.boy;
      promo2 = urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = urls.promo1.sale.toddler.girl;
      promo2 = urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = urls.promo1.sale.toddler.boy;
      promo2 = urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = urls.promo1.sale.baby.newborn;
      promo2 = urls.promo2.baby.newborn;
      $('.promo1-url').show();
      $('.promo2-url').hide();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/sale/tween-girls-clothing/view-all':
      promo1 = urls.promo1.sale.tween;
      promo2 = urls.promo2.tween;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;


    default:
      break;
  }


};