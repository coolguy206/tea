"use strict";

$(document).ready(function () {
  //expand sidebar
  $('.shops h2').addClass('open');
  $('.shops .links').css('display', 'block');
  $('.shops h2 span').attr('class', 'fas fa-minus');
  var url = window.location.pathname;
  var bfClass = url.replace(/\//g, '-').replace('-', '');
  $('.container-black-friday').addClass(bfClass);
  var subCats = "";
  var theCtas = "";
  if (url == '/black-friday') {
    console.log('black friday page');
    //banner ctas
    subCats = $('.category-page .nav .side-nav ul li .links ul li a');
    $.each(subCats, function (i, val) {
      var thisURL = "";
      var num = "";
      var href = $(val).attr('href');
      var str = $(val).text();
      // console.log(`str`);
      // console.log(str);
      switch (str) {
        case "Girl":
          num = 1;
          break;
        case "Boy":
          num = 2;
          break;
        case "Baby Girl":
          num = 3;
          break;
        case "Baby Boy":
          num = 4;
          break;
        case "Newborn":
          num = 5;
          break;
      }
      // console.log(str);
      if (str !== "$10 Styles" && str !== "$12 Styles" && str !== "$15 Styles" && str !== "$18 Styles" && str !== "$20 Styles" && str !== "Toddler Girl" && str !== "Toddler Boy" && str !== "Shop All Black Friday" && str !== "$10" && str !== "$12 & Under" && str !== "$15 & Under" && str !== "$18 & Under" && str !== "Shop All") {
        str = str.replace(/& Under/g, '');
        theCtas = "".concat(theCtas, " <a class=\"cta-border a cta").concat(num, "\" href=\"").concat(href, "\"><span>shop</span> ").concat(str, "</a> ");
      }
    });
    if ($('.category-page .nav .side-nav ul li .links ul li a').length == 8) {
      console.log('only exec once');
      //add subcats to sidebar
      var theHTML = "<ul class=\"sub\">\n      <li class=\"\">\n        <a href=\"/black-friday/10\" title=\"$10\">$10</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/12\" title=\"$12 & Under\">$12 & Under</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/15\" title=\"$15 & Under\">$15 & Under</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/18\" title=\"$18 & Under\">$18 & Under</a>\n      </li>\n      <!--\n      <li class=\"\">\n        <a href=\"/black-friday/20\" title=\"$20 & Under\">$20 & Under</a>\n      </li>\n      -->\n      <li class=\"\">\n        <a href=\"/black-friday/shopall\" title=\"$18 & Under\">Shop All</a>\n      </li>\n    </ul>";
      $($('.category-page .nav .side-nav ul li .links ul li a')[0]).after(theHTML);
    }
  } else if (url == '/black-friday/10' || url == '/black-friday/12' || url == '/black-friday/15' || url == '/black-friday/18' || url == '/black-friday/20' || url == '/black-friday/shop-all') {
    //banner ctas
    subCats = $('.category-page .nav .side-nav ul li .links ul li a');
    $.each(subCats, function (i, val) {
      var thisURL = "";
      var num = "";
      var href = $(val).attr('href');
      var str = $(val).text();
      // console.log(`str`);
      // console.log(str);
      switch (str) {
        case "Girl":
          num = 1;
          break;
        case "Boy":
          num = 2;
          break;
        case "Baby Girl":
          num = 3;
          break;
        case "Baby Boy":
          num = 4;
          break;
        case "Newborn":
          num = 5;
          break;
      }
      // console.log(str);
      if (str !== "$10 Styles" && str !== "$12 Styles" && str !== "$15 Styles" && str !== "$18 Styles" && str !== "$20 Styles" && str !== "Toddler Girl" && str !== "Toddler Boy" && str !== "Shop All Black Friday" && str !== "$10" && str !== "$12 & Under" && str !== "$15 & Under" && str !== "$18 & Under" && str !== "$20 & Under" && str !== "Shop All") {
        str = str.replace(/& Under/g, '');
        theCtas = "".concat(theCtas, " <a class=\"cta-border a cta").concat(num, "\" href=\"").concat(href, "\"><span>shop</span> ").concat(str, "</a> ");
      }
    });
  } else {
    //banner ctas
    subCats = $('.category-page .nav .side-nav ul li .links ul li a.active + ul li a');
    $.each(subCats, function (i, val) {
      var thisURL = "";
      var num = i + 1;
      var color = "";
      var href = $(val).attr('href');
      var str = $(val).text();
      str = str.replace(/Styles/g, '').replace(/ /g, '').replace(/Girl/g, '').replace(/Boy/g, '').replace(/Baby/g, '').replace(/Newborn/g, '').replace(/Toddler/g, '').replace(/&Under/g, '');
      // console.log(`str`);
      // console.log(str);
      if (str == "ShopAll") {
        theCtas = "".concat(theCtas, " <a class=\"cta-border a cta").concat(num, "\" href=\"").concat(href, "\">shop all</a> ");
      } else if (str !== "$20") {
        theCtas = "".concat(theCtas, " <a class=\"cta-border a cta").concat(num, "\" href=\"").concat(href, "\">shop ").concat(str, "</a> ");
      }
    });
  }
  $('.container-black-friday div').append(theCtas);

  // $('.site-content-bg-wrapper').prepend($('.container-black-friday'));

  // $('.da-rennab .container-black-friday').remove();
  $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#FF1744';

  // $('.container-black-friday')[0].remove()
});
