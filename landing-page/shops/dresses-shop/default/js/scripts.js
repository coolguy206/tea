
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)

  $('.dresses .shop-slideshow').append($('.the-dresses-slider'));
  // $('.hp .shop-slideshow2').append($('.dresses.sliders'));
  // $('.hp .shop-slideshow3').append($('.leggings.sliders'));
  $('.dresses .white-out').fadeOut();

});


$(document).ready(function () {

  new Glide('.slideshow .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount()

  inview('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .clothes, .dresses .graphics, .dresses .dress-type, .dresses .slideshow, .dresses .reviews, .dresses .leggings, .dresses .trending');

});