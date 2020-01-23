var config = require("./../gruntConfig.js");
// console.log(config.promo.htmlmin);

module.exports = {
    options: {
        removeComments: true,
        collapseWhitespace: true
    },

    hp: {
        files: [{
            expand: true,
            cwd: 'homepage/' + config.hp.name + '/includes/',
            src: '*.html',
            dest: 'homepage/' + config.hp.name + '/toolkit/'
        }]
    },

    landing: {
        files: [{
            expand: true,
            cwd: 'landing-page/' + config.landing.name + '/includes/',
            src: '*.html',
            dest: 'landing-page/' + config.landing.name + '/toolkit/'
        }]
    },

    zone: {
        files: [{
            expand: true,
            cwd: 'content-zone/' + config.zone.name + '/includes/',
            src: '*.html',
            dest: 'content-zone/' + config.zone.name + '/toolkit/'
        }]
    },

    promos: {
        files: [{
            expand: true,
            cwd: 'promos/' + config.promo.name + '/includes/',
            src: '*.html',
            dest: 'promos/' + config.promo.name + '/toolkit/'
        }]
    },

};