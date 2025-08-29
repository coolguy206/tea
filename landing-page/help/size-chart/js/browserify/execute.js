(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// var deptCat = require('./set-dept-cat.js');
//? function to change the 1st row of the size chart table
module.exports = function () {
  // var d = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  // var c = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

  var d = $('.size-chart-container select.department').val();
  var c = $('.size-chart-container select.category').val();
  var str;
  if (d == 'newborn') {
    str = d + ' size chart';
  } else if (c == 'sweater + outerwear') {
    str = d + ' outerwear size chart (sweaters + jackets)';
  } else {
    str = d + ' ' + c + ' size chart';
  }
  $('.size-chart-table table .size-chart-header th').html(str);
};

},{}],2:[function(require,module,exports){
"use strict";

module.exports = function () {
  //? function when click shoe brand go to external url

  //? collapse ul.brand on .brands click
  $('.brands, table, .measure-tips').click(function () {
    $('ul.brand').removeAttr('style');
  });

  //?expand or collapse
  //desktop dropdown to expand and collapse
  $('ul.brand').click(function () {
    //?check if has style attr remove it
    if ($(this).attr('style') !== undefined) {
      $(this).removeAttr('style');
    } else {
      //? if doesn't have style attr add css to expand
      $(this).css('height', 'auto');
    }
  });

  //? on .shoes change
  $('.size-chart-table').find('ul.brand li').click(function () {
    var txt = $(this).text();
    txt = txt.toLowerCase();
    var brand = $(this).attr('data-url');
    if (txt !== 'please select a brand') {
      window.open(brand, '_blank');
    }
  });
};

},{}],3:[function(require,module,exports){
"use strict";

var changeRow = require('./change-first-row-table.js');
// const changeOrder = require('./change-order.js');
var makeBrands = require('./make-shoe-brands.js');
var makeTable = require('./make-table.js');
module.exports = function () {
  //? change <th> of the .size-chart-table table
  changeRow();

  //? make the table
  makeTable();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();

  //re-order the tables if shoes + accessories
  // changeOrder();
};

},{"./change-first-row-table.js":1,"./make-shoe-brands.js":4,"./make-table.js":6}],4:[function(require,module,exports){
"use strict";

// var deptCat = require('./set-dept-cat.js');
var brandChange = require('./change-shoe-brand.js');
var sizeChartArr = require('./measuring-tips.js');
var shoeBrands = require('./shoe-brands.js');
module.exports = function () {
  //? function to make the brand drop down for shoes or sweaters

  //? remove .brands
  $('.brands, .brands-dropdown').remove();

  // var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  // var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  var dept = $('.size-chart-container select.department').val();
  var cat = $('.size-chart-container select.category').val();

  //? only execute if sweaters or shoes
  if (cat == 'sweater + outerwear' || cat.indexOf('shoes + accessories') !== -1) {
    //?make the element to add to the page
    var elem1 = '<div class="brands"></div>';
    var elem2 = '<div class="brands-dropdown"></div>';
    var h2;
    var text = '<p>Please select a brand from the menu below to view the size chart. Size chart will open in a new window.</p>';
    var select = $('<select class="brand" onchange="window.open(this.value)"><option>Please select a brand</option></select>');

    //? if shoes + accessories
    if (cat.indexOf('shoes + accessories') !== -1) {
      h2 = '<h2>' + dept + ' shoes size chart</h2>';

      //? add the <option>
      //? loop through the .sizeChartArr
      $.each(sizeChartArr, function (i, val) {
        //? find the matched dept
        if (dept == val.dept) {
          //? loop through dept shoes
          $.each(val.shoes, function (j, shoe) {
            //? loop through the shoeBrands
            $.each(shoeBrands, function (k, brand) {
              //? if match output
              if (shoe == brand.brand) {
                var option = '<option value="' + brand.url + '">' + shoe + '</option>';
                $(select).append(option);
              }
            });
          });
        }
      });
    } else if (cat == 'sweater + outerwear') {
      //? else if sweaters + outerwear
      h2 = '<h2>' + dept + ' outerwear size chart (other brands)</h2>';
      $(select).append('<option value="https://www.patagonia.com/size-boys-girls.html">patagonia</option>');
    }

    // console.log(h2, text, select);

    //?append the elements into .brands
    var brandsContainer = $(elem1).append(h2, text);
    var brandsDropdown = $(elem2).append(select);

    //? add to page
    $('.size-chart-table').append(brandsContainer);
    $('.size-chart-table').append(brandsDropdown);

    //? because of onload append shoe size chart to .size-chart-table
    setTimeout(function () {
      $('.size-chart-table').append($('.brands'));
      $('.size-chart-table').append($('.brands-dropdown'));
    }, 1500);

    //? on .brand change
    brandChange();
  }
};

},{"./change-shoe-brand.js":2,"./measuring-tips.js":8,"./shoe-brands.js":10}],5:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');
module.exports = function (i, val, dept, subcat) {
  //? function to make table header because of shoes + accessories have multiple tables

  //? add new table
  $('.size-chart-table').append('<table data-num="' + i + '"><tr class="size-chart-header"><th>' + dept + ' ' + subcat + ' size chart</th></tr></table>');
  // console.log('rows: ', val);

  rows = val.merges[0].endColumnIndex - 1;

  //? if newborn change the colspan to 7 if all categories otherwise use the endColumnIndex
  if (subcat == "all categories" && dept == "newborn") {
    colspan = 7;
  } else {
    colspan = val.merges[0].endColumnIndex;
  }
  // console.log(colspan);

  //? add colspan to .size-chart-header
  $('.size-chart-table table[data-num="' + i + '"] th').attr('colspan', colspan);
  return rows;
};

},{"./make-td.js":7}],6:[function(require,module,exports){
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
module.exports = function () {
  //? function to create the tables
  //? show .the-table
  $('.size-chart-table .the-table').show();

  //? remove all <tr> except the 1st one
  var trs = $('.size-chart-table table tr');
  $.each(trs, function (i, val) {
    if ($(val).attr('class') !== 'size-chart-header') {
      $(val).remove();
    }
  });

  //? remove all the tables except the .the-table
  var tables = $('.size-chart-table table');
  $.each(tables, function (i, val) {
    if ($(val).attr('class') !== 'the-table') {
      $(val).remove();
    }
  });

  //? the selected values
  var dept = $('.size-chart-container select.department').val();
  var cat = $('.size-chart-container select.category').val();
  // console.log(dept,cat);

  var sheet = sheets;
  console.log('from make-table.js');
  console.log(sheet);

  //? loop through sheet and find the matched table
  $.each(sheet, function (i, val) {
    //? var to hold the sheet dept and cat
    var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
    //? split the sheetVal because it is in the format of dept:category
    var sheetArr = sheetVal.split(':');
    //? the dept var from the sheets
    var sheetDept = sheetArr[0];
    //? the cat var from the sheets
    var sheetCatArr = sheetArr[1];
    // console.log(sheetCatArr);

    //? if the sheet dept is baby change to array of baby girl and baby boy
    if (sheetDept == 'baby') {
      sheetDept = ['baby girl', 'baby boy'];
    }

    //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change to match sheet because it does not match the measuring-tips.js array of objects
    if (dept == "baby girl") {
      if (cat == "dresses, tops, bottoms, swim, sweater + outerwear, pajamas") {
        cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
      }
    } else if (dept == "baby boy") {
      if (cat == "tees + shirts, bottoms, swim, sweater + outerwear, pajamas") {
        cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
      }
    }

    //? if newborn show all the categories and tables
    if (dept == "newborn") {
      //? hide the top table
      $('.size-chart-table .the-table').hide();

      //? split the selected categories into an array to loop through and change the string to match the sheetCatArr
      var nbCatArr = cat.split(',');
      $.each(nbCatArr, function (j, str) {
        if (str == " Booties" || str == " Bibs") {
          nbCatArr[j] = "all categories, accessories";
        } else if (str == " hats") {
          nbCatArr[j] = "all categories, hats";
        }
      });

      //? remove duplicates
      var uniqueNbCatArr = _toConsumableArray(new Set(nbCatArr));
      // console.log(uniqueNbCatArr);

      //? find the matching sheetDepts for newborn
      if (sheetDept == dept) {
        //? loop through uniqueNbCatArr and find matching data and output
        $.each(uniqueNbCatArr, function (j, nb) {
          if (nb == sheetCatArr) {
            var rows;

            //? change the headers for the newborn tables
            if (nb == "all categories, accessories") {
              nb = "Booties & Bibs";
            } else if (nb == "all categories, hats") {
              nb = "hats";
            }

            //? THIS MAKES THE MULTIPLE TABLES and table headers
            rows = makeTableHeader(i, val, dept, nb);

            //? output the tables and contents
            outputTable(i, val, rows);

            //? stop the function
            return false;
          }
        });
      }
    } else if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
      //? all other departments NOT newborn

      //? if category is shoes + accessories
      if (cat.indexOf('shoes + accessories') !== -1) {
        //? hide the top table
        $('.size-chart-table .the-table').hide();

        //? split the selected categories into an array
        var catArr = cat.split(',');

        //? loop through the array and check if any of the values match
        $.each(catArr, function (k, c) {
          // console.log(k,c);

          //? this var holds the actual category from the sheets because the format is shoes + accessories,brand
          var shoesAccess = sheetCatArr.split(',')[1];

          //? skip shoe + accessories but match the rest eg: socks & hats
          if (c !== 'shoes + accessories' && shoesAccess == c) {
            // console.log('match found');
            // console.log(shoesAccess, c);

            var rows;
            // var colspan;

            // rows = val.merges[0].endColumnIndex - 1;
            // colspan = val.merges[0].endColumnIndex;

            //? add colspan to .size-chart-header
            $('.size-chart-header th').attr('colspan', colspan);

            //? THIS MAKES THE MULTIPLE TABLES and table headers
            rows = makeTableHeader(i, val, dept, c);

            //? output the table contents
            outputTable(i, val, rows);

            //? stop the function
            return false;
          }
        });
      } else if (cat.indexOf(sheetCatArr) !== -1) {
        //? all other categories that are not shoes + accessories and only have 1 table
        // console.log(i,val);
        var rows;
        var colspan;

        // console.log(`only activate`);

        rows = val.merges[0].endColumnIndex - 1;
        colspan = val.merges[0].endColumnIndex;

        //? add colspan to .size-chart-header
        $('.size-chart-header th').attr('colspan', colspan);

        //? output the table contents
        outputTable(i, val, rows);

        //? stop the function
        return false;
      }
    }
  });
};

},{"./make-table-header.js":5,"./output-table.js":9}],7:[function(require,module,exports){
"use strict";

module.exports = function (k, row, rows, tableElem) {
  //? function to make the <td>

  // console.log(tableElem);
  // console.log(k, row, rows);

  //? add the data <td>
  $.each(row.values, function (l, td) {
    //? loop only to the rows variable
    if (l <= rows) {
      var content;
      var fraction;
      var theFraction;
      // console.log(l, rows, row);

      if (td.formattedValue !== undefined) {
        //? formatting to match design

        content = td.formattedValue;
        // console.log(content);
        content = content.toLowerCase();
        content = content.replace(' - ', '&ndash;');
        content = content.replace('months', 'mos');
        content = content.replace('years', 'yrs');
        if (content.indexOf('inches') !== -1 || content.indexOf('pounds') !== -1) {
          content = content.split('\n');
          // console.log(content);
          content = content[0] + '<span>' + content[1] + '</span>';
        }
        if (content == 'shoe size') {
          content = '<span class="shoe-size">' + content + '</span>';
        }
        fraction = td.formattedValue;
        // console.log('the fraction: ',fraction);

        //? for shoes + accessories if not L/XL
        if (fraction !== 'L/XL' && fraction !== '2T/2' && fraction !== '3T/3' && fraction !== '4T/4') {
          //? if cell has two fractions example 58 1/2 - 61 1/2
          if (fraction.indexOf('/') !== -1 && fraction.indexOf('-') !== -1) {
            fraction = fraction.split('-');
            var twoFrac = [];
            $.each(fraction, function (m, frac) {
              var fracArray = frac.split(' ');
              $.each(fracArray, function (n, num) {
                if (num !== '') {
                  twoFrac.push(num);
                }
              });
            });

            // console.log(twoFrac);

            //? output
            //? example 61 1/2 - 64
            if (twoFrac[1].indexOf('/') !== -1 && twoFrac[3] == undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + '</td>');
            }

            //? example 61 - 61 1/2
            else if (twoFrac[1].indexOf('/') == -1 && twoFrac[2].indexOf('/') !== -1) {
              var twoFracA = twoFrac[2].split('/');
              twoFrac[2] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' &ndash; ' + twoFrac[1] + ' ' + twoFrac[2] + '</td>');
            }

            //? example 58 1/2 - 61 1/2
            else if (twoFrac[1].indexOf('/') !== -1 && twoFrac[1] !== undefined && twoFrac[3].indexOf('/') !== -1 && twoFrac[3] !== undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              var twoFracB = twoFrac[3].split('/');
              twoFrac[3] = '<sup class="frac">' + twoFracB[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracB[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + ' ' + twoFrac[3] + '</td>');
            }
          } else {
            //? only one fraction

            fraction = fraction.split(' ');
            $.each(fraction, function (m, frac) {
              // console.log(m, frac);
              if (frac.indexOf('/') !== -1) {
                theFraction = frac;
                // console.log('theFraction: ',theFraction);
              }
            });

            //? output
            if (theFraction !== undefined && theFraction.indexOf('/') !== -1) {
              theFraction = theFraction.split('/');
              var htmlFraction = '<sup class="frac">' + theFraction[0] + '</sup>&frasl;<span class="frac denominator">' + theFraction[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction[0] + ' ' + htmlFraction + '</td>');
            } else {
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + content + '</td>');
            }
          }
        } else if (fraction == 'L/XL' || fraction == '2T/2' || fraction == '3T/3' || fraction == '4T/4') {
          //? output sizes 'L/XL','2T/2','3T/3','4T/4'

          // console.log('yo buddy: ', fraction);
          $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction + '</td>');
        }
      }
    }
  });
};

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');
module.exports = function (i, val, rows) {
  //function to output the table contents

  //output the table
  $.each(val.data[0].rowData, function (k, row) {
    //add the row <tr>
    if (k > 2) {
      var tableLength = $('.size-chart-table table').length;
      // console.log(tableLength);

      //check if the number of rows is even or odd then add class
      var tableNum = val.data[0].rowData.length - 4;

      //if only one table (not shoes + accessories)
      if (tableLength == 1) {
        $('.size-chart-container .the-table').append('<tr data-num="' + k + '"></tr>');

        //add the data <td>
        makeTd(k, row, rows, '.size-chart-container .the-table');
      }
      //if multiple tables (shoes + accessories)
      else if (tableLength > 1) {
        // console.log(row.values[0].formattedValue);

        //only make a row if the 1st td of the row has data
        if (row.values[0].formattedValue !== undefined) {
          $('.size-chart-table table[data-num="' + i + '"]').append('<tr data-num="' + k + '"></tr>');

          // console.log('more then one table\n this is the index\n' + i);

          //add the data <td>
          makeTd(k, row, rows, '.size-chart-table table[data-num="' + i + '"]');
        }
      }
    }
  });
};

},{"./make-td.js":7}],10:[function(require,module,exports){
"use strict";

module.exports = [{
  brand: 'yosi samra',
  url: 'https://www.yosisamra.com/pages/size-chart'
}, {
  brand: 'vans',
  url: '/static/vans-shoe-size-guide'
}, {
  brand: 'elephantito',
  url: 'https://www.elephantito.com/pages/sizing'
}, {
  brand: 'old soles',
  url: 'https://www.oldsoles.com.au/features/kids/'
}, {
  brand: 'superga',
  url: 'https://www.superga-usa.com/content.jsp?pageName=SizeGuide'
}, {
  brand: 'livie & luca',
  url: 'https://www.livieandluca.com/pages/size-chart'
}, {
  brand: 'native',
  url: 'https://www.nativeshoes.com/'
}, {
  brand: 'saltwater sandal',
  url: 'https://saltwater-sandals.com/sizing-calculator/'
}, {
  brand: 'umi',
  url: 'http://www.umishoes.com/shop/includes/sizeChart.html'
}, {
  brand: 'onitsuka tiger',
  url: 'http://www.onitsukatiger.com/us/en-us/size-guide'
}, {
  brand: 'asics',
  url: 'http://www.asics.com/us/en-us/shoe-size-guide'
}, {
  brand: 'asics tiger',
  url: 'http://www.asicstiger.com/us/en-us/size-guide'
}, {
  brand: 'toke',
  url: 'https://www.tokeshoes.com/index.php/conversion/toke-conversion-chart'
}, {
  brand: 'havaianas',
  url: '/static/havaianas-shoe-size-guide.html'
}, {
  brand: 'cienta',
  url: 'https://cientausa.com/'
}];

},{}]},{},[3]);
