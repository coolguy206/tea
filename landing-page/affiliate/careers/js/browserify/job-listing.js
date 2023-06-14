(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountingManager = void 0;
var accountingManager = {
  title: "Accounting Manager",
  header: "We are looking for an experienced and thoughtful Accounting Manager. Core responsibilities will\n    be owning the month-end close, managing lending relationships, and supporting the tax firm.\n    \n    Ideal candidate is in one of the following states: NY, VA, KY, ID, CA, TX, FL",
  pay: "Pay Range:\n    $90,000-120,000USD",
  duties: ["Manage and oversee monthly and quarterly financial close process, including journal entries\nfrom ERP system, account reconciliations, and account analysis", "Responsible for monthly executive reporting, key fiscal management through reconciliations,\nand bookkeeping", "Manage ABL lender requests for week-to-week reporting and cash management", "Establish and maintain internal controls and guidelines for accounting transactions and\nbudgetary analysis", "Manage staff accountant and any accounting-related contractors supporting the brand", "Oversee preparation of business activity reports, financial forecasts and annual budgets; work\nclosely with Director of Finance to inform forecasting", "Oversee the production of periodic financial reports; ensure that the reported results comply\nwith US GAAP and financial reporting standards", "Work with our CPA firm on tax planning for the fiscal year and assist them in the process of\nannual corporate tax returns", "Audit accounts to ensure compliance with state and federal regulations; coordinates with\noutside auditors and provide needed information for the annual external audit", "Present recommendations to leadership on short and long term financial objectives and\npolicies.", "Provide financial analysis with an emphasis on pricing decisions and contract negotiations", "Performs other related duties as necessary or assigned"],
  qualifications: ["10 + years of experience in Accounting and in an Accounting Manager or Controller capacity", "Strong understanding of US GAAP and financial accounting software including QBO", "Strong grasp of financial planning, analysis, and modeling - past experience includes cash flow\nmodeling, revenue forecasting and full cycle budgeting", "E - commerce and / or CPG experience and background is required", "Strong experience with inventory management", "Experience working with lenders, external auditors and tax accountants", "Excellent analytical and communication skills", "Synthesize meaningful themes from quantitative and qualitative data, and the ability to discuss\nthese findings with senior management", "Problem solver; solutions - first mindset", "Ability to effectively prioritize and manage multiple priorities at once", "Advanced in: QBO, Excel, Google Sheets and Powerpoint", "Nice to have: CPA, fashion and apparel budgeting"],
  footer: "Please email a cover letter and resume to hr@teacollection.com for consideration.\n\n    Tea is an equal opportunity employer.All qualified applicants will receive consideration for\n    employment without regard to age, ancestry, color, family or medical care leave, gender identity\n    or expression, genetic information, marital status, medical condition, national origin, physical or\n    mental disability, political affiliation, protected veteran status, race, religion, sex(including\n    pregnancy), sexual orientation, or any other characteristic protected by applicable laws,\n        regulations, and ordinances."
};
exports.accountingManager = accountingManager;


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;

var _accountingManager = require("./accounting-manager.js");

var jobs = [_accountingManager.accountingManager];
exports.jobs = jobs;


},{"./accounting-manager.js":1}]},{},[2]);
