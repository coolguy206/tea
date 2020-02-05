(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = {
  key: 'tl93eh3m2g89gui0dbgo374otpywg8sv',
  secret: 'juixcxy7dri2nn0lwa6rh3eclyt39wkr'
};


},{}],2:[function(require,module,exports){
"use strict";

var vars = require('./vars.js');

var key = require('./key.js');

var showCatalog = require('./showCatalog.js');

var showThumbs = require('./showThumbs.js');

$(document).ready(function () {
  var a1 = vars.a1(); // console.log(a1);

  var a2 = vars.a2(); // console.log(a2);

  var f = vars.f(); // console.log(f);

  var p = vars.p(); // console.log(p);

  var sig1 = "".concat(key.secret).concat(a1).concat(a2, "apiKey").concat(key.key).concat(f); // console.log(sig1);

  sig1 = $.md5(sig1); // console.log('sig1');
  // console.log(sig1);
  // console.log('get 1');
  // console.log(`${vars.baseUrl}?${vars.access}&${vars.action}&apiKey=${key.key}&${vars.format}&signature=${sig1}`);
  //start the initial get of the catalogs

  $.get("".concat(vars.baseUrl, "?").concat(vars.access, "&").concat(vars.action, "&apiKey=").concat(key.key, "&").concat(vars.format, "&signature=").concat(sig1), function (data) {
    // console.log(data);
    var totalCatalogs = data.rsp._content.result.totalCount;
    var sig2 = "".concat(key.secret).concat(a1).concat(a2, "apiKey").concat(key.key).concat(f).concat(p).concat(totalCatalogs); // console.log('sig2');
    // console.log(sig2);

    sig2 = $.md5(sig2); // console.log('get 2');
    // console.log(`${vars.baseUrl}?${vars.access}&${vars.action}&apiKey=${key.key}&${vars.format}&pageSize=${totalCatalogs}&signature=${sig2}`);
    //get all the catalogs

    $.get("".concat(vars.baseUrl, "?").concat(vars.access, "&").concat(vars.action, "&apiKey=").concat(key.key, "&").concat(vars.format, "&pageSize=").concat(totalCatalogs, "&signature=").concat(sig2), function (data) {
      // console.log(data);
      var catalogs = data.rsp._content.result._content; // sort the catalogs from most recent

      catalogs.sort(function (x, y) {
        return new Date(y.document.publishDate) - new Date(x.document.publishDate);
      }); //append the li with data-name

      $(catalogs).each(function (i, val) {
        var title = val.document.title;
        title = title.replace('Tea Collection - ', '');
        title = title.replace(/\(|\)/gi, '');
        $('.navigation-catalog ul').append("<li data-name=\"".concat(val.document.name, "\" data-desc=\"").concat(val.document.description, "\"><h4>").concat(title, "</h4></li>"));
      }); //load the first catalog

      var firstThumb = $('.navigation-catalog ul li:first-of-type').attr('data-name');
      var firstDesc = $('.navigation-catalog ul li:first-of-type').attr('data-desc');
      showCatalog(firstThumb, 1000, firstDesc); //load the thumbnails

      showThumbs(); //remove loading

      $('.loading').remove(); //click thumb change the flipbook

      $('.navigation-catalog ul li').click(function () {
        // console.log('li clicked');
        var name = $(this).attr('data-name');
        var desc = $(this).attr('data-desc');
        $('#flipBook').children().remove();
        showCatalog(name, 1000, desc);
        window.scrollTo(0, 140);
      });
    }); //end of $.get
  }); //end of $.get
});


},{"./key.js":1,"./showCatalog.js":3,"./showThumbs.js":4,"./vars.js":5}],3:[function(require,module,exports){
"use strict";

var vars = require('./vars.js');

module.exports = function (name, width, desc) {
  var url = name;
  url = vars.issu + url; // console.log('showCatalog.js');
  // console.log(url);

  url = encodeURIComponent(url);
  $.get("https://issuu.com/oembed?url=".concat(url, "&format=json&maxwidth=").concat(width), function (data) {
    // console.log(data);
    $('#flipBook').append(data.html);
    $('#flipBook').append("<p> ".concat(desc, "</p>"));
  });
};


},{"./vars.js":5}],4:[function(require,module,exports){
"use strict";

var vars = require('./vars.js');

module.exports = function () {
  var thumbs = $('.navigation-catalog ul li');
  $(thumbs).each(function (i, val) {
    var url = $(val).attr('data-name');
    url = vars.issu + url;
    url = encodeURIComponent(url);
    $.get("https://issuu.com/oembed?url=".concat(url, "&format=json"), function (data) {
      // console.log(data);
      $(val).prepend("<img src=\"".concat(data.thumbnail_url, "\" alt=\"").concat(data.title, "\"/>"));
    });
  });
};


},{"./vars.js":5}],5:[function(require,module,exports){
"use strict";

var key = require('./key.js');

module.exports = {
  baseUrl: "https://api.issuu.com/1_0",
  access: "access=public",
  a1: function a1() {
    return this.access.replace(/=/g, '');
  },
  action: "action=issuu.documents.list",
  a2: function a2() {
    return this.action.replace(/=/g, '');
  },
  format: "format=json",
  f: function f() {
    return this.format.replace(/=/g, '');
  },
  pageSize: "pageSize=",
  p: function p() {
    return this.pageSize.replace(/=/g, '');
  },
  issu: "https://issuu.com/teacollection/docs/"
};


},{"./key.js":1}]},{},[2]);
