var config = require("./../gruntConfig.js");
// console.log(config.landing);

var promosDest = ``;
if (config.promo.js !== ``) {
  promosSrc = `promos/${config.promo.name}/dev/${config.promo.js}/js/browserify/`;
  promosDest = `promos/${config.promo.name}/dev/${config.promo.js}/js/jsmin/`;
} else {
  promosSrc =  `promos/${config.promo.name}/js/browserify/`;
  promosDest = `promos/${config.promo.name}/js/jsmin/`;
}
// console.log(promosSrc, promosDest);

module.exports = {

  options: {
    compress: true,
    // sourceMap: true
  },

  hp: {
    //dynamic files
    expand: true,
    cwd: 'homepage/default/js/browserify/',
    src: ['*.js'],
    dest: 'homepage/default/js/jsmin/',
    ext: '.min.js',
  },


  landing: {
    //dynamic files
    expand: true,
    cwd: 'landing-page/' + config.landing.name + '/js/browserify/',
    src: ['*.js'],
    dest: 'landing-page/' + config.landing.name + '/js/jsmin/',
    ext: '.min.js',
  },

  zone: {
    //dynamic files
    expand: true,
    cwd: 'content-zone/' + config.zone.name + '/js/browserify/',
    src: ['*.js'],
    dest: 'content-zone/' + config.zone.name + '/js/jsmin/',
    ext: '.min.js',
  },

  promos: {
    //dynamic files
    expand: true,
    cwd: promosSrc,
    src: ['*.js'],
    dest: promosDest,
    ext: '.min.js',
  },

  mega: {
    //dynamic files
    expand: true,
    cwd: 'mega-menu/js/browserify/',
    src: ['*.js'],
    dest: 'mega-menu/js/jsmin/',
    ext: '.min.js',
  },

};