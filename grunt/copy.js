var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = function(grunt) {

    return {

        hpCopy: {

            files: [

                {
                    expand: true,
                    cwd: 'homepage/' + config.hp.name + '/css',
                    src: ['*.css'],
                    dest: 'homepage/' + config.hp.name + '/include/'
                },
            ],
        },


        categoriesCopy: {

            files: [

                {
                    expand: true,
                    cwd: 'category-pages/' + config.cat.name + '/css',
                    src: ['*.css'],
                    dest: 'category-pages/' + config.cat.name + '/include/'
                },
            ],
        },


        landingPagesCopy: {

            files: [

                {
                    expand: true,
                    cwd: 'landing-page/' + config.landing.name + '/css',
                    src: ['*.css'],
                    dest: 'landing-page/' + config.landing.name + '/include/'
                },
            ],
        },


        promosCopy: {

            files: [

                {
                    expand: true,
                    cwd: 'promos/' + config.promo.name + '/css',
                    src: ['*.css'],
                    dest: 'promos/' + config.promo.name + '/include/'
                },
            ],
        },


    }
};