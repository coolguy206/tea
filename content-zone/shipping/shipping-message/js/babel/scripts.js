"use strict";

$(document).ready(function () {
  var a = window.location.pathname,
      b = $("#shipping-message");
  "/order/shipping-info" == a ? ($('div[data-zone="category_pages"]').before(b), $(b).show()) : 1 == $(".customer-service .title").length && ($(".customer-service .title").before(b), $(b).css("textAlign", "center").show());
});
//# sourceMappingURL=scripts.js.map
