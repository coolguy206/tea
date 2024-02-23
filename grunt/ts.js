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
        src: ["homepage/" + config.hp.name + "/ts/**/*.ts", "!node_modules/**"]
    },

    mega: {
        src: ['mega-menu/ts/*.ts', "!node_modules/**"],
    },

    zone: {
        src: ['content-zone/' + config.zone.name + '/ts/*.ts'],
    },

    landing: {
        src: ['landing-page/' + config.landing.name + '/ts/**/*.ts'],
    },

    promos: {
        src: ['promos/' + config.promo.name + '/ts/**/*.ts'],
    },

};