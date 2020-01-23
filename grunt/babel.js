var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

    options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
    },

    hp: {
        files: [{
            expand: true,
            cwd: 'homepage/' + config.hp.name + '/js/',
            src: '*.js',
            dest: 'homepage/' + config.hp.name + '/js/babel/'
        }]
    },

    landing: {
        files: [{
            expand: true,
            cwd: 'landing-page/' + config.landing.name + '/js/',
            src: '*.js',
            dest: 'landing-page/' + config.landing.name + '/js/babel/'
        }]
    },

    zone: {
        files: [{
            expand: true,
            cwd: 'content-zone/' + config.zone.name + '/js/',
            src: '*.js',
            dest: 'content-zone/' + config.zone.name + '/js/babel/'
        }]
    },

    promos: {
        files: [{
            expand: true,
            cwd: 'promos/' + config.promo.name + '/js/',
            src: '*.js',
            dest: 'promos/' + config.promo.name + '/js/babel/'
        }]
    },

};