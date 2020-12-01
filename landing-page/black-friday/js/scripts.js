import {
  urls
} from './urls';
import {
  makeLinks
} from './makeLinks';

$(document).ready(function() {
  $('.shops h2').addClass('open');
  $('.shops .links').css('display', 'block');
  $('.shops h2 span').attr('class', 'fas fa-minus');

  var li = $('.category-page .nav .side-nav ul li .links ul li');
  $.each(li, function(i, val) {
    switch (i) {
      case 1:
      case 2:
      case 3:
      case 4:
        $(val).css('margin-left', '20px');
        break;

    }
  });

  // console.log(urls);

  var url = window.location.pathname;

  var number = 0;
  switch (url) {
    case '/black-friday':
    case '/black-friday/10':
    case '/black-friday/12':
    case '/black-friday/15':
    case '/black-friday/20':
      number = 4;
      break;
    case '/black-friday/girl/10':
      number = 2;
      break;
    default:
      number = 3;
      break;
  }

  //collapse size sidebar
  if ($('.category-page .nav .side-nav ul li h2')[number] !== undefined) {
    $('.category-page .nav .side-nav ul li h2')[number].classList.remove('open');
    $('.category-page .nav .side-nav ul li h2 span')[number - 1].className = 'fas fa-plus';
    $('.category-page .nav .side-nav ul li .facets')[number - 2].style.display = 'none';
  }



  url = url.split('/');

  var baseURL = url[1];
  var cat = url[2];

  // console.log(baseURL, cat);

  switch (cat) {
    case '10':
    case '12':
    case '15':
    case '20':
      var titleText = $('.main-title').text();
      titleText = titleText.split(' ');
      // console.log(titleText);
      // console.log(`should be top level nav`);
      titleText = `${titleText[0]} black friday styles`;
      // console.log(titleText);
      $('.main-title').text(titleText);
      break;
    case 'girl':
    case 'boy':
    case 'tween':
      var titleText = $('.main-title').text();
      titleText = titleText.split(' ');
      // console.log(titleText);
      if (titleText.length < 3) {
        if (titleText[1] == undefined) {
          // console.log(`undefined, should be top level nav`);
          titleText = `${titleText[0]} black friday styles`;
          // console.log(titleText);
        } else {
          // console.log(`subnav`)
          titleText = `${titleText[0]} ${cat} ${titleText[1]}`;
          // console.log(titleText);
        }
        $('.main-title').text(titleText);
      }
      break;
    case 'baby-girl':
    case 'baby-boy':
    case 'toddler-girl':
    case 'toddler-boy':
      var titleText = $('.main-title').text();
      titleText = titleText.split(' ');
      // console.log(titleText);
      if (titleText.length < 3) {
        if (titleText[0] == 'Baby' || titleText[0] == 'Toddler') {
          // console.log(`undefined, should be top level nav`);
          titleText = `${titleText[0]} ${titleText[1]} <br class="mobile"> black friday styles`;
          // console.log(titleText);
        } else {
          // console.log(`subnav`)
          var thisCat = cat;
          thisCat = thisCat.replace(/-/g, ' ');
          titleText = `${titleText[0]} ${thisCat} ${titleText[1]}`;
          // console.log(titleText);
        }
        $('.main-title').html(titleText);
      }
      break;
  };



  switch (cat) {
    case '10':
      makeLinks(urls.num10, baseURL, cat)
      break;
    case '12':
      makeLinks(urls.num12, baseURL, cat)
      break;
    case '15':
      makeLinks(urls.num15, baseURL, cat)
      break;
    case '20':
      makeLinks(urls.num20, baseURL, cat)
      break;
    case undefined:
      makeLinks(urls.numUndefined, baseURL, cat)
      break;
    case 'girl':
      makeLinks(urls.girl, baseURL, cat)
      break;
    case 'boy':
      makeLinks(urls.boy, baseURL, cat)
      break;
    case 'tween':
      makeLinks(urls.tween, baseURL, cat)
      break;
    case 'baby-girl':
      makeLinks(urls.baby.girl, baseURL, cat)
      break;
    case 'baby-boy':
      makeLinks(urls.baby.boy, baseURL, cat)
      break;
    case 'newborn':
      makeLinks(urls.baby.newborn, baseURL, cat)
      break;
    case 'toddler-girl':
      makeLinks(urls.toddler.girl, baseURL, cat)
      break;
    case 'toddler-boy':
      makeLinks(urls.toddler.boy, baseURL, cat)
      break;
  };

  // $('.site-content-bg-wrapper').prepend($('.container-black-friday'));

  // $('.da-rennab .container-black-friday').remove();
  $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#FF1744';

  // $('.container-black-friday')[0].remove()
});
