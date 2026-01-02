var config = require("../gruntConfig.js");
// console.log(config.promo.date);

// var promosDest = ``;
// if (config.promo.js !== ``) {
//     promosSrc = `promos/${config.promo.name}/dev/${config.promo.js}/js/`;
//     promosDest = `promos/${config.promo.name}/dev/${config.promo.js}/js/babel/`;
// } else {
//     promosSrc = `promos/${config.promo.name}/js/`;
//     promosDest = `promos/${config.promo.name}/js/babel/`;
// }
// console.log(promosSrc, promosDest);

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

    // promos: {
    //     expand: true,
    //     cwd: `promos/${config.promo.name}/includes/`,
    //     src: 'content.html',
    //     dest: `promos/${config.promo.name}/includes/`
    // },

    //   mega: {
    //     files: [{
    //       expand: true,
    //       cwd: 'mega-menu/js/',
    //       src: '*.js',
    //       dest: 'mega-menu/js/babel/'
    //     }]
    //   },


};