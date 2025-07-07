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
        options: {
            outDir: "homepage/" + config.hp.name + "/js/ts2js",
            rootDir: "homepage/" + config.hp.name + "/ts",
        }
    },
    mega: {
        src: ['mega-menu/ts/*.ts', "!node_modules/**"],
        options: {
            outDir: 'mega-menu/js/ts2js',
            rootDir: 'mega-menu/ts',
        }
    },
    zone: {
        src: ['content-zone/' + config.zone.name + '/**/ts/*.ts'],
        options: {
            outDir: 'content-zone/' + config.zone.name + '/js/ts2js',
            rootDir: 'content-zone/' + config.zone.name + '/ts',
        }
    },
    landing: {
        src: ['landing-page/' + config.landing.name + '/**/ts/**/*.ts'],
        options: {
            outDir: 'landing-page/' + config.landing.name + '/js/ts2js',
            rootDir: 'landing-page/' + config.landing.name + '/ts',
        }
    },
    promos: {
        src: ['promos/' + config.promo.name + '/**/ts/**/*.ts'],
        options: {
            outDir: 'promos/' + config.promo.name + '/js/ts2js',
            rootDir: 'promos/' + config.promo.name + '/ts',
        }
    },
};