$(document).ready(function() {
  //popular vs trending
  var id = '8286a49c-84e0-11ea-91cc-002590d1a41a';
  // console.log(id);

  //viewed vs purchased
  // var id = `134796ac-8591-11ea-b811-002590d1a41a`;

  Sailthru.init({
    customerId: '856bfba3e6c8f69c9faad446ffedbce0',
    isCustom: true,
  });


  Sailthru.personalize({

    sections: [{
      id: id
    }],
    vars: {},
    onSuccess: function(data) {
      //console.log(data);

      var jsonArr = JSON.parse(data[id].json);

      // console.log(typeof jsonArr);
      // console.log(jsonArr);

      $.each(jsonArr, function(i, val) {

        var url = val.url;
        var img = val.image;
        var price = val.price;
        price = price / 100;
        price = price.toFixed(2);
        var title = val.title;

        console.log(url, img, price, title);
        if (url !== undefined && url.indexOf('teashowroom') == -1 && url.indexOf('sandbox.') == -1) {
          console.log('tea pdp');
          if (img !== undefined && price !== undefined && title !== undefined) {
            var elem = `
            <li>
              <a href="${url}">
                <img src="${img}" alt="${title}">
              </a>
              <h3>
                <a href="${url}">${title}</a>
              </h3>
              <p>
                <span class="sale_price">$${price}</span>
              </p>
            </li>`;

            $('.sailthru-list').append(elem);
          }

        }


      });

      $('.sailthru-list').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 300,
        moveSlides: 1,
        controls: true,
        nextText: '<span class="fas fa-chevron-right"></span>',
        prevText: '<span class="fas fa-chevron-left"></span>',
        pager: false
      });

    },
    onError: function(err) {
      console.log(err);
    }

  });

});