"use strict";

$(document).ready(function () {
  var sku = $('.product-page').attr('data-tea-sku');
  if (sku !== undefined && sku !== "") {
    sku = sku.split(',')[0];
    $('div[data-crl8-container-id="product" ]').attr('data-crl8-filter', 'productId:' + sku);
  }
});
//# sourceMappingURL=scripts.js.map
