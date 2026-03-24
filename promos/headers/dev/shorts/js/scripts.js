import { urls } from './urls';

$(document).ready(function () {
  // console.log(urls);

  const href = window.location.pathname;
  let elem = ``;

  const makeCtas = (arr) => {
    arr.map((val, i) => {
      // console.log(val.text);
      // console.log(val.url);
      elem = `<a href="${val.url}" class="">
                  <div class="the-cta">
                    <span class="cta-border a">${val.text}</span>
                  </div>
                </a>`
      $(`.container-promo-header .the-content.select-styles`).append(elem);
    });
  };

  switch (href) {

    case '/baby-shorts-pants':
      //code here
      makeCtas(urls[0].baby);

      break;

    case '/toddler-shorts-pants':
      //code here
      makeCtas(urls[1].toddler);

      break;
  };


});