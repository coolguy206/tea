// const showCatalog = require('./showCatalog.js');

//   RUN NODE ISSUU.JS FIRST!!!!

$(document).ready(function() {

  //load the first catalog
  var firstThumb = $('.navigation-catalog ul li:first-of-type').attr('data-name');
  var firstDesc = $('.navigation-catalog ul li:first-of-type').attr('data-desc');

  var iframe = `<div style="position:relative;padding-top:max(60%,326px);height:0;width:100%"><iframe allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" allowfullscreen="true" style="position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;" src="https://e.issuu.com/embed.html?d=${firstThumb}&hideIssuuLogo=true&showOtherPublicationsAsSuggestions=true&u=teacollection"></iframe></div>`;

  // showCatalog(firstThumb, 1000, firstDesc);
  $('.navigation-catalog .iframe').append(iframe);
  $('.loading').hide();

  //click thumb change the flipbook
  $('.navigation-catalog ul li').click(function() {
    // console.log('li clicked');

    var name = $(this).attr('data-name');
    var desc = $(this).attr('data-desc');

    var iframe = `<div style="position:relative;padding-top:max(60%,326px);height:0;width:100%"><iframe allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" allowfullscreen="true" style="position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;" src="https://e.issuu.com/embed.html?d=${name}&hideIssuuLogo=true&showOtherPublicationsAsSuggestions=true&u=teacollection"></iframe></div>`;

    // $('#flipBook').children().remove();
    $('.navigation-catalog .iframe').children().remove();
    $('.loading').show();
    $('.navigation-catalog .iframe').append(iframe);
    $('.loading').hide();


    // showCatalog(name, 1000, desc);

    window.scrollTo(0, 140);

  });

});