"use strict";

var key = require('./key.js');
module.exports = {
  baseUrl: "https://api.issuu.com/1_0",
  access: "access=public",
  a1: function a1() {
    return this.access.replace(/=/g, '');
  },
  action: "action=issuu.documents.list",
  a2: function a2() {
    return this.action.replace(/=/g, '');
  },
  format: "format=json",
  f: function f() {
    return this.format.replace(/=/g, '');
  },
  pageSize: "pageSize=",
  p: function p() {
    return this.pageSize.replace(/=/g, '');
  },
  issu: "https://issuu.com/teacollection/docs/"
};
//# sourceMappingURL=vars.js.map
