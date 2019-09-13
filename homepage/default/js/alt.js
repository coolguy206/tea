var addAlt = function(elem, alt) {
  var img = $(elem);
  $.each(img, function(i, val) {
    $(val).attr('alt', alt);
  });
};

addAlt('.hp .c1 .slide1 img', 'boy and girl');
addAlt('.hp .c1 .slide2 img', 'girls running');
addAlt('.hp .c1 .slide3 img', 'cute dress baby girl');
addAlt('.hp .c1 .slide4 img', 'boys hanging out');
addAlt('.hp .c2 .second img', 'handsome toddler boy going to school');
addAlt('.hp .c3 img', 'Tea gives back');
addAlt('.hp .c4 img', 'dresses with attitude');
addAlt('.hp .c5 .first img', 'new sale styles');
addAlt('.hp .c6 .second img', 'girls at the market');
addAlt('.hp .c7 img', 'got personali-tees');
addAlt('.hp .c8 img', 'little sisters fund');