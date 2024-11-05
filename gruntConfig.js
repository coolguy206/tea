var date = `0420`;
var version = `v0`;

module.exports = {

  hp: {
    name: 'default',
    ftp: {
      css: {
        src: 'default/css/uncss/',
        dest: `homepage/2022/${date}/css/${version}/`,
        file: 'styles.css'
      },
      js: {
        src: 'default/js/jsmin/',
        dest: `homepage/2022/${date}/js/${version}/`,
        file: 'scripts.min.js'
      }
    },
  },
  megaMenu: {
    ftp: {
      css: {
        src: 'css/',
        dest: `mega-menu/2022/${date}/css/${version}/`,
      },
      js: {
        src: 'js/jsmin/',
        dest: `mega-menu/2022/${date}/js/${version}/`,
      }
    },
  },
  cat: {
    name: 'default'
  },
  landing: {
    name: 'about/catalogs'
  },
  zone: {
    name: 'sliders/new-arrivals/girl',
    ftp: {
      css: {
        src: 'mega-menu/top-nav/css/',
        dest: `content-zone/mega-menu/top-nav/2022/${date}/css/${version}/`,
      },
      js: {
        src: 'mega-menu/top-nav/js/jsmin/',
        dest: `content-zone/mega-menu/top-nav/2022/${date}/js/${version}/`,
      }
    },
  },
  promo: {
    name: 'headers',
    ftp: {
      css: {
        src: 'default/css/',
        dest: `promos/one-offs/2022/${date}/css/${version}/`,
      },
      js: {
        src: 'default/js/jsmin/',
        dest: `promos/one-offs/2022/${date}/js/${version}/`,
      }
    },
  }

};
