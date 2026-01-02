var config = require("../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

    options: {
        // This option removes HTML comments
        removeComments: true,
        // Optional: also remove whitespace
        // collapseWhitespace: true
    },

    hp: {
        expand: true,
        cwd: 'homepage/' + config.hp.name + '/includes/',
        src: 'content.html',
        dest: 'homepage/' + config.hp.name + '/htmlmin/'
    },

    //   landing: {
    //     files: [{
    //       expand: true,
    //       cwd: 'landing-page/' + config.landing.name + '/js/',
    //       src: ['job-descriptions/*.js' , '*.js'],
    //       dest: 'landing-page/' + config.landing.name + '/js/babel/'
    //     }]
    //   },

    zone: {
        expand: true,
        cwd: 'content-zone/' + config.zone.name + '/includes/',
        src: 'content.html',
        dest: 'content-zone/' + config.zone.name + '/htmlmin/'
    },

    //   promos: {
    //     files: [{
    //       expand: true,
    //       cwd: promosSrc,
    //       src: '*.js',
    //       dest: promosDest
    //     }]
    //   },

    //   mega: {
    //     files: [{
    //       expand: true,
    //       cwd: 'mega-menu/js/',
    //       src: '*.js',
    //       dest: 'mega-menu/js/babel/'
    //     }]
    //   },


};