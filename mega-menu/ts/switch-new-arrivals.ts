import { urls } from './urls';

export const switchNewArrivals = (href: string): void => {
  let promo1 = href;
  let promo2 = href;
  let promo3 = href;
  let clearance = href;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = urls.promo.girl;
      promo2 = urls.promo.sale.girl;
      promo3 = urls.promo.sale.girl;
      clearance = urls.promo.clearance.girl;
      $('.promo1-url').show();
      $('.promo2-url').show();
      break;
    case '/boys-clothing/new-arrivals':
      promo1 = urls.promo.boy;
      promo2 = urls.promo.sale.boy;
      promo3 = urls.promo.sale.boy;
      clearance = urls.promo.clearance.boy;
      $('.promo1-url').show();
      $('.promo2-url').show();
      break;
    case '/baby-girl-clothes/new-arrivals':
      promo1 = urls.promo.baby.girl;
      promo2 = urls.promo.sale.baby.girl;
      promo3 = urls.promo.sale.baby.girl;
      clearance = urls.promo.clearance.baby.girl;
      $('.promo1-url').show();
      $('.promo2-url').show();
      break;
    // ...existing code...
  }
};
