// import {
//   alt
// } from './alt.js';
// import {
//   inview
// } from './inview.js';

$(document).ready(function() {
  // alt('.content-wrap div[data-num="2"] img', 'rainbow');
  // alt('.content-wrap div[data-num="3"] img', 'strawberry');
  // alt('.content-wrap div[data-num="4"] img', 'flower');

  // inview('.content-wrap div');

  $('.the-content .see-details').fancybox({
    helpers: {
      overlay: null
    }
  });

  $('.close-fancy').click(function(e) {
    // e.preventDefault();
    $.fancybox.close();

  });
});