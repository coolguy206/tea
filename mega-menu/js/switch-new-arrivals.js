import { urls } from './urls.js';
import { promoVars } from './promo-vars.js';

export const switchNewArrivals = (href) => {
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
    case '/girls-clothing/new-arrivals':
      promo1 = urls.promo.select2.girl;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      promo1 = urls.promo.select2.boy;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = urls.promo.select2.baby.girl;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = urls.promo.select2.baby.boy;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      promo1 = urls.promo.select2.toddler.girl;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      promo1 = urls.promo.select2.toddler.boy;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      // promo1 = urls.promo.select2.baby.newborn;
      promo1 = urls.promo.select2.promo;
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/swim-shop':
      // promo1 =  urls.promo.select.swim;
      promo1 = urls.promo.select2.promo;
      promo2 = urls.promo.select.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.girl;

      if (promoVars.showPromo1) {
        if (promoVars.swim !== ``) {
          $(promoVars.swim).show();
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/dresses':
      // promo1 =  urls.promo.select.swim;
      promo1 = urls.promo.select2.promo;
      promo2 = urls.promo.select.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.girl;

      if (promoVars.showPromo1) {
        if (promoVars.dress !== ``) {
          $(promoVars.dress).show();
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
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/new-arrivals':
      // promo1 =  urls.promo.select.swim;
      promo1 = urls.promo.select2.promo;
      promo2 = urls.promo.select.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.girl;

      if (promoVars.showPromo1) {
        if (promoVars.new !== ``) {
          $(promoVars.new).show();
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