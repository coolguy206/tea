import {
  urls
} from './urls.js';

export const switchSale = (href) => {
  let promo1 = href;
  let promo2 = href;
  let promo3 = href;
  let clearance = href;

  let girl = `.promo1-url.girl`;
  let boy = `.promo1-url.boy`;
  let babyGirl = `.promo1-url.baby-girl`;
  let babyBoy = `.promo1-url.baby-boy`;

  // let toddlerGirl = `.promo1-url.toddler-girl`;
  // let toddlerBoy = `.promo1-url.toddler-boy`;
  let toddlerGirl = `.promo1-url.girl`;
  let toddlerBoy = `.promo1-url.boy`;

  let newborn = ``;
  // let newborn = `.promo1-url.newborn`;

  let swim = `.promo1-url.girl`;
  let dress = `.promo1-url.girl`;

  switch (href) {

    case '/sale/girls-clothing/view-all':
      promo1 = urls.promo.girl;
      promo2 = urls.promo.select.girl;
      promo3 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;
      $(girl).show();
      // $('.promo1-url.girl').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      promo1 = urls.promo.boy;
      promo2 = urls.promo.select.boy;
      promo3 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;
      $(boy).show();
      // $('.promo1-url.boy').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = urls.promo.baby.girl;
      promo2 = urls.promo.select.baby.girl;
      promo3 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;
      $(babyGirl).show();
      // $('.promo1-url.baby-girl').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = urls.promo.baby.boy;
      promo2 = urls.promo.select.baby.boy;
      promo3 = urls.promo.sale.baby.boy;
      clearance = urls.promo.clearance.baby.boy;
      $(babyBoy).show();
      // $('.promo1-url.baby-boy').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = urls.promo.toddler.girl;
      promo2 = urls.promo.select.toddler.girl;
      promo3 = urls.promo.sale.toddler.girl;
      clearance = urls.promo.clearance.toddler.girl;
      $(toddlerGirl).show();
      // $('.promo1-url.toddler-girl').show();
      // $('.promo1-url.girl').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = urls.promo.toddler.boy;
      promo2 = urls.promo.select.toddler.boy;
      promo3 = urls.promo.sale.toddler.boy;
      clearance = urls.promo.clearance.toddler.boy;
      $(toddlerBoy).show();
      // $('.promo1-url.toddler-boy').show();
      // $('.promo1-url.boy').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = urls.promo.baby.newborn;
      promo2 = urls.promo.select.baby.newborn;
      promo3 = urls.promo.sale.baby.newborn;
      clearance = urls.promo.clearance.baby.newborn;
      if (newborn !== ``) {
        $(newborn).show();
      }
      // $('.promo1-url.newborn').show();
      // $('.promo1-url.baby-girl').show();
      // $('.promo1-url').show();
      // $('.promo2-url').show();
      // $('.promo3-url').show();
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