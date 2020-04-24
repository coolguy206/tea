$(document).ready(function() {

  const content = [{
      pink: 'GREECE',
      blue: 'METAdrasi',
      url: 'https://blog.teacollection.com/2020/01/18/let-kids-be-kids-meet-magda-of-metadrasi/'
    },
    {
      pink: 'BAJA, MEXICO',
      blue: 'Door of Faith Orphanage',
      url: 'https://blog.teacollection.com/2019/12/05/giving-tuesday-giving-back-for-good/'
    },
    {
      pink: 'SaN FRANCISCO, CALIFORNIA',
      blue: 'Homeless Prenatal Program',
      url: 'https://blog.teacollection.com/2019/11/06/tea-donates-12000-units-to-the-homeless-prenatal-program/'
    },
    {
      pink: 'NEPAL',
      blue: 'LITTLE SISTERS FUND',
      url: 'https://blog.teacollection.com/little-sisters-fund'
    },
    {
      pink: 'NORTH AMERICA',
      blue: 'RAICES',
      url: 'https://www.facebook.com/teacollection/posts/10160612162615327'
    },
    {
      pink: 'ITALY',
      blue: 'Citizens FC tournament',
      url: 'https://blog.teacollection.com/category/citizens-fc/'
    },
    {
      pink: 'HAITI',
      blue: 'SAKALA',
      url: 'https://blog.teacollection.com/sakala-gfc'
    },
    {
      pink: 'PERU',
      blue: 'Asociación Civil Los Pioneros',
      url: 'https://blog.teacollection.com/los-pioneros'
    },
    {
      pink: 'INDIA',
      blue: 'Gram Bharati Samiti',
      url: 'https://blog.teacollection.com/gfc-gbs'
    },
  ];

  var theContent = '';

  const baseUrl = '/mas_assets/media/tea_collection/landing-pages/give-back/2020/0116/v0/';

  $.each(content, function(i, val) {
    var num = i + 1;
    var elem = `
    <div>
		  <a href="${val.url}" target="_blank">
        <img src="${baseUrl}c3-${num}.png" alt="${val.blue}">
		    <span>${val.pink}</span>
		    <h3>${val.blue}</h3>
      </a>
		</div>`;
    theContent = theContent + elem;
  });

  $('.values-wrap .c3').append(theContent);

});