var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

var promosDest = ``;
if (config.promo.js !== ``) {
  promosSrc = `promos/${config.promo.name}/dev/${config.promo.js}/js/babel/`;
  promosDest = `promos/${config.promo.name}/dev/${config.promo.js}/js/browserify/`;
} else {
  promosSrc =  `promos/${config.promo.name}/js/babel/`;
  promosDest = `promos/${config.promo.name}/js/browserify/`;
}
// console.log(promosSrc, promosDest);

module.exports = {

  hp: {
    files: [{
      expand: true,
      cwd: 'homepage/' + config.hp.name + '/js/babel/',
      src: '*.js',
      dest: 'homepage/' + config.hp.name + '/js/browserify/'
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

  landing: {
    files: [{
      expand: true,
      cwd: 'landing-page/' + config.landing.name + '/js/babel/',
      src: '*.js',
      dest: 'landing-page/' + config.landing.name + '/js/browserify/'
    }]
  },

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/js/babel/',
      src: '*.js',
      dest: 'content-zone/' + config.zone.name + '/js/browserify/'
    }]
  },

  mega: {
    files: [{
      expand: true,
      cwd: 'mega-menu/js/babel/',
      src: '*.js',
      dest: 'mega-menu/js/browserify/'
    }]
  },

};