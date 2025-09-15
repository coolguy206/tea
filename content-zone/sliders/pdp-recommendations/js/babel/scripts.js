"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { valHooks } from 'jquery';

$(document).ready(function () {
  //? prod
  // let itemSku = window.dataLayer[4].ecommerce.view_item.items[0].item_id;
  // let itemName = window.dataLayer[4].ecommerce.view_item.items[0].item_name;

  //? sandbox
  var itemSku = "";
  var itemName = "";
  var url = window.location.pathname;
  url = url.split('/');
  itemSku = url[2];
  itemName = url[3].replace(/.html/g, '').replace(/-/g, ' ');

  //? ONLY EXECUTE IF USER IS LOGGED IN
  if (itemSku !== "" && itemName !== "") {
    var baseURL = "https://item-recommender-api.vercel.app/items/recommendations/";

    //?get the recommendations
    fetch("".concat(baseURL).concat(itemSku, "/").concat(itemName)).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log(data);
      if (data.bySku.length !== 0) {
        console.log("data by skus");
        data = data.bySku;
      } else {
        console.log("data by models");
        data = data.byModel;
      }
      var html = "";

      //? if more than 10 items than assign itemsToLoop to only have 10 items
      //? else assign itemsToLoop to have all the items because it is less than 10 items
      var itemsToLoop = data.length > 10 ? data.slice(0, 10) : data;
      itemsToLoop.map(function (val, i) {
        var img = val.img;
        var price = "";
        var storePrice = Number(val.store_price).toFixed(2);
        var retailPrice = Number(val.retail_price).toFixed(2);

        //? ONLY SHOW ITEMS WITH IMAGES
        if (img.indexOf('undefined') == -1) {
          if (storePrice !== retailPrice) {
            price = "<span id=\"store_price\" class=\"old-price\"><strike>$".concat(retailPrice, "</strike></span>\n                  <span id=\"sale_price\" class=\"price-red\">$").concat(storePrice, "</span>");
          } else {
            price = "<span id=\"store_price\" class=\"price\">$".concat(storePrice, "</span>");
          }
          var promoTeaser = "";
          if (val.promo_teaser !== "" && val.promo_teaser !== null && val.promo_teaser !== undefined) {
            promoTeaser = "<span class=\"promo-teaser-thumb\">".concat(val.promo_teaser, "</span>");
          }
          var li = "<li class=\"lgw-thumb\">\n                    <div class=\"thumb-grid item\" style=\"width: 100%; padding: 0;\">\n                      \n                      <span class=\"img\">\n                        <a href=\"".concat(val.url, "\" class=\"the-order-lines ").concat(val.model, "\">\n                           ").concat(img, " \n                        </a>\n    \n                        <span data-href=\"").concat(val.url, "\" data-color=\"").concat(val.color, "\" class=\"js-qv ").concat(val.model, "\">Quick View</span>\n                      </span>\n    \n                      <div class=\"thumb-content\">\n                        <a href=\"").concat(val.url, "\" class=\"name the-order-lines\">\n                          <span class=\"model\">").concat(val.model, "</span>\n                        </a>\n    \n                        <div class=\"price-wrap\">\n                          <div class=\"price\">\n                            ").concat(price, "\n                          </div>\n                        </div>\n    \n                        ").concat(promoTeaser, "\n    \n                      </div>\n                    </div>\n                  </li>");
          html = "".concat(html).concat(li);
        }
      });

      // console.log(html);

      $('.pdp-recommendations-slider ul').append(html);
      $('.pdp-recommendations-slider').css('opacity', 1);

      // $($(`.pdp-recommendations-slider .lgw-thumb`)[6]).before($('.pdp-recommendations-slider .img-2'));

      //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
      if ($('.pdp-recommendations-slider li').length >= 5 || window.innerWidth < 431) {
        new _glide["default"]('.pdp-recommendations-slider .glide', {
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
        $('.pdp-recommendations-slider div[data-glide-el="controls"]').hide();
        $('.pdp-recommendations-slider ul').addClass('width-300');
      }
      (0, _inview.inview)('.pdp-recommendations-slider');
      $('.pdp-recommendations-slider .white-out').fadeOut();
    })["catch"](function (err) {
      console.log("oops something went wrong. \n ".concat(err));
    });
    ;
  }
});
