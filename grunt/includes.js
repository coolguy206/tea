var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    flatten: true
  },



  mega: {

    files: [
      //toolkit
      {
        cwd: 'mega-menu/dev/',
        src: ['*.html', 'black-friday/*.html', 'select-styles/*.html'],
        dest: 'mega-menu/includes/',
      },
    ],

  },



  zone: {

    files: [
      //content zone toolkit
      {
        cwd: 'content-zone/' + config.zone.name + '/dev',
        src: ['*.html', 'black-friday/desktop/*.html', 'black-friday/mobile/*.html', 'desktop/*.html', 'mobile/*.html', 'sale/desktop/*.html', 'sale/mobile/*.html'],
        dest: 'content-zone/' + config.zone.name + '/includes/',
      },
    ],

  },


  hp: {

    files: [
      //home toolkit
      {
        cwd: 'homepage/' + config.hp.name + '/dev',
        src: ['*.html'],
        dest: 'homepage/' + config.hp.name + '/includes/',
      },
    ],

  },


  categories: {

    files: [
      //categories toolkit
      {
        cwd: 'category-pages/' + config.cat.name + '/dev',
        src: ['*.html'],
        dest: 'category-pages/' + config.cat.name + '/includes/'
      },
    ],

  },


  landing: {

    files: [
      // landing pages toolkit
      {
        cwd: 'landing-page/' + config.landing.name + '/dev',
        src: ['**/*.html'],
        dest: 'landing-page/' + config.landing.name + '/includes/'
      },
    ],

  },


  promos: {

    files: [
      // promo toolkit
      {
        cwd: `promos/${config.promo.name}/dev`,
        src: ['**/*.html'],
        dest: 'promos/' + config.promo.name + '/includes/',
      },
    ]
  },

};
