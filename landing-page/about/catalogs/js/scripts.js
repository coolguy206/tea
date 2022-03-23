const showCatalog = require('./showCatalog.js');

//   RUN NODE ISSUU.JS FIRST!!!!

$(document).ready(function() {

  //load the first catalog
  var firstThumb = $('.navigation-catalog ul li:first-of-type').attr('data-name');
  var firstDesc = $('.navigation-catalog ul li:first-of-type').attr('data-desc');

  showCatalog(firstThumb, 1000, firstDesc);

  //click thumb change the flipbook
  $('.navigation-catalog ul li').click(function() {
    // console.log('li clicked');

    var name = $(this).attr('data-name');
    var desc = $(this).attr('data-desc');
    $('#flipBook').children().remove();
    $('.loading').show();

    showCatalog(name, 1000, desc);

    window.scrollTo(0, 140);

  });

});