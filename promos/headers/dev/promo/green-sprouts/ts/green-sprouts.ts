$(document).ready(function () {
  var header: any | undefined = $('div[data-zone="category_header"]')[1];
  if (header !== undefined) {
    header.style.display = "none";
  }
});
