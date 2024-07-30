
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  var browsingHistory = window.localStorage.getItem('__kla_viewed');

  var browsingHistoryLength = $('.browsing-history li').length;
  console.log(`browsingHistoryLength: ${browsingHistoryLength}`)

  if (browsingHistory !== null && browsingHistoryLength == 0) {

    browsingHistory = JSON.parse(browsingHistory);
    // console.log(browsingHistory);

    var items = browsingHistory.reverse();

    items.map((val, i) => {
      // console.log(val[0]);
      var color = val[0].Url;
      color = color.split('#')[1];
      var promoClass = "promo-teaser-thumb";
      var strike = val[0].Metadata.CompareAtPrice;
      if (strike == val[0].Metadata.Price) {
        strike = "";
        promoClass = "";
      }

      //! QUICK VIEW DOESN'T WORK... KEEPS ADDING MORE ITEMS TO SLIDESHOW
      // var qv = `<span data-href="${url}" data-color="${color}" class="js-qv ">Quick View</span>`;
      // //? ONLY SHOW QUICK VIEW IF NOT ON PDP PAGE
      // var thisPageUrl = window.location.pathname;
      // if(thisPageUrl.indexOf('product') !== -1){
      //   qv = "";
      // }
      var qv = `<span data-href="${val[0].Url}" data-color="${color}" class="js-qv ">Quick View</span>`;

      var elem = `
                        <li>
                            <div class="thumb-grid item">
                                <span class="img">
                                    <a href="${val[0].Url}"
                                        data-hash="" class="browsing-history">
                                        <img class="image" src="${val[0].ImageUrl}" alt="${val[0].Title}" width="500" height="500">
                                    </a>
                                    ${qv}
                                </span>
                                <div class="thumb-content">
                                    <a class="name"
                                        href="${val[0].Url}"
                                        data-hash="" class="browsing-history">
                                        <span class="model">${val[0].Title}</span>
                                    </a>
                        
                                    <div class="price-wrap">
                                        <div class="price">
                                            <strike>${strike}</strike>
                                            <span id="store_price" class="price ${promoClass}">$${val[0].Metadata.Price}</span>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                        </li>
                        `;

      $('.browsing-history ul').append(elem);
    })


    $('.browsing-history').css('opacity', 1);

    //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
    if ($('.browsing-history li').length >= 5 || window.innerWidth < 431) {
      new Glide('.browsing-history .glide', {
        type: 'slider',
        // autoplay: 4000,
        animationDuration: 500,
        perView: 5,
        hoverpause: true,
        gap: 0,
        bound: true,
        rewind: false,
        breakpoints: {
          431: {
            perView: 2,
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

});