module.exports = function (grunt) {

  // Default task(s).
  grunt.registerTask('hello', function () {
    console.log('hello world from Grunt!');
  });

  grunt.registerTask('read', function () {
    var file = grunt.file.read(`promos/headers/dev/select-styles/css/styles.less`);
    console.log(file);
  })

  require('load-grunt-tasks')(grunt);

  require('load-grunt-config')(grunt);

};