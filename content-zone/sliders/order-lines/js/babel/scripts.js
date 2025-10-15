"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { valHooks } from 'jquery';

$(document).ready(function () {
  var num = Date.now();
  console.log("/mas_assets/media/tea_collection/js/pdps-order-lines.js?nocache=".concat(num));
  fetch("/mas_assets/media/tea_collection/js/pdps-order-lines.js?nocache=".concat(num)).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    var html = "";
    data.map(function (val, i) {
      var img = val.img;
      var price = "";
      var storePrice = val.store_price;
      var retailPrice = val.retail_price;

      //? ONLY SHOW FULL PRICE ITEMS && ITEMS WITH IMAGES
      if (storePrice == retailPrice && img.indexOf('undefined') == -1) {
        if (storePrice !== retailPrice) {
          price = "<span id=\"store_price\" class=\"old-price\"><strike>".concat(val.retail_price, "</strike></span>\n                  <span id=\"sale_price\" class=\"price-red\">").concat(val.store_price, "</span>");
        } else {
          price = "<span id=\"store_price\" class=\"price\">".concat(val.store_price, "</span>");
        }
        var promoTeaser = "";
        if (val.promo_teaser !== undefined) {
          promoTeaser = "<span class=\"promo-teaser-thumb\">".concat(val.promo_teaser, "</span>");
        }
        var li = "<li class=\"lgw-thumb\">\n                    <div class=\"thumb-grid item\" style=\"width: 100%; padding: 0;\">\n                      \n                      <span class=\"img\">\n                        <a href=\"".concat(val.url, "\" class=\"the-order-lines ").concat(val.name, "\">\n                           ").concat(img, " \n                        </a>\n    \n                        <!--<span data-href=\"").concat(val.url, "\" data-color=\"").concat(val.color, "\" class=\"js-qv ").concat(val.name, "\">Quick View</span>\n                      </span>-->\n    \n                      <div class=\"thumb-content\">\n                        <a href=\"").concat(val.url, "\" class=\"name the-order-lines\">\n                          <span class=\"model\">").concat(val.name, "</span>\n                        </a>\n    \n                        <div class=\"price-wrap\">\n                          <div class=\"price\">\n                            ").concat(price, "\n                          </div>\n                        </div>\n    \n                        ").concat(promoTeaser, "\n    \n                      </div>\n                    </div>\n                  </li>");
        html = "".concat(html).concat(li);
      }
    });

    // console.log(html);

    $('.the-orders-lines-slider ul').append(html);
    $('.the-orders-lines-slider').css('opacity', 1);

    // $($(`.the-orders-lines-slider .lgw-thumb`)[6]).before($('.the-orders-lines-slider .img-2'));

    //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
    if ($('.the-orders-lines-slider li').length >= 5 || window.innerWidth < 431) {
      new _glide["default"]('.the-orders-lines-slider .glide', {
        type: 'carousel',
        // autoplay: 4000,
        animationDuration: 500,
        perView: 5,
        hoverpause: true,
        gap: 0,
        bound: true,
        rewind: false,
        breakpoints: {
          // 821: {
          //   perView: 3,
          //   perSwipe: '|',
          // },
          431: {
            perView: 2,
            perSwipe: '|'
          }
        }
      }).mount();
    } else {
      //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
      $('.the-orders-lines-slider div[data-glide-el="controls"]').hide();
      $('.the-orders-lines-slider ul').addClass('width-300');
    }
    (0, _inview.inview)('.the-orders-lines-slider');
    $('.the-orders-lines-slider .white-out').fadeOut();
  })["catch"](function (err) {
    console.log("oops something went wrong. \n ".concat(err));
  });

  // $('.the-orders-lines-slider').css('opacity', 1);

  // $($(`.the-orders-lines-slider .lgw-thumb`)[6]).before($('.the-orders-lines-slider .img-2'));
  /*
    //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
    if ($('.the-orders-lines-slider li').length >= 5 || window.innerWidth < 431) {
      new Glide('.the-orders-lines-slider .glide', {
        type: 'carousel',
        // autoplay: 4000,
        animationDuration: 500,
        perView: 5,
        hoverpause: true,
        gap: 0,
        bound: true,
        rewind: false,
        breakpoints: {
          // 821: {
          //   perView: 3,
          //   perSwipe: '|',
          // },
          431: {
            perView: 2,
            perSwipe: '|',
          },
        }
      }).mount();
    } else {
      //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
      $('.the-orders-lines-slider div[data-glide-el="controls"]').hide();
      $('.the-orders-lines-slider ul').addClass('width-300');
    }
  */
  //  inview('.the-orders-lines-slider');
});
