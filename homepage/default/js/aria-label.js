export const ariaLabel = function (elem, str) {

  let ctas = $(elem);
  $(ctas).each(function () {
    // console.log($(this).text())
    let regex = new RegExp(str, "g");
    let text = $(this).text().replace(regex, "").trim();
    $(this).closest('div[role="region"]').attr('aria-label', text);
  });

};