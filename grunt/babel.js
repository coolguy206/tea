var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

var promosDest = ``;
if (config.promo.js !== ``) {
  promosSrc = `promos/${config.promo.name}/dev/${config.promo.js}/js/`;
  promosDest = `promos/${config.promo.name}/dev/${config.promo.js}/js/babel/`;
} else {
  promosSrc = `promos/${config.promo.name}/js/`;
  promosDest = `promos/${config.promo.name}/js/babel/`;
}
// console.log(promosSrc, promosDest);

module.exports = {

  options: {
    // sourceMap: true,
    presets: ['@babel/preset-typescript', '@babel/preset-env'],
    // only: ['*.js']
  },

  hp: {
    files: [{
      expand: true,
      cwd: 'homepage/' + config.hp.name + '/js/',
      src: '*.js',
      dest: 'homepage/' + config.hp.name + '/js/babel/'
    }]
  },

  landing: {
    files: [{
      expand: true,
      cwd: 'landing-page/' + config.landing.name + '/js/',
      src: ['job-descriptions/*.js' , '*.js'],
      dest: 'landing-page/' + config.landing.name + '/js/babel/'
    }]
  },

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/js/',
      src: '*.js',
      dest: 'content-zone/' + config.zone.name + '/js/babel/'
    }]
  },

  promos: {
    files: [{
      expand: true,
      cwd: promosSrc,
      src: '*.js',
      dest: promosDest
    }]
  },

  mega: {
    files: [{
      expand: true,
      cwd: 'mega-menu/js/',
      src: '*.js',
      dest: 'mega-menu/js/babel/'
    }]
  },


};