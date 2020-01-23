var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

    options: {
        //sourceMap:true,
    },

    hp: {
        files: [{
            expand: true,
            cwd: 'homepage/' + config.hp.name + '/css/',
            src: '*.css',
            dest: 'homepage/' + config.hp.name + '/css/cssmin/',
            ext: '.min.css'
        }]
    },

    landing: {
        files: [{
            expand: true,
            cwd: 'landing-page/' + config.landing.name + '/css/purify/',
            src: '*.css',
            dest: 'landing-page/' + config.landing.name + '/css/cssmin/'
        }]
    },

    zone: {
        files: [{
            expand: true,
            cwd: 'content-zone/' + config.zone.name + '/css/purify/',
            src: '*.css',
            dest: 'content-zone/' + config.zone.name + '/css/cssmin/'
        }]
    },

    promos: {
        files: [{
            expand: true,
            cwd: 'promos/' + config.promo.name + '/css/purify/',
            src: '*.css',
            dest: 'promos/' + config.promo.name + '/css/cssmin/'
        }]
    }

};