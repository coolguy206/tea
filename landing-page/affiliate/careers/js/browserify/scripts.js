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
exports.associateBusinessSystemsAnalyst = void 0;
var associateBusinessSystemsAnalyst = {
  title: "Associate Business Systems Analyst",
  header: "We are looking for an experienced and thoughtful Associate Business Systems Analyst. \n    \n    Core responsibilities are to assist in monitoring & maintaining Tea\u2019s business operations systems, from XML and EDI transmissions reporting to Style Data Management \u2013 and everything in between. Together with your teammates, you\u2019ll prioritize business goals and information needs, monitor system components, perform system diagnostics and conduct preventative maintenance. You\u2019ll work in an individual contributor role, responsible for managing problems for the organization that have anything from a low to critical impact on the business.\n    Managing system upgrades and being a valued thought partner with end users and teams is an essential part of this role.\n    \n    Ideal candidates can be remote from one of the following states: NY, VA, KY, ID, CA, TX, FL",
  pay: "Pay Range:\n    $55,000-70,000USD",
  duties: ["Monitor day-to-day systems processes and reporting to support product data integrity,\norder entry, order fulfillment and operations, including all data flows between ERP,\nwebsite, and warehouse management systems", "Accurately and efficiently help to identify system issues and assign appropriate priority", "Create new users in the system and provide initial training to login and ensure proper security setup based on previous user profiles", "Provide guidance and training on internal tools functionality to end users", "Help test system changes to ensure system quality, including assisting with releases for all ERP software products (Blue Cherry ERP, Threadvine, PLM)", "Provide documentation on system issues through our third-party ticketing system,\nincluding step by step instructions on how to reproduce the issue and detailed\ndocumentation on", "Accountable for issue resolution; serving as the primary point of contact for reported issues \u2013 including full responsibility for troubleshooting issue, working with external development team on issue resolution and providing feedback back to stakeholders on issue mitigation and resolution", "Manage end of month system close, including all process from end of month data to\nreceipts & inventory processing", "Monitor and ensure style data accuracy and data transmissions", "Own outcomes across Tea\u2019s ERP system", "Manage annual check-ins with cross-functional teams utilizing Tea\u2019s ERP system to\nensure growth and progress in acute areas", "Spearhead and project manage any version upgrades for Tea\u2019s ERP system", "Special projects, as needed"],
  qualifications: ["Experience monitoring and maintaining day-to-day system processes and reporting to support daily business operations, preferably with an ERP system", "2+ years of XML and EDI file processing and troubleshooting, preferable", "2+ years of problem management, ideally using ticketing systems and reporting\npreferable", "Excellent Microsoft Excel skills", "Works well with others, including cross-functional teams", "Excellent attention to detail", "Strong time management skills", "Technical Bachelor's degree, preferred", "Exposure to BlueCherry ERP and Threadvine or B2B software, a plus", "Product Life Management (PLM) experience, a plus", "Helpdesk or tech support experience, a plus", "Apparel ecommerce experience, a plus"],
  footer: "Please email a cover letter and resume to hr@teacollection.com for consideration.\n\n    Tea is an equal opportunity employer.All qualified applicants will receive consideration for employment without regard to age, ancestry, color, family or medical care leave, gender identity or expression, genetic information, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran status, race, religion, sex(including\n    pregnancy), sexual orientation, or any other characteristic protected by applicable laws, regulations, and ordinances."
};
exports.associateBusinessSystemsAnalyst = associateBusinessSystemsAnalyst;


},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dutiesQualifications = void 0;

var dutiesQualifications = function dutiesQualifications(job, str) {
  var duties = job;
  var dutiesLi = "";
  var dutiesTitle = "<h3>".concat(str, "</h3>");
  $(duties).each(function (j, arr) {
    var list = "<li>".concat(arr, "</li>");
    dutiesLi = dutiesLi + list;
  });
  var dutiesList = "<ul>".concat(dutiesLi, "</ul>");
  var dutiesContent = dutiesTitle + dutiesList;
  $('.the-job').append(dutiesContent);
};

exports.dutiesQualifications = dutiesQualifications;


},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;

var _accountingManager = require("./accounting-manager.js");

var _associateBusinessSystemsAnalyst = require("./associate-business-systems-analyst.js");

var jobs = [_accountingManager.accountingManager, _associateBusinessSystemsAnalyst.associateBusinessSystemsAnalyst];
exports.jobs = jobs;


},{"./accounting-manager.js":1,"./associate-business-systems-analyst.js":2}],5:[function(require,module,exports){
"use strict";

var _jobListing = require("./job-listing.js");

var _dutiesQualifications = require("./duties-qualifications.js");

$(document).ready(function () {
  console.log(_jobListing.jobs);
  $(_jobListing.jobs).each(function (i, val) {
    var jobId = i;
    var jobTitle = val.title;
    $('.jobs-list').append("<li><h4><a href=\"#".concat(jobTitle, "\" data=\"").concat(jobId, "\"><span>").concat(jobTitle, "</span></a></h4></li>"));
  }); //onclick show the job

  $('.jobs-list li a').click(function (e) {
    window.scrollTo(0, 0); // e.preventDefault();

    var jobId = $(this).attr('data'); //get the clicked job

    $(_jobListing.jobs).each(function (i, job) {
      if (jobId == i) {
        console.log('single job');
        console.log(job); //hide the original page content

        $('.careers-welcome').hide(); //show the clicked job content

        var backTo = '<p class="all-jobs"><a href="#">Back to All Jobs</a></p>';
        var jobTitle = "<h2>".concat(job.title, "</h2>");
        var jobApply = "<h2 style=\"margin: 10px 0\"><a href=\"mailto:hr@teacollection.com\" target=\"_blank\">apply</a></h2>";
        var jobHeader = "<div>".concat(job.header, "</div>");
        var jobPay = "<div>".concat(job.pay, "</div>");
        var jobFooter = "<div>".concat(job.footer, "</div>");
        var jobContent = "".concat(backTo, " ").concat(jobTitle, " ").concat(jobApply, " ").concat(jobHeader, " ").concat(jobPay, " ").concat(jobFooter); // show the title, location, description

        $('.the-job').append(jobContent); //show the responsibilities & qualifications

        (0, _dutiesQualifications.dutiesQualifications)(job.duties, "Duties & Responsibilities");
        (0, _dutiesQualifications.dutiesQualifications)(job.qualifications, "Qualifications"); //show the footer and apply

        $('.the-job').append(jobFooter + jobApply); //on click return to all jobs

        $('.all-jobs').click(function (e) {
          window.scrollTo(0, 0);
          $('.the-job').children().remove();
          $('.careers-welcome').show();
        });
      }
    });
  });
});


},{"./duties-qualifications.js":3,"./job-listing.js":4}]},{},[5]);
