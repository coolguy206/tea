var config = require("./../gruntConfig.js");
// console.log(config.landing);
var promoCSS = config.promo.css;

var promosSrc = ``;
var promosDest = ``;
if (config.promo.css !== ``) {
    if (promoCSS.indexOf('/') !== -1) {
        promoCSS = promoCSS.split('/');
        var slashCount = promoCSS.length;
        if (slashCount == 3) {
            promosSrc = `promos/${config.promo.name}/dev/${promoCSS[0]}/${promoCSS[1]}/${promoCSS[2]}/less/`;
            promosDest = `promos/${config.promo.name}/dev/${promoCSS[0]}/${promoCSS[1]}/${promoCSS[2]}/css/`;
        } else {
            promosSrc = `promos/${config.promo.name}/dev/${promoCSS[0]}/${promoCSS[1]}/less/`;
            promosDest = `promos/${config.promo.name}/dev/${promoCSS[0]}/${promoCSS[1]}/css/`;
        }

    } else {
        promosSrc = `promos/${config.promo.name}/dev/${config.promo.css}/less/`;
        promosDest = `promos/${config.promo.name}/dev/${config.promo.css}/css/`;
    }

} else {
    promosSrc = `promos/${config.promo.name}/less/`
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
        cwd: 'mega-menu/less/',
        src: '*.less',
        dest: 'mega-menu/css/',
        ext: '.css',
    },


    zone: {
        expand: true,
        cwd: 'content-zone/' + config.zone.name + '/less/',
        src: '*.less',
        dest: 'content-zone/' + config.zone.name + '/css/',
        ext: '.css',
    },


    hp: {
        expand: true,
        cwd: 'homepage/' + config.hp.name + '/less/',
        src: '**/*.less',
        dest: 'homepage/' + config.hp.name + '/css/',
        ext: '.css',

    },


    categories: {
        expand: true,
        cwd: 'category-pages/' + config.cat.name + '/less/',
        src: '*.less',
        dest: 'category-pages/' + config.cat.name + '/css/',
        ext: '.css',
    },

    landing: {
        expand: true,
        cwd: 'landing-page/' + config.landing.name + '/less/',
        src: '*.less',
        dest: 'landing-page/' + config.landing.name + '/css/',
        ext: '.css',
    },


    promos: {
        expand: true,
        cwd: promosSrc,
        src: ['**/*.less'],
        dest: promosDest,
        ext: '.css',
    },

};
