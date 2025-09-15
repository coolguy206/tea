
// import { valHooks } from 'jquery';
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  let userEmail = window.dataLayer[0].userEmail;
  let userName = window.dataLayer[2].userName;

  //? ONLY EXECUTE IF USER IS LOGGED IN
  if (userEmail !== "" && userName !== undefined) {

    let h2 = `${userName} here are some recommended items for you!`
    $('.user-recommendations-slider h2').html(h2);

    let baseURL = `https://item-recommender-api.vercel.app/orders/`;

    //?get the recommendations
    fetch(`${baseURL}${userEmail}`).then((data) => { return data.json() }).then((data) => {
      console.log(data);

      let html = ``;

      data.map((val, i) => {

        let img = val.img;

        let price = ``;
        let storePrice = Number(val.store_price).toFixed(2);
        let retailPrice = Number(val.retail_price).toFixed(2);

        //? ONLY SHOW ITEMS WITH IMAGES
        if (img.indexOf('undefined') == -1) {

          if (storePrice !== retailPrice) {
            price = `<span id="store_price" class="old-price"><strike>$${retailPrice}</strike></span>
                  <span id="sale_price" class="price-red">$${storePrice}</span>`;
          } else {
            price = `<span id="store_price" class="price">$${storePrice}</span>`;
          }

          let promoTeaser = ``;
          if (val.promo_teaser !== "" && val.promo_teaser !== null && val.promo_teaser !== undefined) {
            promoTeaser = `<span class="promo-teaser-thumb">${val.promo_teaser}</span>`;
          }

          let li = `<li class="lgw-thumb">
                    <div class="thumb-grid item" style="width: 100%; padding: 0;">
                      
                      <span class="img">
                        <a href="${val.url}" class="the-order-lines ${val.model}">
                           ${img} 
                        </a>
    
                        <span data-href="${val.url}" data-color="${val.color}" class="js-qv ${val.model}">Quick View</span>
                      </span>
    
                      <div class="thumb-content">
                        <a href="${val.url}" class="name the-order-lines">
                          <span class="model">${val.model}</span>
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

      $('.user-recommendations-slider ul').append(html);

      $('.user-recommendations-slider').css('opacity', 1);

      // $($(`.user-recommendations-slider .lgw-thumb`)[6]).before($('.user-recommendations-slider .img-2'));

      //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
      if ($('.user-recommendations-slider li').length >= 5 || window.innerWidth < 431) {
        new Glide('.user-recommendations-slider .glide', {
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
        $('.user-recommendations-slider div[data-glide-el="controls"]').hide();
        $('.user-recommendations-slider ul').addClass('width-300');

      }

      inview('.user-recommendations-slider');
      $('.user-recommendations-slider .white-out').fadeOut();

    }).catch((err) => { console.log(`oops something went wrong. \n ${err}`) });;


  }


});