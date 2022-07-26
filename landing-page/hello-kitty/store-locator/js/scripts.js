// import {
//   alt
// } from './alt.js';
import {
  inview
} from './inview.js';

// RUN NODE STORE-LOCATOR.JS TO BUILD OPTION.HTML AND LI.HTML 

$(document).ready(function() {

  // alt('.content-wrap .c1 > a img', 'babies');
  inview('.content-wrap .c1, .content-wrap .c2');

  $('.c1 select').change(function(e) {
    console.log(`select changed`);
    console.log(this.value);
    var state = this.value;

    $(`.c2 ul li`).map((i, val) => {
      var liState = $(val).attr('data-state');
      if (state == liState) {
        $(val).show();
      } else if (state == 'all') {
        $(`.c2 ul li`).show();
      } else {
        $(val).hide();
      }
    });

  });

});