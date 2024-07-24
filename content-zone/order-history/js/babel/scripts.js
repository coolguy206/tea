"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  var orderHistory = window.localStorage.getItem('orderHistory');
  if (orderHistory !== null) {
    orderHistory = JSON.parse(orderHistory);
    // console.log(orderHistory);
    var num = "";
    if (orderHistory.length == 1) {
      num = 0;
    } else {
      num = orderHistory.length - 1;
    }

    // var items = orderHistory[num].items.reverse();
    var items = orderHistory[num].items;
    items.map(function (val, i) {
      // console.log(val[0]);
      var color = val.variant;
      var price = Number(val.price);
      price = price.toFixed(2);
      var url = "/product/".concat(val.id, "/#").concat(color);

      //! QUICK VIEW DOESN'T WORK... KEEPS ADDING MORE ITEMS TO SLIDESHOW
      // var qv = `<span data-href="${url}" data-color="${color}" class="js-qv ">Quick View</span>`;
      // //? ONLY SHOW QUICK VIEW IF NOT ON PDP PAGE
      // var thisPageUrl = window.location.pathname;
      // if(thisPageUrl.indexOf('product') !== -1){
      //   qv = "";
      // }

      var qv = "";
      var elem = "\n                        <li>\n                            <div class=\"thumb-grid item\">\n                                <span class=\"img\">\n                                    <a href=\"".concat(url, "\"\n                                        data-hash=\"\">\n                                        <img class=\"image\" src=\"").concat(val.img, "\" alt=\"").concat(val.name, "\" width=\"500\" height=\"500\">\n                                    </a>\n                                    ").concat(qv, "\n                                </span>\n                                  \n                                <div class=\"thumb-content\">\n                                    <a class=\"name\"\n                                        href=\"").concat(url, "\"\n                                        data-hash=\"\">\n                                        <span class=\"model\">").concat(val.name, "</span>\n                                    </a>\n                        \n                                    <div class=\"price-wrap\">\n                                        <div class=\"price\">\n                                            <span id=\"store_price\" class=\"price\">$").concat(price, "</span>\n                                        </div>\n                                    </div>\n                        \n                                </div>\n                            </div>\n                        </li>\n                        ");
      $('.buy-again ul').append(elem);
    });
    $('.buy-again').css('opacity', 1);

    //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER 0R IF MOBILE
    if ($('.buy-again li').length >= 5 || window.innerWidth < 431) {
      new _glide["default"]('.buy-again .glide', {
        type: 'slider',
        // autoplay: 4000,
        animationDuration: 500,
        perView: 5,
        hoverpause: true,
        gap: 0,
        bound: true,
        rewind: false,
        breakpoints: {
          431: {
            perView: 2,
            perSwipe: '|'
          }
        }
      }).mount();
    } else {
      //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
      $('.buy-again div[data-glide-el="controls"]').hide();
      $('.buy-again ul').addClass('width-300');
    }
  }
  (0, _inview.inview)('.buy-again');
});
//# sourceMappingURL=scripts.js.map
