var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

    options: {
        module: "CommonJS",
        target: "es6",
        noImplicitAny: true,
        removeComments: true,
        preserveConstEnums: true,
        sourceMap: true
    },

    hp: {
        // tsconfig: './tsconfig.json'
        src: ["homepage/" + config.hp.name + "/ts/**/*.ts", "!node_modules/**"],
        outDir: "homepage/" + config.hp.name + "/js/ts2js",
    },

    mega: {
        src: ['mega-menu/ts/*.ts', "!node_modules/**"],
        outDir
    },

    zone: {
        src: ['content-zone/' + config.zone.name + '/**/ts/*.ts'],
        outDir: 'content-zone/' + config.zone.name + '/js/ts2js',
    },

    landing: {
        src: ['landing-page/' + config.landing.name + '/**/ts/**/*.ts'],
        outDir: 'landing-page/' + config.landing.name + '/js/ts2js',
    },

    promos: {
        src: ['promos/' + config.promo.name + '/**/ts/**/*.ts'],
        outDir: 'promos/' + config.promo.name + '/js/ts2js',
    },

};