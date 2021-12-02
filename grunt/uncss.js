var config = require("./../gruntConfig.js");
// console.log(typeof config.promo.name);

module.exports = {

  hp: {
    files: {
      'homepage/default/css/uncss/styles.css': ['homepage/default/includes/content-uncss.html']
    }
  },

  promos: {
    files: [{
      // nonull: true,
      src: ['promos/' + config.promo.name + '/includes/content-uncss.html'],
      dest: 'promos/' + config.promo.name + '/css/uncss/styles.css'
    }]
  },

  landing: {
    files: [{
      // nonull: true,
      src: ['landing-page/' + config.landing.name + '/includes/content-uncss.html'],
      dest: 'landing-page/' + config.landing.name + '/css/uncss/styles.css'
    }]
  },

};