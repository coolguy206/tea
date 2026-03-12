export var dutiesQualifications = function (job, str) {
  var duties = job;
  var dutiesLi = ``;
  var dutiesTitle = `<h3>${str}</h3>`;
  $(duties).each(function (j, arr) {
    if (arr === "") return; // Skip if arr is an empty string
    if (arr.header !== undefined) {
      var list = `<li><h4>${arr.header}</h4></li>`;
      $(arr.list).each(function (k, duty) {
        list = `${list}\n\n<li>${duty}</li>\n`;
      });
      dutiesLi = dutiesLi + list;
    } else {
      var list = `<li>${arr}</li>`;
      dutiesLi = dutiesLi + list;
    }
  });
  var dutiesList = `<ul>${dutiesLi}</ul>`;
  if (dutiesLi.trim() === "") return; // Do not append if list is empty
  var dutiesContent = dutiesTitle + dutiesList;
  $('.the-job').append(dutiesContent);
};