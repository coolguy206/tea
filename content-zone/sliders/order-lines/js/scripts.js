
// import { valHooks } from 'jquery';
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  var num = Date.now();
  console.log(`/mas_assets/media/tea_collection/content-zone/order-lines-slider/pdps-order-lines.js?nocache=${num}`);
  fetch(`/mas_assets/media/tea_collection/content-zone/order-lines-slider/pdps-order-lines.js?nocache=${num}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      let html = ``;

      data.map((val, i) => {

        let img = val.img;

        let price = ``;
        let storePrice = val.store_price;
        let retailPrice = val.retail_price;

        //? ONLY SHOW FULL PRICE ITEMS && ITEMS WITH IMAGES
        if (storePrice == retailPrice && img.indexOf('undefined') == -1) {


          if (storePrice !== retailPrice) {
            price = `<span id="store_price" class="old-price"><strike>${val.retail_price}</strike></span>
                  <span id="sale_price" class="price-red">${val.store_price}</span>`;
          } else {
            price = `<span id="store_price" class="price">${val.store_price}</span>`;
          }

          let promoTeaser = ``;
          if (val.promo_teaser !== undefined) {
            promoTeaser = `<span class="promo-teaser-thumb">${val.promo_teaser}</span>`;
          }

          let li = `<li class="lgw-thumb">
                    <div class="thumb-grid item" style="width: 100%; padding: 0;">
                      
                      <span class="img">
                        <a href="${val.url}" class="the-order-lines ${val.name}">
                           ${img} 
                        </a>
    
                        <!--<span data-href="${val.url}" data-color="${val.color}" class="js-qv ${val.name}">Quick View</span>
                      </span>-->
    
                      <div class="thumb-content">
                        <a href="${val.url}" class="name the-order-lines">
                          <span class="model">${val.name}</span>
                        </a>
    
                        <div class="price-wrap">
                          <div class="price">
                            ${price}
                          </div>
                        </div>
    
                        ${promoTeaser}
    
                      </div>
                    </div>
                  </li>`;

          html = `${html}${li}`;
        }
      });

      // console.log(html);

      $('.the-orders-lines-slider ul').append(html);

      $('.the-orders-lines-slider').css('opacity', 1);

      // $($(`.the-orders-lines-slider .lgw-thumb`)[6]).before($('.the-orders-lines-slider .img-2'));

      //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
      if ($('.the-orders-lines-slider li').length >= 5 || window.innerWidth < 431) {
        new Glide('.the-orders-lines-slider .glide', {
          type: 'carousel',
          // autoplay: 4000,
          animationDuration: 500,
          perView: 5,
          hoverpause: true,
          gap: 0,
          bound: true,
          rewind: false,
          breakpoints: {
            // 821: {
            //   perView: 3,
            //   perSwipe: '|',
            // },
            431: {
              perView: 2,
              perSwipe: '|',
            },
          }
        }).mount();
      } else {
        //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
        $('.the-orders-lines-slider div[data-glide-el="controls"]').hide();
        $('.the-orders-lines-slider ul').addClass('width-300');
      }

      inview('.the-orders-lines-slider');
      $('.the-orders-lines-slider .white-out').fadeOut();

    }).catch((err) => { console.log(`oops something went wrong. \n ${err}`) });




  // $('.the-orders-lines-slider').css('opacity', 1);

  // $($(`.the-orders-lines-slider .lgw-thumb`)[6]).before($('.the-orders-lines-slider .img-2'));
  /*
    //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
    if ($('.the-orders-lines-slider li').length >= 5 || window.innerWidth < 431) {
      new Glide('.the-orders-lines-slider .glide', {
        type: 'carousel',
        // autoplay: 4000,
        animationDuration: 500,
        perView: 5,
        hoverpause: true,
        gap: 0,
        bound: true,
        rewind: false,
        breakpoints: {
          // 821: {
          //   perView: 3,
          //   perSwipe: '|',
          // },
          431: {
            perView: 2,
            perSwipe: '|',
          },
        }
      }).mount();
    } else {
      //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
      $('.the-orders-lines-slider div[data-glide-el="controls"]').hide();
      $('.the-orders-lines-slider ul').addClass('width-300');
    }
  */
  //  inview('.the-orders-lines-slider');


});