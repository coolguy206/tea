var config = require("./../gruntConfig.js");
// console.log(config.landing);

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
    cwd: 'promos/' + config.promo.name + '/js/babel/',
    src: ['*.js'],
    dest: 'promos/' + config.promo.name + '/js/jsmin/',
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