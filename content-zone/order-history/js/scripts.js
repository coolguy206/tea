
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  var orderHistory = window.localStorage.getItem('orderHistory');

  var orderHistoryLength = $('.buy-again li').length;
  console.log(`orderHistoryLength: ${orderHistoryLength}`)

  if (orderHistory !== null && orderHistoryLength == 0) {

    orderHistory = JSON.parse(orderHistory);
    // console.log(orderHistory);
    var num = ``;
    if (orderHistory.length == 1) {
      num = 0;
    } else {
      num = orderHistory.length - 1;
    }

    // var items = orderHistory[num].items.reverse();
    var items = orderHistory[num].items;

    items.map((val, i) => {
      // console.log(val[0]);
      var color = val.variant;

      var price = Number(val.price);
      price = price.toFixed(2);

      var url = `/product/${val.id}/#${color}`;


      //! QUICK VIEW DOESN'T WORK... KEEPS ADDING MORE ITEMS TO SLIDESHOW
      // var qv = `<span data-href="${url}" data-color="${color}" class="js-qv ">Quick View</span>`;
      // //? ONLY SHOW QUICK VIEW IF NOT ON PDP PAGE
      // var thisPageUrl = window.location.pathname;
      // if(thisPageUrl.indexOf('product') !== -1){
      //   qv = "";
      // }
      
      var qv = `<span data-href="${url}" data-color="${color}" class="js-qv ">Quick View</span>`;

      var elem = `
                        <li>
                            <div class="thumb-grid item">
                                <span class="img">
                                    <a href="${url}"
                                        data-hash="">
                                        <img class="image" src="${val.img}" alt="${val.name}" width="500" height="500">
                                    </a>
                                    ${qv}
                                </span>
                                  
                                <div class="thumb-content">
                                    <a class="name"
                                        href="${url}"
                                        data-hash="">
                                        <span class="model">${val.name}</span>
                                    </a>
                        
                                    <div class="price-wrap">
                                        <div class="price">
                                            <span id="store_price" class="price">$${price}</span>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                        </li>
                        `;

      $('.buy-again ul').append(elem);
    })


    $('.buy-again').css('opacity', 1);

    //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER 0R IF MOBILE
    if($('.buy-again li').length >= 5 || window.innerWidth < 431){
      new Glide('.buy-again .glide', {
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
      $('.buy-again div[data-glide-el="controls"]').hide();
      $('.buy-again ul').addClass('width-300');
    }

   

  } else {
    $('.buy-again').hide();
  }

  inview('.buy-again');

});