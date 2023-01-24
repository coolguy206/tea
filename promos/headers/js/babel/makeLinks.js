"use strict";

var makeLinks = function makeLinks(arr, baseURL, cat) {
  // console.log(cat);
  var theURLs = "";
  $.each(arr, function (i, val) {
    var thisURL = "";
    var num = i + 1;
    var color = "";

    if (cat == undefined) {
      thisURL = "/".concat(baseURL, "/").concat(val);
      theURLs = "".concat(theURLs, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(thisURL, "\"><span>shop</span> $").concat(val, "</a> ");
    } else if (cat !== '10' && cat !== '12' && cat !== '15' && cat !== '20') {
      thisURL = "/".concat(baseURL, "/").concat(cat, "/").concat(val);
      theURLs = "".concat(theURLs, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(thisURL, "\"><span>shop</span> $").concat(val, "</a> ");
    } else {
      thisURL = "/".concat(baseURL, "/").concat(val.url, "/").concat(cat);
      theURLs = "".concat(theURLs, " <a class=\"cta-border cta-").concat(val.url, "\" href=\"").concat(thisURL, "\"><span>shop</span> ").concat(val.text, "</a> ");
    }
  });
  $('.container-black-friday div').append(theURLs);
  var length = $('.container-black-friday div a').length;
  var lastNum = length + 1;
  $('.container-black-friday div').addClass('cta-length-' + lastNum);
  var text = "";

  switch (cat) {
    case 'girl':
      text = 'girl';
      break;

    case 'boy':
      text = 'boy';
      break;

    case 'tween':
      text = 'tween';
      break;

    case 'baby-girl':
      text = 'baby girl';
      break;

    case 'baby-boy':
      text = 'baby boy';
      break;

    case 'toddler-girl':
      text = 'toddler girl';
      break;

    case 'toddler-boy':
      text = 'toddler boy';
      break;
  } // console.log(`text: ${text}`);
  // $('.container-black-friday div').append(`<a class="cta-border cta-${last} last" href="/${baseURL}/${cat}">shop ${text}</a>`);


  if (cat == undefined) {
    $('.container-black-friday div').append("<a class=\"cta-border cta-last cta-".concat(cat, "\" href=\"/").concat(baseURL, "\"><span>shop</span> all</a>"));
  } else if (cat !== '10' && cat !== '12' && cat !== '15' && cat !== '20') {
    $('.container-black-friday div').append("<a class=\"cta-border cta-last cta-".concat(cat, "\" href=\"/").concat(baseURL, "/").concat(cat, "\"><span>shop</span> ").concat(text, "</a>"));
  }
};
//# sourceMappingURL=makeLinks.js.map
