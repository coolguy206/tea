import { urls } from './urls';

$(document).ready(function () {
  const href = window.location.pathname;

  // Map each route to its corresponding index and key inside your exported urls array
  const routeMap = {
    '/swimwear': urls[0].default,
    '/girls-swimsuits-swimwear': urls[1].girl,
    '/boys-swimwear': urls[2].boy,
    '/baby-swimwear': urls[3].baby,
    '/toddler-swimwear': urls[4].toddler
  };

  const makeCtas = (arr) => {
    if (!arr) return; 

    arr.forEach((val) => {
      const lowerText = val.text.toLowerCase().trim();
      const targetWords = ['girl', 'boy', 'toddler', 'family'];
      
      const displayText = targetWords.includes(lowerText) ? `Shop ${val.text}` : val.text;

      const elem = `<a href="${val.url}" class="">
                    <div class="the-cta">
                      <span class="cta-border a">${displayText}</span>
                    </div>
                  </a>`;
                  
      $(`.container-promo-header .the-content.select-styles`).append(elem);
    });
  };

  // Dynamically passes the correct array using the adjusted routeMap
  makeCtas(routeMap[href]);
});