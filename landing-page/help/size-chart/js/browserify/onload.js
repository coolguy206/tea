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

//? function to change the 1st row of the size chart table
module.exports = function () {
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

var brandChange = require('./change-shoe-brand.js');
var sizeChartArr = require('./measuring-tips.js');
var shoeBrands = require('./shoe-brands.js');
module.exports = function () {
  //? function to make the brand drop down for shoes or sweaters

  //? remove .brands
  $('.brands, .brands-dropdown').remove();
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

    //? on .brand change
    brandChange();
  }
};

},{"./change-shoe-brand.js":3,"./measuring-tips.js":6,"./shoe-brands.js":8}],5:[function(require,module,exports){
"use strict";

module.exports = function (urlDept, urlCat) {
  //? function to match the category to the sheets category

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
};

},{}],6:[function(require,module,exports){
"use strict";

module.exports = [{
  dept: 'girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  cat: [{
    name: 'tops,dresses,bottoms'
  }, {
    name: 'swim'
  }, {
    name: 'sweater + outerwear'
  }, {
    name: 'pajamas'
  }, {
    name: 'shoes + accessories,socks,headbands,hats'
  }]
}, {
  dept: 'boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  cat: [{
    name: 'tees + shirts,bottoms'
  }, {
    name: 'swim'
  }, {
    name: 'sweater + outerwear'
  }, {
    name: 'pajamas'
  }, {
    name: 'shoes + accessories,socks,hats'
  }]
}, {
  dept: 'baby girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  cat: [{
    name: 'rompers'
  }, {
    name: 'dresses, tops, bottoms, swim, sweater + outerwear, pajamas'
  }, {
    name: 'shoes + accessories,socks,hats'
  }, {
    name: 'swim diapers'
  }]
}, {
  dept: 'baby boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  cat: [{
    name: 'rompers'
  }, {
    name: 'tees + shirts, bottoms, swim, sweater + outerwear, pajamas'
  }, {
    name: 'shoes + accessories,socks,hats'
  }, {
    name: 'swim diapers'
  }]
}, {
  dept: 'newborn',
  cat: [{
    name: 'all categories, Booties, Bibs, hats'
  }]
}, {
  dept: 'adult unisex',
  cat: [{
    name: 'tops'
  }, {
    name: 'pajamas'
  }]
}, {
  dept: 'women',
  cat: [{
    name: 'swim,pajamas,dresses,tops'
  }]
}, {
  dept: 'men',
  cat: [{
    name: 'swim'
  }]
}];

},{}],7:[function(require,module,exports){
"use strict";

var sizeChartArr = require('./measuring-tips.js');
var changeCats = require('./change-cat.js');
var changeRow = require('./change-first-row-table.js');
var makeBrands = require('./make-shoe-brands.js');
var matchCats = require('./match-cats.js');
var showMeasuringTips = require('./show-measuring-tips.js');
module.exports = function () {
  var urlDept = 'girl';

  //?  set the dept dropdown
  $('.size-chart-container select.department').val(urlDept);

  //? onload change the cats dropdown if dept has changed
  //? make the category dropdown
  changeCats(sizeChartArr);
  var urlCat = "tops,dresses,bottoms";

  //? this will set the correct cats to match the sheets based on the receieved url params
  //? for example: selectedDept=baby girl&selectedCat=swim
  matchCats(urlDept, urlCat);

  //? add the table header 
  changeRow();

  //? if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();

  //? show measuring tips
  showMeasuringTips(urlDept);
};

},{"./change-cat.js":1,"./change-first-row-table.js":2,"./make-shoe-brands.js":4,"./match-cats.js":5,"./measuring-tips.js":6,"./show-measuring-tips.js":9}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

module.exports = function (urlDept) {
  //? hide measure tips if any of these depts
  // if (urlDept == `newborn` || urlDept == `adult unisex` || urlDept == `women` || urlDept == `men`) {
  //     $('.measure-content').removeClass('active');
  //     return;
  // }

  //? remove class active from all
  $('.measure-content .category-headers a, .measure-content .measure-container, .measure-content').removeClass('active');

  //? set the measuring tips dept
  var headers = $('.measure-content .category-headers a');
  headers.map(function (i, val) {
    // console.log($(val).text());
    if ($(val).text() == urlDept) {
      $(val).addClass('active');
    }
  });

  //? add class active to measure-container with matching header
  var m = $('.measure-content .measure-container');
  for (var i = 0; i < m.length; i++) {
    var theClass = $(m[i]).attr('class').split('measure-container')[1].replace(/ /, '');
    console.log($(m[i]));
    console.log(theClass);
    if (theClass == urlDept) {
      $(m[i]).addClass('active');
      break;
    }
  }

  //? add class active to show the measuring tips entire container
  $('.measure-content').addClass('active');
};

},{}]},{},[7]);
