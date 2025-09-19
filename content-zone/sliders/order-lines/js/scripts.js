
// import { valHooks } from 'jquery';
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  let baseURL = `https://item-recommender-api.vercel.app/orders/`;

  let itemsArray = [];

  //?get the recommendations
  fetch(`${baseURL}`).then((data) => { return data.json() }).then((data) => {
    // console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (itemsArray.length < 20) {

        for (let j = 0; j < data[i].items.length; j++) {

          var storePrice = Number(data[i].items[j].store_price).toFixed(2);
          var retailPrice = Number(data[i].items[j].retail_price).toFixed(2);
          var img = data[i].items[j].img;
          var baseSku = data[i].items[j].baseSku;

          // console.log(storePrice, retailPrice, img);

          //? ONLY SHOW FULL PRICE ITEMS && ITEMS WITH IMAGES
          if (storePrice == retailPrice && img.indexOf('undefined') == -1 && baseSku !== `GIFT_MESSAGE`) {

            // console.log(`conditions met`);
            // console.log(storePrice, retailPrice, img);
            // console.log(data[i].items[j]);
            itemsArray.push(data[i].items[j]);
            // itemsArray = itemsArray.flat();

          }

        }

      } else {

        //? stop the loop because we have 20 items
        break;

      }

    }

    // console.log(`itemsArray`);
    // console.log(itemsArray);

    //? Remove duplicates based on sku prefix
    let uniqueArray = [];
    const seenPrefixes = new Set();

    uniqueArray = itemsArray.filter(item => {
      const prefix = item.baseSku;

      if (seenPrefixes.has(prefix)) {

        //? Skip if prefix already seen
        return false;

      } else {

        //? Keep the first occurrence
        seenPrefixes.add(prefix);
        return true;

      }
    });

    return uniqueArray;

  }).then((data) => {


    let html = ``;

    data.map((val, i) => {

      let img = val.img;

      let price = ``;
      let storePrice = Number(val.store_price).toFixed(2);
      let retailPrice = Number(val.retail_price).toFixed(2);

      //? ONLY SHOW FULL PRICE ITEMS && ITEMS WITH IMAGES
      if (storePrice == retailPrice && img.indexOf('undefined') == -1) {

        if (storePrice !== retailPrice) {
          price = `<span id="store_price" class="old-price"><strike>$${retailPrice}</strike></span>
                  <span id="sale_price" class="price-red">$${storePrice}</span>`;
        } else {
          price = `<span id="store_price" class="price">$${storePrice}</span>`;
        }

        let promoTeaser = ``;
        if (val.promo_teaser !== undefined && val.promo_teaser !== null && val.promo_teaser !== "") {
          promoTeaser = `<span class="promo-teaser-thumb">${val.promo_teaser}</span>`;
        }

        let li = `<li class="lgw-thumb">
                    <div class="thumb-grid item" style="width: 100%; padding: 0;">
                      
                      <span class="img">
                        <a href="${val.url}" class="the-order-lines ${val.model}">
                           ${img} 
                        </a>
    
                        <!-- <span data-href="${val.url}" data-color="${val.color}" class="js-qv ${val.model}">Quick View</span>-->
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

  }).catch((err) => { console.log(`oops something went wrong. \n ${err}`) });;


});