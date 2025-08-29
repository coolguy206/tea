(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (sizeChartArr) {
  //? function to change the cats dropdown
  //? get the value of the .department

  var dept = $('.size-chart-container select.department').val();
  $.each(sizeChartArr, function (i, val) {
    //? get the cats that match the dept
    if (val.dept == dept) {
      //?loop through the cats and add to page
      $.each(val.cat, function (j, arr) {
        var catM = '<option value="' + arr.name + '">' + arr.name + '</option>';
        $('.size-chart-container select.category').append(catM);
      });
    }
  });
};

},{}],2:[function(require,module,exports){
"use strict";

module.exports = [{
  dept: 'girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  measure: {
    img: 'girls/girls-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of her chest and around her shoulder blades. Her arms should be relaxed naturally against her sides.',
    hips: 'Have your child stand with her legs together, not spread apart. Wrap the measuring tape in a loop around the widest part of her hips.',
    waist: 'Tie a string around your child\'s middle and have her bend from side to side. The string will settle around her natural waist, above her hipbones. Wrap a measuring tape around this part of her waist.'
  },
  cat: [{
    name: 'tops,dresses,bottoms',
    img: 'girls/girls-dresses.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a dress that fits.',
    rightH2: 'Long Live the Dress',
    rightP: 'Many parents tell us that when their daughter is too tall for her favorite Tea dress, she wears it as a tunic!'
  },
  // {
  //   name: 'tops',
  //   img: 'girls/girls-tops.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'Her chest measurement is the most important factor in finding a top that fits.',
  //   rightH2: 'Always in Season',
  //   rightP: 'Thanks to our easy-to-layer purity tees, she can wear that favorite tank or short sleeve top all year long. (Whew, right?!)',
  // },
  // {
  //   name: 'bottoms',
  //   img: 'girls/girls-bottoms.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'Her waist measurement is the most important factor in finding pants that fit comfortably—but her hip measurement can make the difference if you\'re stuck between sizes.',
  //   rightH2: 'Easy Does it',
  //   rightP: 'She\'s got places to go. Like, right now! That\'s why our pants are designed to be extra easy for her to pull on and off in a jiffy.',
  // },
  {
    name: 'swim',
    img: 'girls/girls-swim.png',
    leftH2: 'Tankinis + Bikinis',
    leftP: 'Since our tops and bottoms are sold separately, you can mix sizes to get the best fit. Measure her chest to decide on a top size; measure her hips for the right bottom.',
    rightH2: 'One-Pieces',
    rightP: 'Chest and hip measurements are what you\'re looking for to find the right size. When in doubt, go with her chest measurement.',
    rightH2Bottom: 'Rash Guards',
    rightPBottom: 'Her chest measurement is the most important factor in finding a rash guard that fits.'
  }, {
    name: 'sweater + outerwear',
    img: 'girls/girls-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine her size is the circumference of her chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don’t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories,socks,headbands,hats',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
}, /*-----------------------------------------------------------------------------------------*/

{
  dept: 'boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  measure: {
    img: 'boys/boys-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of his chest and around his shoulder blades. His arms should be relaxed naturally against his sides.',
    hips: 'Have your child stand with his legs together, not spread apart. Wrap the measuring tape in a loop around the widest part of his hips.',
    waist: 'Tie a string around your child\'s middle and have him bend from side to side. The string will settle around his natural waist, above his hipbones. Wrap a measuring tape around this part of his waist.'
  },
  cat: [{
    name: 'tees + shirts,bottoms',
    img: 'boys/boys-tops.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His chest measurement is the most important factor in finding a shirt that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer purity tees, he can wear that favorite sleeve shirt all year long. (Whew, right?!)'
  },
  // {
  //   name: 'bottoms',
  //   img: 'boys/boys-bottoms.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'His waist measurement is the most important factor in finding pants that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
  //   rightH2: 'Easy Does it',
  //   rightP: 'He\'s got places to go. Like, right now! That\'s why our pants are designed to be extra easy for him to pull on and off in a jiffy.',
  // },
  {
    name: 'swim',
    img: 'boys/boys-swim.png',
    leftH2: 'Swim Trunks',
    leftP: 'His waist measurement is the most important factor in choosing trunks that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Rash Guards',
    rightP: 'His chest measurement is the magic number you need to get the right size rash guard. ',
    rightH2Bottom: '',
    rightPBottom: ''
  }, {
    name: 'sweater + outerwear',
    img: 'boys/boys-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine his size is the circumference of his chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories,socks,hats',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
}, /*-----------------------------------------------------------------------------------------*/

{
  dept: 'baby girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  measure: {
    img: 'baby-girl/baby-girl-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of her chest and around her shoulder blades. Her arms should be relaxed naturally against her sides. (Good luck! You\'re going to have to be superhero-fast!)',
    hips: 'Have your child stand with her legs together, and wrap the measuring tape in a loop around the widest part of her hips. (If she\'s not standing yet, have her lie down. You might need a partner to keep her distracted—and still—for a minute!)',
    waist: 'Tie a string around your child\'s middle and help her bend from side to side. The string will settle around her natural waist, above her hipbones. Wrap a measuring tape around this part of her waist.'
  },
  cat: [{
    name: 'rompers',
    img: 'baby-girl/baby-girl-rompers.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her height is the most important factor in finding a romper that fits',
    rightH2: 'Diaper Duty',
    rightP: 'We design our rompers to fit over diapers, but you don\'t have to include them when you measure. For her correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'dresses, tops, bottoms, swim, sweater + outerwear, pajamas',
    img: 'baby-girl/baby-girl-dresses.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a dress that fits.',
    rightH2: 'Matching Bloomers',
    rightP: 'Some of our dresses come with matching bloomers up to size 24m. Check her waist measurement to see how the bloomers will fit.'
  },
  // {
  //   name: 'tops',
  //   img: 'baby-girl/baby-girl-tops.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'Her chest measurement is the most important factor in finding a top or bodysuit that fits.',
  //   rightH2: 'Always in Season',
  //   rightP: 'Thanks to our easy-to-layer bodysuits, she can wear that adorable tank or short sleeve top all year long. (Whew, right?!)',
  // },
  // {
  //   name: 'bottoms',
  //   img: 'baby-girl/baby-girl-bottoms.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'Her waist measurement is the most important factor in finding pants that fit comfortably— but her hip measurement can make the difference if you\'re stuck between sizes.',
  //   rightH2: 'Diaper Duty',
  //   rightP: 'We design our baby bottoms to fit over diapers, but you don\'t have to include them when you measure. For her correct hip measurement, be sure to leave the diaper out of the equation!',
  // },
  // {
  //   name: 'swim',
  //   img: 'baby-girl/baby-girl-swim.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'Chest and hip <span class="desktop">(sans diaper)</span> measurements are what you\'re looking for to find the right size. When in doubt, go with her chest measurement.',
  //   rightH2: 'Two-Piece Tip',
  //   rightP: 'Experienced parents tell us they love two-piece suits for quick and easy diaper changes at the beach.',
  //   rightH2Bottom: '',
  //   rightPBottom: '',
  // },
  // {
  //   name: 'sweater + outerwear',
  //   img: 'baby-girl/baby-girl-sweaters.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'The only measurement you need to determine her size is the circumference of her chest.',
  //   rightH2: 'Layer Up!',
  //   rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater.',
  // },
  // {
  //   name: 'pajamas',
  //   img: '',
  //   leftH2: '',
  //   leftP: '',
  //   rightH2: '',
  //   rightP: '',
  // },
  {
    name: 'shoes + accessories,socks,hats',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'swim diapers',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
}, /*-----------------------------------------------------------------------------------------*/

{
  dept: 'baby boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  measure: {
    img: 'baby-boy/baby-boy-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of his chest and around his shoulder blades. His arms should be relaxed naturally against his sides. (Good luck! You\'re going to have to be superhero-fast!)',
    hips: 'Have your child stand with his legs together, and wrap the measuring tape in a loop around the widest part of his hips. (If he\'s not standing yet, have him lie down. You might need a partner to keep him distracted—and still—for a minute!)',
    waist: 'Tie a string around your child\'s middle and help him bend from side to side. The string will settle around his natural waist, above his hipbones. Wrap a measuring tape around this part of his waist.'
  },
  cat: [{
    name: 'rompers',
    img: 'baby-boy/baby-boy-rompers.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His height is the most important factor in finding a romper that fits',
    rightH2: 'Diaper Duty',
    rightP: 'We design our rompers to fit over diapers, but you don\'t have to include them when you measure. For his correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'tees + shirts, bottoms, swim, sweater + outerwear, pajamas',
    img: 'baby-boy/baby-boy-tops.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His chest measurement is the most important factor in finding a top or bodysuit that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer bodysuits, he can wear that favorite short sleeve shirt all year long. (Whew, right?!)'
  },
  // {
  //   name: 'bottoms',
  //   img: 'baby-boy/baby-boy-bottoms.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'His waist measurement is the most important factor in finding bottoms that fit comfortably— but his hip measurement can make the difference if you\'re stuck between sizes.',
  //   rightH2: 'Diaper Duty',
  //   rightP: 'We design our baby bottoms to fit over diapers, but you don\'t have to include them when you measure. For his correct hip measurement, be sure to leave the diaper out of the equation!',
  // },
  // {
  //   name: 'swim',
  //   img: 'baby-boy/baby-boy-swim.png',
  //   leftH2: 'Swim Trunks',
  //   leftP: 'His waist measurement is the most important factor in choosing trunks that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
  //   rightH2: 'Rash Guard Suits',
  //   rightP: 'His height is the most important measurement to get the right fit. ',
  //   rightH2Bottom: 'Rash Guards',
  //   rightPBottom: 'His chest measurement is the magic number you need to get the right size rash guard. ',
  // },
  // {
  //   name: 'sweater + outerwear',
  //   img: 'baby-boy/baby-boy-sweaters.png',
  //   leftH2: 'Stuck Between Sizes?',
  //   leftP: 'The only measurement you need to determine his size is the circumference of his chest.',
  //   rightH2: 'Layer Up!',
  //   rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater.',
  // },
  // {
  //   name: 'pajamas',
  //   img: '',
  //   leftH2: '',
  //   leftP: '',
  //   rightH2: '',
  //   rightP: '',
  // },
  {
    name: 'shoes + accessories,socks,hats',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'swim diapers',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
}, /*-----------------------------------------------------------------------------------------*/

{
  dept: 'newborn',
  cat: [{
    name: 'all categories, Booties, Bibs, hats',
    img: 'newborn/newborn-all.png',
    leftH2: 'Newborn Needs',
    leftP: 'Brand new babies are a bit messy! Buy a few extra outfits so you don\'t have to do laundry every day.',
    rightH2: 'Romper Rules',
    rightP: 'Rompers are easy gifts—they keep babies cozy all the way to their tiny toes, plus they\'re easy to change in a snap!'
  }
  // {
  //   name: 'Booties, Bibs, hats',
  //   img: 'newborn/newborn-all.png',
  //   leftH2: 'Newborn Needs',
  //   leftP: 'Brand new babies are a bit messy! Buy a few extra outfits so you don\'t have to do laundry every day.',
  //   rightH2: 'Romper Rules',
  //   rightP: 'Rompers are easy gifts—they keep babies cozy all the way to their tiny toes, plus they\'re easy to change in a snap!',
  // },
  // {
  //   name: 'hats',
  //   img: 'newborn/newborn-all.png',
  //   leftH2: 'Newborn Needs',
  //   leftP: 'Brand new babies are a bit messy! Buy a few extra outfits so you don\'t have to do laundry every day.',
  //   rightH2: 'Romper Rules',
  //   rightP: 'Rompers are easy gifts—they keep babies cozy all the way to their tiny toes, plus they\'re easy to change in a snap!',
  // },
  ]
}, /*-----------------------------------------------------------------------------------------*/
{
  dept: 'adult unisex',
  cat: [{
    name: 'tops',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
}, /*-----------------------------------------------------------------------------------------*/
{
  dept: 'women',
  cat: [{
    name: 'swim,pajamas,dresses,tops',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }
  // {
  //   name: 'pajamas',
  //   img: '',
  //   leftH2: '',
  //   leftP: '',
  //   rightH2: '',
  //   rightP: '',
  // },
  // {
  //   name: 'dresses',
  //   img: '',
  //   leftH2: '',
  //   leftP: '',
  //   rightH2: '',
  //   rightP: '',
  // },
  // {
  //   name: 'tops',
  //   img: '',
  //   leftH2: '',
  //   leftP: '',
  //   rightH2: '',
  //   rightP: '',
  // }
  ]
}, /*-----------------------------------------------------------------------------------------*/
{
  dept: 'men',
  cat: [{
    name: 'swim',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
}];

},{}],3:[function(require,module,exports){
"use strict";

// const shoeBrands = require('./shoe-brands.js');
var sizeChartArr = require('./measuring-tips.js');
// const deptCat = require('./set-dept-cat.js');
var changeCats = require('./change-cat.js');
// const changeBackground = require('./change-background-image.js');
// const adjustMeasureCSS = require('./measuring-tips-css.js');
// const adjustTipsCSS = require('./tips-css.js');
// const addDataAttr = require('./add-data-dept.js');
// const changeRow = require('./change-first-row-table.js');
var selectDeptCat = require('./set-dept-cat-by-url.js');
// const changeCopy = require('./change-measuring-tips-copy.js');
// const changeOrder = require('./change-order.js');
// const brandChange = require('./change-shoe-brand.js');
// const makeBrands = require('./make-shoe-brands.js');
// const makeTd = require('./make-td.js');
// const outputTable = require('./output-table.js');
// const makeTableHeader = require('./make-table-header.js');
// const makeTable = require('./make-table.js');

module.exports = function () {
  //? onload get select Dept Cat based on url params
  var urlDept = selectDeptCat('selectedDept', '.size-chart-container select.department');

  //? this changes the dept although if there are no url params then it will return undefined so we add the default value of girl
  // console.log('onload.js')
  // console.log(urlDept);
  if (urlDept == undefined) {
    urlDept = 'girl';
  }
  //?  set the dept dropdown
  $('.size-chart-container select.department').val(urlDept);

  //? onload change the cats dropdown if dept has changed
  //? make the category dropdown
  changeCats(sizeChartArr);

  //? onload get select Cat based on url params
  var urlCat = selectDeptCat('selectedCat', '.size-chart-container select.category');

  //? this changes the cat although if there are no url params then it will return undefined so we add the default value of tops,dresses,bottoms
  // console.log('onload.js')
  // console.log(urlCat);
  if (urlCat == undefined) {
    urlCat = "tops,dresses,bottoms";
  }

  //? this will set the correct cats to match the sheets based on the receieved url params
  //? for example: selectedDept=baby girl&selectedCat=swim
  if (urlDept == "girl") {
    switch (urlCat) {
      case "dresses":
      case "tops":
      case "bottoms":
        $('.size-chart-container select.category').val("tops,dresses,bottoms");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "boy") {
    switch (urlCat) {
      case "tees + shirts":
      case "bottoms":
        $('.size-chart-container select.category').val("tees + shirts,bottoms");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "baby girl") {
    switch (urlCat) {
      case "dresses":
      case "tops":
      case "bottoms":
      case "swim":
      case "sweater + outerwear":
      case "pajamas":
        $('.size-chart-container select.category').val("dresses, tops, bottoms, swim, sweater + outerwear, pajamas");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "baby boy") {
    switch (urlCat) {
      case "tees + shirts":
      case "bottoms":
      case "swim":
      case "sweater + outerwear":
      case "pajamas":
        $('.size-chart-container select.category').val("tees + shirts, bottoms, swim, sweater + outerwear, pajamas");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "newborn") {
    switch (urlCat) {
      case "all categories":
        $('.size-chart-container select.category').val("all categories, Booties, Bibs, hats");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "women") {
    switch (urlCat) {
      case "swim":
      case "pajamas":
      case "dresses":
      case "tops":
        $('.size-chart-container select.category').val("swim,pajamas,dresses,tops");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else {
    $('.size-chart-container select.category').val(urlCat);
  }

  //onload change the background image
  // changeBackground(sizeChartArr);

  //onload change the copy
  // changeCopy(sizeChartArr);

  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  // adjustMeasureCSS();

  //if baby boy or baby girl adjust css on .tips
  // adjustTipsCSS();

  //add class to .tips
  // addDataAttr();

  //? change <th> of the .size-chart-table table
  // changeRow();

  //? make the table
  // makeTable();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  // makeBrands();

  //re-order the tables if shoes + accessories
  // changeOrder();
};

},{"./change-cat.js":1,"./measuring-tips.js":2,"./set-dept-cat-by-url.js":4}],4:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
module.exports = function (urlpara, elem1) {
  //? function to select the department & category based  url params

  //? onload check if parameters in url for department and category
  var urlParam = window.location.href;

  //? check if parameters if there are then split them into an array
  if (urlParam.indexOf('?') !== -1) {
    var paramArr = urlParam.split('?');

    //? split the parameters into an array
    paramArr = paramArr[1].split('&');

    //? loop through the array to find selectedDept & selectedCat then change the selected values from the dropdown
    var _iterator = _createForOfIteratorHelper(paramArr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var val = _step.value;
        var param = val.split('=');
        //? this finds the selectedDept and selectedCat url parameter
        console.log(param[0], param[1], urlpara);
        if (param[0] == urlpara) {
          var deptCat = param[1];

          //? if 20% in variable change to ' '
          deptCat = String(deptCat.replace(/%20/g, ' '));
          return deptCat;

          //?change the value selected from the dropdown
          // $(elem1).val(deptCat);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};

},{}]},{},[3]);
