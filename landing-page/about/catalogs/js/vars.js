const key = require('./key.js');

module.exports = {
    baseUrl: `https://api.issuu.com/1_0`,
    access: `access=public`,
    a1: function() {
        return this.access.replace(/=/g, '');
    },
    action: `action=issuu.documents.list`,
    a2: function() {
        return this.action.replace(/=/g, '');
    },
    format: `format=json`,
    f: function() {
        return this.format.replace(/=/g, '');
    },
    pageSize: `pageSize=`,
    p: function() {
        return this.pageSize.replace(/=/g, '');
    },
    issu: `https://issuu.com/teacollection/docs/`,
};