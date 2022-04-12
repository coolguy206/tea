var config = require("./../gruntConfig.js");
require('dotenv').config()
// console.log(config.hp);
// console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);
// console.log(`homepage/${config.hp.ftp.css.src}`);

var baseURL = `media/tea_collection/`;

module.exports = {
  hpCSS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.hp.ftp.css.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'homepage/default/css/',
      src: [
        "*.css",
      ]
    }]
  },

  hpJS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.hp.ftp.js.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'homepage/default/js/jsmin/',
      src: [
        "scripts.min.js",
      ]
    }]
  },

  promoCSS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.promo.ftp.css.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'promos/default/css/',
      src: [
        "*.css",
      ]
    }]
  },

  promoJS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.promo.ftp.js.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'promos/default/js/jsmin/',
      src: [
        "*.js",
      ]
    }]
  },

  megaMenuCSS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.megaMenu.ftp.css.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'mega-menu/css/',
      src: [
        "*.css",
      ]
    }]
  },

  megaMenuJS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.megaMenu.ftp.js.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'mega-menu/js/jsmin/',
      src: [
        "*.js",
      ]
    }]
  },

};