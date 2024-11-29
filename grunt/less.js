var config = require("./../gruntConfig.js");
// console.log(config.landing);

var promosDest = ``;
if(config.promo.css !== ``){
    promosDest = `promos/${config.promo.name}/dev/${config.promo.css}/css/`;
} else {
    promosDest = `promos/${config.promo.name}/css/`
}
// console.log(promosDest);

module.exports = {

    options: {
        // sourceMap: true,
        compress: true,
    },


    mega: {
        expand: true,
        cwd: 'mega-menu/css/',
        src: '*.less',
        dest: 'mega-menu/css/',
        ext: '.css',
    },


    zone: {
        expand: true,
        cwd: 'content-zone/' + config.zone.name + '/css/',
        src: '*.less',
        dest: 'content-zone/' + config.zone.name + '/css/',
        ext: '.css',
    },


    hp: {
        expand: true,
        cwd: 'homepage/' + config.hp.name + '/css/',
        src: '**/*.less',
        dest: 'homepage/' + config.hp.name + '/css/',
        ext: '.css',

    },


    categories: {
        expand: true,
        cwd: 'category-pages/' + config.cat.name + '/css/',
        src: '*.less',
        dest: 'category-pages/' + config.cat.name + '/css/',
        ext: '.css',
    },

    landing: {
        expand: true,
        cwd: 'landing-page/' + config.landing.name + '/css/',
        src: '*.less',
        dest: 'landing-page/' + config.landing.name + '/css/',
        ext: '.css',
    },


    promos: {
        expand: true,
        cwd: promosDest,
        src: ['**/*.less'],
        dest: promosDest,
        ext: '.css',
    },

};
