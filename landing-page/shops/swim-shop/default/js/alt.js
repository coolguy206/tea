export const alt = function(elem, alt) {
  // console.log(`from alt.js`);
  let img = $(elem);
  $.each(img, function(i, val) {
    $(val).attr('alt', alt);
  });
};