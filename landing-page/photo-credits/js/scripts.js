$(document).ready(function () {

  console.log('ready');

  var p = [];
  const Photographer = function (title, location, name) {
    this.title = title;
    this.location = location;
    this.name = name;
  }

  let priscilla = new Photographer('Spring Summer 2025 Collection', 'Brazil Location Photography', 'Priscilla Gragg');
 
  let charlotte = new Photographer('Fall Winter 2024 Collection', 'Turkey Location Photography', 'Charlotte Cohen');

  let od = new Photographer('Spring/Summer 2024', 'Kenya Location Photography', 'Odedeodede +<a href="https://www.instagram.com/199xorg/" target="_blank">199xorg</a>');

  let mariani = new Photographer('Fall Winter 2023 Collection', 'France Location Photography', 'Mariani Troiani');

  let maria_1 = new Photographer('Spring/Summer 2023', 'Mexico Location Photography', 'María Esme del Río');

  let nanako = new Photographer('Fall Winter 2022 Collection', 'Japan Location Photography', 'Nanako -a');

  let taryn_1 = new Photographer('Spring/Summer 2022', 'Caribbean Location Photography', 'Taryn Elledge-Penner of Quartier Collective');

  let taryn_2 = new Photographer('Fall Winter 2021 Collection', 'Sweden Location Photography', 'Taryn Elledge-Penner of Quartier Collective');

  let taryn_3 = new Photographer('Spring/Summer 2021', 'Portugal Location Photography', 'Taryn Elledge-Penner of Quartier Collective');

  let taryn_4 = new Photographer('Spring/Summer 2020', 'Mediterranean Location Photography', 'Taryn Elledge-Penner of Quartier Collective');

  let laurie = new Photographer('Fall Winter 2019 Collection', 'Nepal Location Photography', 'Laurie Frankel');

  let hamada_1 = new Photographer('Fall Winter 2017 Collection', 'Scotland Location Photography', 'Hamada Hideaki');

  let hamada_2 = new Photographer('Fall Winter 2016 Collection', 'Japan Location Photography', 'Hamada Hideaki');

  let maria_2 = new Photographer('', 'Studio Photography', 'María Esme del Río');

  p.push(priscilla, charlotte, od, mariani, maria_1, nanako, taryn_1, taryn_2, taryn_3, taryn_4, laurie, hamada_1, hamada_2, maria_2 );

  var html = ``;
  $(p).each(function(i, val){
    console.log(i, val);
    var str = ``;
    if(val.title == ''){
      str = `<div><h2>${val.location}</h2><p>${val.name}</p></div>`;
    } else {
      str = `<div><h2>${val.title}</h2><p>${val.location}</p><p>${val.name}</p></div>`;
    }
    html = html + str;
  });

  // console.log(html)
  $('.photographers').append(html);

}); 
