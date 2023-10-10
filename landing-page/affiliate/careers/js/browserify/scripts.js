(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directorMarketing = void 0;
var directorMarketing = {
  title: "Director of Marketing",
  header: "We are looking for an experienced and thoughtful Director of Marketing.\n\n    The Director of Marketing will be responsible for all strategic planning and execution of marketing to deliver financial targets including growth and profitability.\n    \n    This position is hybrid; San Francisco Bay Area employees work in the Tea office one day/week. Remote team travels to work in the San Francisco office at least twice/year. The Director of Marketing is required to be accessible via all video and messaging modes during regular business hours of operation Pacific Time.",
  pay: "Pay Range:\n    $100,000-$150,000USD",
  duties: ["Demand Forecasting: partner with finance to develop weekly ad budget, demand forecast of sales, traffic, conversion (based on time of year and promotion), UPT, NCA, and retention metrics.", "Partner with Planning and Buying to develop a promotion calendar that supports brand and business objectives.", "Partner with Creative Director to develop elevated and cohesive consumer-facing marketing campaigns that support business objectives. With Creative Director, develops quarterly integrated Brand Marketing presentations that inform seasonal integrated strategy, campaigns, and shotlist.", "Develop full funnel, integrated marketing plan that delivers business results in the near term but also long term brand value.", "Full funnel, integrated marketing plan that drives why Tea: product and brand. Needs to connect closely to our assortment strategy and differentiation. Integrated marketing encompasses all customer touch points including site, email/SMS, social, search, display, and our retailer partners through our wholesale channel.", "Orchestrate all parties to get everyone aligned to deliver results: buyers, finance, site, creative, design.", "Accountability for sales and advertising/marketing budget: traffic, AOV, ROAS. Also accountable for customer metrics: New Customer Acquisition, CPA/CPO, and retention.", "Lead, coach and direct teams. In house teams include performance marketing (2 - paid search/social, affiliates, and email/SMS) and, integrated/brand marketing (2-marketing campaigns, influencers, boutique, organic social. External partners include direct marketing agency (Belardi Wong), customer analytics (CCC), PR (Monique Jones PR), Re-sale platform (Kidizen), Giveback partner (Global Fund for Children), and collaboration partners (Hello Kitty, Green Sprouts swim diapers, Wall Shoppe)."],
  qualifications: ["6-10 years experience in omni-channel marketing focused on profitable growth. Ideally experience with fashion/apparel, consumer brand and/or marketing agency. Knowledge of children\u2019s apparel is a plus.", "Experience developing and maintaining an omni-channel go-to-market strategy and calendar across all channels (digital marketing, e-commerce, and in-store).", "Excellent brand marketing strategy development and execution experience and skills with proven track record of driving strong business results.", "Ability to translate product, trend and merchandising information/strategies into marketing messages that support the overall brand and business objectives.", "Experience with search (paid and organic), PR, influencers, social (paid and organic), partnership activations, in store marketing\u2014and able to adapt to new, innovative channels as they become available.", "Desire to build a brand and aptitude for original, creative ideas; open-minded to new approaches.", "Strong promotional/traffic-driving ideation/concepting skills.", "Strong leadership, team building, and collaboration skills and ability to form effective partnerships across cross-functional teams.", "Solutions first, creative problem solver. Detail-oriented, organized and self-motivated.", "Experience with creative development and effectively briefing in and working with creative teams.", "Strong project management skills, including demonstrated track record in managing marketing calendars and integrated campaigns, coordinating with all stakeholders to deliver results (creative, merchandising, inventory, ecommerce, stores).", "Comfortable with operating in a fast-paced environment with entrepreneurial spirit and dealing with ambiguity. Tea is a small company without a lot of bureaucracy. Tea team members thrive when they can introduce sufficient processes that facilitate fast decision making."],
  footer: "Please email a cover letter and resume to hr@teacollection.com for consideration.\n\n    Tea is an equal opportunity employer.All qualified applicants will receive consideration for\n    employment without regard to age, ancestry, color, family or medical care leave, gender identity\n    or expression, genetic information, marital status, medical condition, national origin, physical or\n    mental disability, political affiliation, protected veteran status, race, religion, sex(including\n    pregnancy), sexual orientation, or any other characteristic protected by applicable laws,\n        regulations, and ordinances."
};
exports.directorMarketing = directorMarketing;


},{}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;

var _directorMarketing = require("./director-marketing.js");

// import {
//   digitalMarketingCoordinator
// } from './digital-marketing-coordinator.js';
// import {
//   srManagerMarketing
// } from './sr-manager-marketing.js';
var jobs = [_directorMarketing.directorMarketing];
exports.jobs = jobs;


},{"./director-marketing.js":1}],4:[function(require,module,exports){
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


},{"./duties-qualifications.js":2,"./job-listing.js":3}]},{},[4]);
