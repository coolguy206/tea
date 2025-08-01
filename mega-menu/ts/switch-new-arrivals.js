"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchNewArrivals = void 0;
const urls_1 = require("./urls");
const switchNewArrivals = (href) => {
    let promo1 = href;
    let promo2 = href;
    let promo3 = href;
    let clearance = href;
    switch (href) {
        case '/girls-clothing/new-arrivals':
            promo1 = urls_1.urls.promo.girl;
            promo2 = urls_1.urls.promo.sale.girl;
            promo3 = urls_1.urls.promo.sale.girl;
            clearance = urls_1.urls.promo.clearance.girl;
            $('.promo1-url').show();
            $('.promo2-url').show();
            break;
        case '/boys-clothing/new-arrivals':
            promo1 = urls_1.urls.promo.boy;
            promo2 = urls_1.urls.promo.sale.boy;
            promo3 = urls_1.urls.promo.sale.boy;
            clearance = urls_1.urls.promo.clearance.boy;
            $('.promo1-url').show();
            $('.promo2-url').show();
            break;
        case '/baby-girl-clothes/new-arrivals':
            promo1 = urls_1.urls.promo.baby.girl;
            promo2 = urls_1.urls.promo.sale.baby.girl;
            promo3 = urls_1.urls.promo.sale.baby.girl;
            clearance = urls_1.urls.promo.clearance.baby.girl;
            $('.promo1-url').show();
            $('.promo2-url').show();
            break;
    }
};
exports.switchNewArrivals = switchNewArrivals;
//# sourceMappingURL=switch-new-arrivals.js.map