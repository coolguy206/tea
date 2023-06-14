"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dutiesQualifications = void 0;

var dutiesQualifications = function dutiesQualifications(job, str) {
  var duties = job;
  var dutiesLi = "";
  var dutiesTitle = "<h3>".concat(str, "</h3>");
  $(duties).each(function (j, arr) {
    var list = "<li>".concat(arr, "</li>");
    dutiesLi = dutiesLi + list;
  });
  var dutiesList = "<ul>".concat(dutiesLi, "</ul>");
  var dutiesContent = dutiesTitle + dutiesList;
  $('.the-job').append(dutiesContent);
};

exports.dutiesQualifications = dutiesQualifications;
//# sourceMappingURL=duties-qualifications.js.map
