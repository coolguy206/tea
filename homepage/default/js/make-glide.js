import Glide from '@glidejs/glide'

export const makeGlide = function (elem) {

    new Glide(elem, {
        type: 'carousel',
        autoplay: 4000,
        animationDuration: 1000,
        perView: 1,
        hoverpause: true,
        gap: 0,
        // swipeThreshold: false,
        dragThreshold: false,
    }).mount();

};


