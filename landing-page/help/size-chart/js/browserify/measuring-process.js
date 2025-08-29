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
