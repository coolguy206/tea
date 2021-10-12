var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    livereload: true
  },


  mega: {
    files: ['mega-menu/css/*.less', 'mega-menu/dev/**/*.html', 'mega-menu/js/*.js'],
    tasks: ['less:mega', 'babel:mega', 'browserify:mega', 'uglify:mega', 'includes:mega', 'htmlmin:mega'],
  },



  zone: {
    files: ['content-zone/' + config.zone.name + '/css/*.less', 'content-zone/' + config.zone.name + '/dev/**/*.html', 'content-zone/' + config.zone.name + '/js/*.js'],
    tasks: ['less:zone', 'purifycss:zone', 'cssmin:zone', 'babel:zone', 'browserify:zone', 'uglify:zone', 'includes:zone', 'htmlmin:zone', ],
  },


  hp: {
    files: ['homepage/default/css/*.less', 'homepage/default/dev/*.html', 'homepage/default/js/*.js'],
    tasks: ['less:hp', /*'purifycss:hp', 'cssmin:hp',*/ 'uncss:hp', 'babel:hp', 'browserify:hp', 'uglify:hp', 'includes:hp', 'htmlmin:hp'],
  },


  categories: {
    files: ['category-pages/' + config.cat.name + '/css/*.less', 'category-pages/' + config.cat.name + '/dev/*.html'],
    tasks: ['less:categories', 'includes:categories'],
  },


  landing: {
    files: ['landing-page/' + config.landing.name + '/css/*.less', 'landing-page/' + config.landing.name + '/dev/*.html', 'landing-page/' + config.landing.name + '/js/*.js'],
    tasks: ['less:landing', 'purifycss:landing', 'cssmin:landing', 'babel:landing', 'browserify:landing', 'uglify:landing', 'includes:landing', 'htmlmin:landing'],
  },


  promos: {
    files: ['promos/' + config.promo.name + '/css/*.less', 'promos/' + config.promo.name + '/dev/*.html'],
    tasks: ['less:promos', 'purifycss:promos', 'cssmin:promos', 'babel:promos', 'uglify:promos', 'includes:promos', 'htmlmin:promos'],
  },

};