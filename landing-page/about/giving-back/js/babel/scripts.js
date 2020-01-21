"use strict";

$(document).ready(function () {
  var content = [{
    pink: 'GREECE',
    blue: 'METAdrasi'
  }, {
    pink: 'BAJA, MEXICO',
    blue: 'Door of Faith Orphanage'
  }, {
    pink: 'SaN FRANCISCO, CALIFORNIA',
    blue: 'Homeless Prenatal Program'
  }, {
    pink: 'NEPAL',
    blue: 'LITTLE SISTERS FUND'
  }, {
    pink: 'NORTH AMERICA',
    blue: 'RAICES'
  }, {
    pink: 'ITALY',
    blue: 'Citizens FC tournament'
  }, {
    pink: 'HAITI',
    blue: 'SAKALA'
  }, {
    pink: 'PERU',
    blue: 'Asociación Civil Los Pioneros'
  }, {
    pink: 'INDIA',
    blue: 'Gram Bharati Samiti'
  }];
  var theContent = '';
  var baseUrl = '/mas_assets/media/tea_collection/landing-pages/give-back/2020/0116/v0/';
  $.each(content, function (i, val) {
    var num = i + 1;
    var elem = "<div>\n\t\t<img src=\"".concat(baseUrl, "c3-").concat(num, ".png\" alt=\"").concat(val.blue, "\">\n\t\t<span>").concat(val.pink, "</span>\n\t\t<h3>").concat(val.blue, "</h3>\n\t\t</div>");
    theContent = theContent + elem;
  });
  $('.values-wrap .c3').append(theContent);
});
//# sourceMappingURL=scripts.js.map