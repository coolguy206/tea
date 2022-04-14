"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
var config = require("./../../../../gruntConfig.js"); // var linkElem = `<link rel="stylesheet" href="/mas_assets/media/tea_collection/${config.hp.ftp.css.dest}${config.hp.ftp.css.file}">`;
// console.log(linkElem);
//
// $('.hp').after(linkElem);


$(document).ready(function () {
  (0, _alt.alt)('.hp .promo1 img', 'babies');
  (0, _alt.alt)('.hp .c1 img', 'kids on the beach');
  (0, _alt.alt)('.hp .c2 .first img', 'family at the pool');
  (0, _alt.alt)('.hp .c2 .second img', 'kids in special occasion clothes');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in leopard print tee');
  (0, _alt.alt)('.hp .c3 .second img', 'baby girl in pink dress');
  (0, _alt.alt)('.hp .c4 .first img', 'girl in watermelon graphic dress');
  (0, _alt.alt)('.hp .c4 .second img', 'kids in summer graphic clothes');
  (0, _alt.alt)('.hp .c4 .third img', 'girl in beach clothes');
  (0, _alt.alt)('.hp .c5 .first img', 'kids in shark and whale graphic PJs');
  (0, _alt.alt)('.hp .c5 .second img', 'girl in floral graphic dress');
  (0, _alt.alt)('.hp .c5 .third img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  (0, _alt.alt)('.hp .c6 .second img', 'girls in striped dress and top');
  (0, _alt.alt)('.hp .c7 .first img', 'tea rewear');
  (0, _alt.alt)('.hp .c7 .second img', 'happy mom & son');
  (0, _alt.alt)('.hp .c7 .third img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .fourth img', 'baby girl in rainbow graphic dress');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .give-back');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
