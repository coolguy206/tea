"use strict";

jQuery(document).ready(function () {
  //array of urls to hide the banners
  var urlArray = [{
    name: 'hp',
    url: '/'
  } // {
  // 	name: 'black-friday',
  // 	url: '/black-friday'
  // },
  // {
  // 	name:'sale-page',
  // 	url:'/clothing-sale'
  // },
  ]; //function to hide or show the banner

  var hideBanners = function hideBanners() {
    var url = window.location.pathname;
    $.each(urlArray, function (i, val) {
      if (url == val.url) {
        $('div[data-zone="sitewide_banner"]').empty();
      }
    });
  }; //on page load call hideBanners


  hideBanners();
  $('.the-promo .see-details').fancybox();
  $('.close-fancy').click(function (e) {
    // e.preventDefault();
    $.fancybox.close();
  });
});
//# sourceMappingURL=scripts.js.map