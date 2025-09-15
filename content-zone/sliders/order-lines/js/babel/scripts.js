"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { valHooks } from 'jquery';

$(document).ready(function () {
  var baseURL = "https://item-recommender-api.vercel.app/orders/";
  var itemsArray = [];

  //?get the recommendations
  fetch("".concat(baseURL)).then(function (data) {
    return data.json();
  }).then(function (data) {
    // console.log(data);

    for (var i = 0; i < data.length; i++) {
      if (itemsArray.length < 20) {
        for (var j = 0; j < data[i].items.length; j++) {
          var storePrice = Number(data[i].items[j].store_price).toFixed(2);
          var retailPrice = Number(data[i].items[j].retail_price).toFixed(2);
          var img = data[i].items[j].img;

          // console.log(storePrice, retailPrice, img);

          //? ONLY SHOW FULL PRICE ITEMS && ITEMS WITH IMAGES
          if (storePrice == retailPrice && img.indexOf('undefined') == -1) {
            // console.log(`conditions met`);
            // console.log(storePrice, retailPrice, img);
            // console.log(data[i].items[j]);
            itemsArray.push(data[i].items[j]);
            // itemsArray = itemsArray.flat();
          }
        }
      } else {
        //? stop the loop because we have 20 items
        break;
      }
    }

    // console.log(`itemsArray`);
    // console.log(itemsArray);

    //? Remove duplicates based on sku prefix
    var uniqueArray = [];
    var seenPrefixes = new Set();
    uniqueArray = itemsArray.filter(function (item) {
      var prefix = item.baseSku;
      if (seenPrefixes.has(prefix)) {
        //? Skip if prefix already seen
        return false;
      } else {
        //? Keep the first occurrence
        seenPrefixes.add(prefix);
        return true;
      }
    });
    return uniqueArray;
  }).then(function (data) {
    var html = "";
    data.map(function (val, i) {
      var img = val.img;
      var price = "";
      var storePrice = Number(val.store_price).toFixed(2);
      var retailPrice = Number(val.retail_price).toFixed(2);

      //? ONLY SHOW FULL PRICE ITEMS && ITEMS WITH IMAGES
      if (storePrice == retailPrice && img.indexOf('undefined') == -1) {
        if (storePrice !== retailPrice) {
          price = "<span id=\"store_price\" class=\"old-price\"><strike>$".concat(retailPrice, "</strike></span>\n                  <span id=\"sale_price\" class=\"price-red\">$").concat(storePrice, "</span>");
        } else {
          price = "<span id=\"store_price\" class=\"price\">$".concat(storePrice, "</span>");
        }
        var promoTeaser = "";
        if (val.promo_teaser !== undefined && val.promo_teaser !== null && val.promo_teaser !== "") {
          promoTeaser = "<span class=\"promo-teaser-thumb\">".concat(val.promo_teaser, "</span>");
        }
        var li = "<li class=\"lgw-thumb\">\n                    <div class=\"thumb-grid item\" style=\"width: 100%; padding: 0;\">\n                      \n                      <span class=\"img\">\n                        <a href=\"".concat(val.url, "\" class=\"the-order-lines ").concat(val.model, "\">\n                           ").concat(img, " \n                        </a>\n    \n                        <!-- <span data-href=\"").concat(val.url, "\" data-color=\"").concat(val.color, "\" class=\"js-qv ").concat(val.model, "\">Quick View</span>-->\n                      </span>\n    \n                      <div class=\"thumb-content\">\n                        <a href=\"").concat(val.url, "\" class=\"name the-order-lines\">\n                          <span class=\"model\">").concat(val.model, "</span>\n                        </a>\n    \n                        <div class=\"price-wrap\">\n                          <div class=\"price\">\n                            ").concat(price, "\n                          </div>\n                        </div>\n    \n                        ").concat(promoTeaser, "\n    \n                      </div>\n                    </div>\n                  </li>");
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
  ;
});
