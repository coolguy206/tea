"use strict";

var sku = $('.product-page').attr('data-tea-sku').split(',')[0];
$('div[data-crl8-container-id="product" ]').attr('data-crl8-filter', 'productId:' + sku);
//# sourceMappingURL=scripts.js.map
