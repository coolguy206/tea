"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  var url = window.location.pathname;
  // console.log(`url: ${url}`);

  if (url !== '/product/EGIFTCARD-999-NS/tea-collection-gift-certificate-gift-card.html') {
    var browsingHistory = window.localStorage.getItem('browseHistory');
    // console.log(browsingHistory);

    var browsingHistoryLength = $('.browsing-history li').length;
    // console.log(`browsingHistoryLength: ${browsingHistoryLength}`)

    if (browsingHistory !== null && browsingHistoryLength == 0) {
      browsingHistory = JSON.parse(browsingHistory);
      // console.log(browsingHistory);

      var items = browsingHistory.reverse();
      items.map(function (val, i) {
        // console.log(i);
        // console.log(val[0]);

        if (i < 15) {
          // var color = val[0].Url;
          // color = color.split('#')[1];

          // var promoClass = "promo-teaser-thumb";
          // var strike = val[0].Metadata.CompareAtPrice;
          // if (strike == val[0].Metadata.Price) {
          //   strike = "";
          //   promoClass = "";
          // }

          //! QUICK VIEW DOESN'T WORK... KEEPS ADDING MORE ITEMS TO SLIDESHOW
          // var qv = `<span data-href="${url}" data-color="${color}" class="js-qv ">Quick View</span>`;
          // //? ONLY SHOW QUICK VIEW IF NOT ON PDP PAGE
          // var thisPageUrl = window.location.pathname;
          // if(thisPageUrl.indexOf('product') !== -1){
          //   qv = "";
          // }

          if (val.pdpURL !== undefined) {
            var urlParams = "?utm_campaign=recently_viewed&utm_medium=recently_viewed&utm_source=recently_viewed";
            var qv = "<span data-href=\"".concat(val.pdpURL, "\" data-color=\"").concat(val.pdpColor, "\" class=\"js-qv ").concat(val.pdpName, "\">Quick View</span>");
            var elem = "\n                        <li>\n                            <div class=\"thumb-grid item\">\n                                <span class=\"img\">\n                                    <a href=\"".concat(val.pdpURL).concat(urlParams, "\"\n                                        data-hash=\"\" class=\"browsing-history ").concat(val.pdpName, "\">\n                                        <img class=\"image\" src=\"").concat(val.pdpImgURL, "\" alt=\"").concat(val.pdpName, "\" width=\"500\" height=\"500\">\n                                    </a>\n                                    ").concat(qv, "\n                                </span>\n                                <div class=\"thumb-content\">\n                                    <a class=\"name browsing-history\"\n                                        href=\"").concat(val.pdpURL).concat(urlParams, "\"\n                                        data-hash=\"\">\n                                        <span class=\"model\">").concat(val.pdpName, "</span>\n                                    </a>\n                        \n                                    <div class=\"price-wrap\">\n                                        <div class=\"price\">\n                                            <strike></strike>\n                                            <span id=\"store_price\" class=\"price \">").concat(val.pdpPrice, "</span>\n                                        </div>\n                                    </div>\n\n                                    <p class=\"size\">\n                                      <span class=\"thumb-sizes\">\n                                        ").concat(val.pdpSizes, "\n                                      </span>\n                                    </p>\n                        \n                                </div>\n                            </div>\n                        </li>\n                        ");
            $('.browsing-history ul').append(elem);
            var btn = "<button class=\"glide__bullet\" data-glide-dir=\"=".concat(i, "\"></button>");
            $('div[data-glide-el="controls[nav]"]').append(btn);
          }
        }
      });
      $('.browsing-history').css('opacity', 1);

      //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
      if ($('.browsing-history li').length >= 5 || window.innerWidth < 431) {
        new _glide["default"]('.browsing-history .glide', {
          type: 'slider',
          // autoplay: 4000,
          animationDuration: 500,
          perView: 4,
          hoverpause: true,
          gap: 0,
          bound: true,
          rewind: false,
          breakpoints: {
            821: {
              perView: 3,
              perSwipe: '|'
            },
            431: {
              perView: 1,
              perSwipe: '|'
            }
          }
        }).mount();
      } else {
        //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
        $('.browsing-history div[data-glide-el="controls"]').hide();
        $('.browsing-history ul').addClass('width-300');
      }
    } else {
      $('.browsing-history').hide();
    }
    (0, _inview.inview)('.browsing-history');
  }
});
//# sourceMappingURL=scripts.js.map
