
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  var url = window.location.pathname;
  // console.log(`url: ${url}`);

  if (url !== '/product/EGIFTCARD-999-NS/tea-collection-gift-certificate-gift-card.html') {

    var browsingHistory = window.localStorage.getItem('browseHistory');
    // console.log(browsingHistory);

    var browsingHistoryLength = $('.browsing-history li').length;
    // console.log(`browsingHistoryLength: ${browsingHistoryLength}`)

    if (browsingHistory !== null && browsingHistoryLength == 0) {

      browsingHistory = JSON.parse(browsingHistory);
      // console.log(browsingHistory);

      var items = browsingHistory.reverse();

      items.map((val, i) => {
        // console.log(i);
        // console.log(val[0]);

        if (i < 15) {
          // var color = val[0].Url;
          // color = color.split('#')[1];

          // var promoClass = "promo-teaser-thumb";
          // var strike = val[0].Metadata.CompareAtPrice;
          // if (strike == val[0].Metadata.Price) {
          //   strike = "";
          //   promoClass = "";
          // }

          //! QUICK VIEW DOESN'T WORK... KEEPS ADDING MORE ITEMS TO SLIDESHOW
          // var qv = `<span data-href="${url}" data-color="${color}" class="js-qv ">Quick View</span>`;
          // //? ONLY SHOW QUICK VIEW IF NOT ON PDP PAGE
          // var thisPageUrl = window.location.pathname;
          // if(thisPageUrl.indexOf('product') !== -1){
          //   qv = "";
          // }

          if (val.pdpURL !== undefined) {

            var urlParams = `?utm_campaign=recently_viewed&utm_medium=recently_viewed&utm_source=recently_viewed`;

            var qv = `<span data-href="${val.pdpURL}" data-color="${val.pdpColor}" class="js-qv ${val.pdpName}">Quick View</span>`;

            var elem = `
                        <li>
                            <div class="thumb-grid item">
                                <span class="img">
                                    <a href="${val.pdpURL}${urlParams}"
                                        data-hash="" class="browsing-history ${val.pdpName}">
                                        <img class="image" src="${val.pdpImgURL}" alt="${val.pdpName}" width="500" height="500">
                                    </a>
                                    ${qv}
                                </span>
                                <div class="thumb-content">
                                    <a class="name browsing-history"
                                        href="${val.pdpURL}${urlParams}"
                                        data-hash="">
                                        <span class="model">${val.pdpName}</span>
                                    </a>
                        
                                    <div class="price-wrap">
                                        <div class="price">
                                            <strike></strike>
                                            <span id="store_price" class="price ">${val.pdpPrice}</span>
                                        </div>
                                    </div>

                                    <p class="size">
                                      <span class="thumb-sizes">
                                        ${val.pdpSizes}
                                      </span>
                                    </p>
                        
                                </div>
                            </div>
                        </li>
                        `;

            $('.browsing-history ul').append(elem);

            var btn = `<button class="glide__bullet" data-glide-dir="=${i}"></button>`;
            $('div[data-glide-el="controls[nav]"]').append(btn);
          }
        }
      })


      $('.browsing-history').css('opacity', 1);

      //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
      if ($('.browsing-history li').length >= 5 || window.innerWidth < 431) {
        new Glide('.browsing-history .glide', {
          type: 'slider',
          // autoplay: 4000,
          animationDuration: 500,
          perView: 4,
          hoverpause: true,
          gap: 0,
          bound: true,
          rewind: false,
          breakpoints: {
            821: {
              perView: 3,
              perSwipe: '|',
            },
            431: {
              perView: 1,
              perSwipe: '|',
            },
          }
        }).mount();
      } else {
        //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
        $('.browsing-history div[data-glide-el="controls"]').hide();
        $('.browsing-history ul').addClass('width-300');
      }

    } else {
      $('.browsing-history').hide();
    }

    inview('.browsing-history');

  }

});