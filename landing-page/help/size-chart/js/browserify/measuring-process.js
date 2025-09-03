(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function () {
  //? add class to .tips

  var onloadDeptVal = $('.size-chart-container select.department').val();
  $('.size-chart-container').find($('.tips')).attr('data-dept', onloadDeptVal);
};

},{}],2:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');
module.exports = function (sizeChartArr) {
  //function to change the background image
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  $.each(sizeChartArr, function (i, val) {
    //get the dept that match
    if (deptVal == val.dept) {
      $.each(val.cat, function (j, arr) {
        //get the cat that match
        if (catVal == arr.name) {
          //add the background img to the page

          //desktop
          // if ($(window).width() > 737) {
          //var img = 'url(../images/'+arr.img+')';
          var img = 'url(https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/size-chart/2020/v0/' + arr.img + ')';
          $('.size-chart-container .measure-tips').css('background-image', img);
          // }
          //mobile
          // else if ($(window).width() < 737) {
          //   //add the loading
          //   $('.measure-tips').prepend('<span class="loading" style="text-transform:uppercase; text-align:center; font-size:15px; font-family:brown-pro-bold !important">loading...</span>');
          //   var imgSrc = arr.img;
          //   imgSrc = imgSrc.split('.');
          //   imgSrc = imgSrc[0] + '-m.' + imgSrc[1];
          //   //console.log(imgSrc);
          //
          //   var img = 'url(https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc + ')';
          //   $('.size-chart-container .measure-tips').css('background-image', img);
          //   //remove the loading
          //   $('.measure-tips span.loading').remove();
          // }
        }
      });
    }
  });
};

},{"./set-dept-cat.js":7}],3:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');
module.exports = function (sizeChartArr) {
  //function to change the copy in .measure-tips

  //get the value of the selected department and category
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  $.each(sizeChartArr, function (i, val) {
    //get the dept that match
    if (deptVal == val.dept) {
      //if swim
      // if (catVal == 'swim') {
      //   //check if swim already on page
      //   var isSwim = $('.measure-tips .swim');
      //   //desktop
      //   // if ($(window).width() > 737) {
      //   if (isSwim.length == 0) {
      //     //find the .measure-tips div and prepend <span class="top"> & <span class="bottom">
      //     $('.measure-tips div').prepend('<span class="top"></span><span class="bottom"><h2></h2><p></p></span>');
      //
      //   }
      //
      //   //if baby boy swim
      //   if (deptVal == 'baby boy') {
      //     $('.measure-tips div').addClass('baby-boy-swim');
      //     $('.measure-tips div)').addClass('baby-boy-swim');
      //   }
      //   // }
      //
      //   //add the content
      //   $.each(val.cat, function(j, arr) {
      //
      //     //get the cat that match
      //     if (catVal == arr.name) {
      //       //change the copy
      //       // console.log(arr);
      //       // var divs = $('.size-chart-container .measure-tips div');
      //       // console.log(divs);
      //
      //       $('.size-chart-container .measure-tips div p').html(arr.rightP);;

      // $.each(divs, function(k, obj) {
      //   if (k == 0) {
      //     //change the h2
      //     // $(obj).find('h2').html(arr.leftH2);
      //     //change the p
      //     // $(obj).find('p').html(arr.leftP);
      //   } else if (k == 1) {
      //     //desktop
      //     if ($(window).width() > 737) {
      //
      //       if (arr.rightH2Bottom !== '') {
      //         //add .swim to .measure-tips div:first-of-type
      //         $('.measure-tips div').addClass('swim');
      //         //add .two-rows to .measure-tips div:nth-of-type(2)
      //         $('.measure-tips div').addClass('two-rows');
      //       } else {
      //         $('.measure-tips div').removeClass('two-rows');
      //       }

      //change the h2 .top
      // $(obj).find('.top').find('h2').html(arr.rightH2);
      // //change the p .top
      // $(obj).find('.top').find('p').html(arr.rightP);
      // //change the h2 .bottom
      // $(obj).find('.bottom').find('h2').html(arr.rightH2Bottom);
      // //change the p .bottom
      // $(obj).find('.bottom').find('p').html(arr.rightPBottom);

      // }

      //mobile
      //     if ($(window).width() < 737) {
      //       //change the h2
      //       $(obj).find('h2').html(arr.leftH2);
      //       //change the p
      //       $(obj).find('p').html(arr.leftP);
      //     }
      //   }
      // });
      //     }
      //   });
      //
      // } else {

      $.each(val.cat, function (j, arr) {
        //move .top contents out
        $('.measure-tips div:nth-of-type(2)').append($('.measure-tips .top h2, .measure-tips .top p'));
        //remove .top & .bottom because of swim
        $('.measure-tips div:nth-of-type(2) .top, .measure-tips div:nth-of-type(2) .bottom').remove();
        //remove .swim & .baby-boy-swim from .measure-tips div:first-of-type
        $('.measure-tips div:first-of-type').removeClass('swim');
        $('.measure-tips div:first-of-type').removeClass('baby-boy-swim');
        $('.measure-tips div:nth-of-type(2)').removeClass('two-rows');
        $('.measure-tips div:nth-of-type(2)').removeClass('baby-boy-swim');

        //get the cat that match
        if (catVal == arr.name) {
          //change the copy
          // console.log(arr);
          var divs = $('.size-chart-container .measure-tips div');
          // console.log(divs);
          divs.find('p').html(arr.rightP);

          // $.each(divs, function(k, obj) {
          //   if (k == 0) {
          //change the h2
          // $(obj).find('h2').html(arr.leftH2);
          //change the p
          //   $(obj).find('p').html(arr.leftP);
          // } else if (k == 1) {
          //desktop
          // if ($(window).width() > 737) {
          //change the h2
          // $(obj).find('h2').html(arr.rightH2);
          //change the p
          // $(obj).find('p').html(arr.rightP);
          // }
          //mobile
          // if ($(window).width() < 737) {
          //
          //   //if newborn hide div
          //   if (deptVal == 'newborn') {
          //     $(obj).hide();
          //   }
          //   // not newborn
          //   else {
          //     $(obj).show();
          //   }
          //   //change the h2
          //   $(obj).find('h2').html(arr.leftH2);
          //   //change the p
          //   $(obj).find('p').html(arr.leftP);
          // }

          //   }
          // });
        }
      });
      // }
    }
  });
};

},{"./set-dept-cat.js":7}],4:[function(require,module,exports){
"use strict";

var sizeChartArr = require('./measuring-tips.js');
// const deptCat = require('./set-dept-cat.js');
var changeBackground = require('./change-background-image.js');
var adjustMeasureCSS = require('./measuring-tips-css.js');
var adjustTipsCSS = require('./tips-css.js');
var addDataAttr = require('./add-data-dept.js');
var changeCopy = require('./change-measuring-tips-copy.js');
$(document).ready(function () {
  //? change the background image
  changeBackground(sizeChartArr);

  //? change the copy
  changeCopy(sizeChartArr);

  //? if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  adjustMeasureCSS();

  //? if baby boy or baby girl adjust css on .tips
  adjustTipsCSS();

  //? add class to .tips
  addDataAttr();

  /*-----------------------------------------------------------------------------------------*/

  //? on click .tips

  $('.size-chart-container').find($('.tips')).click(function (e) {
    e.preventDefault();

    //? get the data-dept
    var dept = $(this).attr('data-dept');

    //? hide h1
    $('.size-chart-container h1').hide();

    //? add the content to .measure-take-over
    $.each(sizeChartArr, function (i, val) {
      if (dept == val.dept) {
        //? add the image
        //? desktop
        if ($(window).width() > 737) {
          $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + val.measure.img);
        }
        //? mobile
        else if ($(window).width() < 737) {
          var imgSrc = val.measure.img;
          imgSrc = imgSrc.split('.');
          imgSrc = imgSrc[0] + '-m.' + imgSrc[1];
          $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc);
        }

        //? add the chest text
        $('.measure-content .text .chest p').html(val.measure.chest);
        //? add the hips text
        $('.measure-content .text .hips p').html(val.measure.hips);
        //? add the waist text
        $('.measure-content .text .waist p').html(val.measure.waist);
      }
    });

    //? hide the other elements
    $('.size-chart-container .dropdowns, .size-chart-container .measure-tips, .size-chart-container .size-chart-table').hide();

    //? show .measure-take-over
    $('.measure-take-over').show();
  });

  /*-----------------------------------------------------------------------------------------*/

  //? collapse ul.department & ul.category when click on .measure-tips

  $('.measure-tips').click(function () {
    var dept = $('ul.department');
    var cat = $('ul.category');
    var arr = [dept, cat];
    $.each(arr, function (i, val) {
      var attribute = $(val).attr('style');
      if (attribute !== undefined) {
        $(val).removeAttr('style');
      }
    });
  });

  /*-----------------------------------------------------------------------------------------*/

  //? close the .measure-take-over
  $('.measure-take-over .measure, .measure-take-over .return').click(function () {
    //? show h1
    $('.size-chart-container h1').show();
    //? hide .measure-take-over
    $('.measure-take-over').hide();
    //? show the other elements
    $('.size-chart-container .dropdowns, .size-chart-container .measure-tips, .size-chart-container .size-chart-table').show();
    //? reset the .measure-content
    $('.measure-content img').attr('src', '');
    $('.measure-content .text .chest p, .measure-content .text .hips p, .measure-content .text .waist p').html('');
  });

  /*-----------------------------------------------------------------------------------------*/
});

},{"./add-data-dept.js":1,"./change-background-image.js":2,"./change-measuring-tips-copy.js":3,"./measuring-tips-css.js":5,"./measuring-tips.js":6,"./tips-css.js":8}],5:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');
module.exports = function () {
  //function to adjust css for .measure-tips

  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  // var catVal = $('.size-chart-container .category').val();

  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

  //if mobile change the height of the .measure-tips div
  // if ($(window).width() < 737) {
  //   //if .measure-tips div has style remove it
  //   $('.measure-tips div').removeAttr('style');
  //
  //   //if .measure-tips css min-height: 0 set to auto
  //   var measureStyles = $('.measure-tips').attr('style');
  //   measureStyles = measureStyles.split(';');
  //   measureStyles = measureStyles[0];
  //   $('.measure-tips').attr('style', measureStyles);
  //
  //   //get the height
  //   var mHeight = $('.measure-tips').css('height');
  //
  //   //set the height
  //   $('.measure-tips div').css('height', mHeight);
  // }

  // if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     $('.measure-tips').css({
  //       minHeight: '0',
  //       padding: '0 0 33px 0'
  //     });
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     $('.measure-tips').css('min-height', '0');
  //     //reset the height of .measure-tips div
  //     $('.measure-tips div').css('height', '0px');
  //   }
  //
  // } else if (deptVal == 'baby boy' || deptVal == 'baby girl') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     $('.measure-tips').css({
  //       minHeight: '420px',
  //       padding: '196px 0 0 0'
  //     });
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     $('.measure-tips').css({
  //       minHeight: '290px',
  //       backgroundPosition: 'center -23px'
  //     });
  //
  //     //get the height
  //     var mHeight = $('.measure-tips').css('min-height');
  //
  //     //set the height
  //     $('.measure-tips div').css('height', mHeight);
  //   }
  // } else if (deptVal == 'newborn') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     $('.measure-tips').css({
  //       minHeight: '360px',
  //       padding: '196px 0 0 0'
  //     });
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     $('.measure-tips').css({
  //       minHeight: '237px',
  //       backgroundPosition: 'center -21px'
  //     });
  //     //reset the height of .measure-tips div
  //     $('.measure-tips div').css('height', '0px');
  //   }
  // }

  // else remove the style attribute on .tips and change css on .measure-tips
  // else {
  //   //$('.size-chart-container').find($('.tips')).removeAttr('style');
  //   var measureStyles = $('.size-chart-container').find($('.measure-tips')).attr('style');
  //   measureStyles = measureStyles.split(';');
  //   measureStyles = measureStyles[0];
  //   $('.size-chart-container').find($('.measure-tips')).attr('style', measureStyles);
  // }
};

},{"./set-dept-cat.js":7}],6:[function(require,module,exports){
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

module.exports = function (elem1, elem2) {
  //? function to set the selected department and category for desktop or mobile
  var Val;
  Val = $(elem2).val();
  return Val;
};

},{}],8:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');
module.exports = function () {
  //function to adjust css for .tips

  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  // var deptVal = $('.size-chart-container .department').val();

  // if (deptVal == 'baby girl' || deptVal == 'baby boy') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     //if bottoms
  //     // if(catVal == 'bottoms'){
  //     //   $('.size-chart-container').find($('.tips')).css('top','180px');
  //     // } else {
  //     //   $('.size-chart-container').find($('.tips')).css('top','148px');
  //     // }
  //
  //     $('.size-chart-container').find($('.tips')).css('top', '128px');
  //
  //     $('.size-chart-container').find($('.tips')).show();
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
  //       $('.size-chart-container').find($('.tips')).hide();
  //     } else {
  //       $('.size-chart-container').find($('.tips')).show();
  //
  //       //change the css positioning
  //       $('.size-chart-container').find($('.tips')).css('top', '189px');
  //     }
  //   }
  //
  // }
  //else if newborn hide .tips
  // else if (deptVal == 'newborn') {
  //   $('.size-chart-container').find($('.tips')).hide()
  // }
  // // if category is shoes + accessories  or pajams
  // else if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
  //   $('.size-chart-container').find($('.tips')).hide();
  // }
  // // else remove the style attribute on .tips
  // else {
  //   $('.size-chart-container').find($('.tips')).removeAttr('style');
  // }
};

},{"./set-dept-cat.js":7}]},{},[4]);
