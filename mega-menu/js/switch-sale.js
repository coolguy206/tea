import { urls } from './urls.js';
import { promoVars } from './promo-vars.js';
// import { promoVars } from './promo-sale-vars.js';

export const switchSale = (href) => {
  let promo1 = href;
  let promo2 = href;
  let promo3 = href;
  let clearance = href;

  let {
    showPromo1,
    showPromo2,
    showPromo3,
    promo1Elem,
    promo2Elem,
    promo3Elem,
    girl,
    boy,
    babyGirl,
    babyBoy,
    toddlerGirl,
    toddlerBoy,
    newborn,
    showNewborn,
    swim,
    dress
  } = promoVars;

  switch (href) {

    case '/sale/girls-clothing/view-all':
      promo1 = urls.promo.girl;
      promo2 = urls.promo.select.girl;
      promo3 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;

      if (promoVars.showPromo1) {
        if (promoVars.girl !== ``) {
          $(promoVars.girl).show();
        } else {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      promo1 = urls.promo.boy;
      promo2 = urls.promo.select.boy;
      promo3 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;

      if (promoVars.showPromo1) {
        if (promoVars.boy !== ``) {
          $(promoVars.boy).show();
        } else {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = urls.promo.baby.girl;
      promo2 = urls.promo.select.baby.girl;
      promo3 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;

      if (promoVars.showPromo1) {
        if (promoVars.babyGirl !== ``) {
          $(promoVars.babyGirl).show();
        } else {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = urls.promo.baby.boy;
      promo2 = urls.promo.select.baby.boy;
      promo3 = urls.promo.sale.baby.boy;
      clearance = urls.promo.clearance.baby.boy;

      if (promoVars.showPromo1) {
        if (promoVars.babyBoy !== ``) {
          $(promoVars.babyBoy).show();
        } else {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = urls.promo.toddler.girl;
      promo2 = urls.promo.select.toddler.girl;
      promo3 = urls.promo.sale.toddler.girl;
      clearance = urls.promo.clearance.toddler.girl;

      if (promoVars.showPromo1) {
        if (promoVars.toddlerGirl !== ``) {
          $(promoVars.toddlerGirl).show();
        } else {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = urls.promo.toddler.boy;
      promo2 = urls.promo.select.toddler.boy;
      promo3 = urls.promo.sale.toddler.boy;
      clearance = urls.promo.clearance.toddler.boy;

      if (promoVars.showPromo1) {
        if (promoVars.toddlerBoy !== ``) {
          $(promoVars.toddlerBoy).show();
        } else {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      // promo1 = urls.promo.baby.newborn;
      promo1 = urls.promo.promo;
      promo2 = urls.promo.select.baby.newborn;
      promo3 = urls.promo.sale.baby.newborn;
      clearance = urls.promo.clearance.baby.newborn;

      if (promoVars.showPromo1) {
        if (promoVars.newborn !== ``) {
          $(promoVars.newborn).show();
        } else if (promoVars.showNewborn) {
          $(promoVars.promo1Elem).show();
        }
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      //  $('.promo2-url.newborn').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;


    case '/clothing-sale':
      promo1 = urls.promo.promo;
      promo2 = urls.promo.select.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.promo;

      if (promoVars.showPromo1) {
        $(promoVars.promo1Elem).show();
      }

      if (promoVars.showPromo2) {
        $(promoVars.promo2Elem).show();
      }

      if (promoVars.showPromo3) {
        $(promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      //  $('.promo2-url.newborn').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
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