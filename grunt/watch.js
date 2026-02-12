var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    livereload: true
  },


  mega: {
    files: ['mega-menu/css/*.less', 'mega-menu/dev/**/*.html', /*'mega-menu/ts/*.ts',*/ 'mega-menu/js/*.js'],
    tasks: ['less:mega', /*'ts:mega',*/ 'babel:mega', 'browserify:mega', 'uglify:mega', 'includes:mega', 'htmlmin:mega'],
  },



  zone: {
    files: ['content-zone/' + config.zone.name + '/css/*.less', 'content-zone/' + config.zone.name + '/dev/**/*.html', 'content-zone/' + config.zone.name + '/**/js/*.js'],
    tasks: ['less:zone', /*'ts:zone',*/ 'babel:zone', 'browserify:zone', 'uglify:zone', 'includes:zone', 'htmlmin:zone'],
  },


  hp: {
    files: ['homepage/default/less/**/*.less', 'homepage/default/dev/**/*.html', 'homepage/default/js/*.js'],
    tasks: ['less:hp', /*'ts:hp',*/ 'babel:hp', 'browserify:hp', 'uglify:hp', 'includes:hp', 'htmlmin:hp'],
  },


  categories: {
    files: ['category-pages/' + config.cat.name + '/css/*.less', 'category-pages/' + config.cat.name + '/dev/*.html'],
    tasks: ['less:categories', 'includes:categories', 'htmlmin:categories'],
  },


  landing: {
    files: ['landing-page/' + config.landing.name + '/less/**/*.less', 'landing-page/' + config.landing.name + '/dev/**/*.html', 'landing-page/' + config.landing.name + '/js/*.js'],
    tasks: ['less:landing', /*'ts:landing',*/ 'babel:landing', 'browserify:landing', 'uglify:landing', 'includes:landing', 'htmlmin:landing'],
  },


  promos: {
    files: [`promos/${config.promo.name}/**/*.less`, `promos/${config.promo.name}/dev/**/*.html`, `promos/${config.promo.name}/js/**/*.js`],
    tasks: ['less:promos', /*'ts:promos',*/ 'babel:promos', 'browserify:promos', 'uglify:promos', 'includes:promos', 'htmlmin:promos',],
  },

};