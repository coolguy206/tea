"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaLabel = void 0;
var ariaLabel = exports.ariaLabel = function ariaLabel(elem, str) {
  var ctas = $(elem);
  $(ctas).each(function () {
    // console.log($(this).text())
    var regex = new RegExp(str, "g");
    var text = $(this).text().replace(regex, "").trim();
    $(this).closest('div[role="region"]').attr('aria-label', text);
  });
};
