import {
  urls
} from './urls.js';
export const switchNewArrivals = (href) => {
  let promo1 = href;
  let promo2 = href;
  let promo3 = href;
  let clearance = href;

  let showPromo1 = false;

  let promo1Elem = `.promo1-url`;

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
  let showNewborn = false;

  let swim = `.promo1-url.girl`;
  let dress = `.promo1-url.girl`;

  let promo2Elem = `.promo2-url`;

  // girl = ``; boy = ``; babyGirl = ``; babyBoy = ``; toddlerGirl = ``; toddlerBoy = ``; newborn = ``;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = urls.promo.girl;
      promo2 = urls.promo.select.girl;
      promo3 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;
      if (showPromo1) {
        if (girl !== ``) {
          $(girl).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      promo1 = urls.promo.boy;
      promo2 = urls.promo.select.boy;
      promo3 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;
      if (showPromo1) {
        if (boy !== ``) {
          $(boy).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = urls.promo.baby.girl;
      promo2 = urls.promo.select.baby.girl;
      promo3 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;
      if (showPromo1) {
        if (babyGirl !== ``) {
          $(babyGirl).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = urls.promo.baby.boy;
      promo2 = urls.promo.select.baby.boy;
      promo3 = urls.promo.sale.baby.boy;
      clearance = urls.promo.clearance.baby.boy;
      if (showPromo1) {
        if (babyBoy !== ``) {
          $(babyBoy).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      promo1 = urls.promo.toddler.girl;
      promo2 = urls.promo.select.toddler.girl;
      promo3 = urls.promo.sale.toddler.girl;
      clearance = urls.promo.clearance.toddler.girl;
      if (showPromo1) {
        if (toddlerGirl !== ``) {
          $(toddlerGirl).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      promo1 = urls.promo.toddler.boy;
      promo2 = urls.promo.select.toddler.boy;
      promo3 = urls.promo.sale.toddler.boy;
      clearance = urls.promo.clearance.toddler.boy;
      if (showPromo1) {
        if (toddlerBoy !== ``) {
          $(toddlerBoy).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = urls.promo.baby.newborn;
      promo2 = urls.promo.select.baby.newborn;
      promo3 = urls.promo.sale.baby.newborn;
      clearance = urls.promo.clearance.baby.newborn;
      if (showPromo1) {
        if (newborn !== ``) {
          $(newborn).show();
        } else if (showNewborn) {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/swim-shop':
      // promo1 = urls.promo.select.swim;
      promo1 = urls.promo.promo;
      promo2 = urls.promo.select.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.girl;
      if (showPromo1) {
        if (swim !== ``) {
          $(swim).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;

    case '/dresses':
      // promo1 = urls.promo.select.swim;
      promo1 = urls.promo.promo;
      promo2 = urls.promo.select.promo;
      promo3 = urls.promo.sale.promo;
      clearance = urls.promo.clearance.girl;
      if (showPromo1) {
        if (dress !== ``) {
          $(dress).show();
        } else {
          $(promo1Elem).show();
        }
      }

      if (promo2Elem !== ``) {
        $(promo2Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
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