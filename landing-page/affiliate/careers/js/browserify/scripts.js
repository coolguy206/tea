(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dutiesQualifications = void 0;
var dutiesQualifications = exports.dutiesQualifications = function dutiesQualifications(job, str) {
  var duties = job;
  var dutiesLi = "";
  var dutiesTitle = "<h3>".concat(str, "</h3>");
  $(duties).each(function (j, arr) {
    if (arr.header !== undefined) {
      var list = "<li><h4>".concat(arr.header, "</h4></li>");
      $(arr.list).each(function (k, duty) {
        list = "".concat(list, "\n\n<li>").concat(duty, "</li>\n");
      });
      dutiesLi = dutiesLi + list;
    } else {
      var list = "<li>".concat(arr, "</li>");
      dutiesLi = dutiesLi + list;
    }
  });

  // console.log(dutiesLi);

  var dutiesList = "<ul>".concat(dutiesLi, "</ul>");
  var dutiesContent = dutiesTitle + dutiesList;
  $('.the-job').append(dutiesContent);
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marketingCoordinator = void 0;
var marketingCoordinator = exports.marketingCoordinator = {
  title: "Marketing Coordinator",
  header: "<h4 style=\"display:block\">COVER LETTER AND RESUME MUST BE SUBMITTED TO BE CONSIDERED FOR THIS ROLE</h4>\n\n    Level: 1<br> \n    Reports to: Growth Marketing Manager<br> \n    Department: Marketing Direct<br> \n    Reports: None<br> \n    FLSA Status: Non-Exempt<br> \n    Employee: TBD<br><br>\n    \n    As our Marketing Coordinator, you\u2019ll help keep our marketing campaigns organized, on track, and running smoothly. This entry-level role is a great opportunity to learn by doing, with direct mentorship from experienced advisors. You\u2019ll work across various areas including digital ads, affiliate marketing, and print catalogs\u2014supporting the team with planning, execution, and reporting.<br><br>\n\nThis position is ideal for recent graduates who are curious, enjoy both creative and analytical tasks, and want to gain hands-on experience in a fast-paced, brand-driven environment.<br><br>\n\nThis is a hybrid role. Bay Area-based team members work from our Emeryville office at least one day per week. Remote team members are expected to travel to the office at least twice a year. The Coordinator must be accessible via video and messaging platforms during standard Pacific Time business hours.",
  pay: "Pay Range:\n    $53-58k Salary",
  duties: [{
    header: "Campaign Execution & Asset Coordination:",
    list: ["Brief the Creative team on asset needs based on historical data and ensure timely and accurate delivery across platforms.", "Maintain campaign trackers, link tracking, asset logs, and shared calendars to ensure seamless execution across all channels.", "Own the affiliate channel and support coordination of direct mail assets, ensuring consistency in messaging and seasonal timing."]
  }, {
    header: "Channel & Partner Coordination:",
    list: ["Assist in managing relationships with external marketing partners, including ad platform reps (Meta, Google, TikTok) and affiliate partners through Awin.", "Support onboarding, communication, and activation for affiliate partners, ensuring they have current promotional materials and product feeds.", "Help manage timelines and collaborate with external catalog vendors, including list coordination, asset deadlines, and mail drop schedules."]
  }, {
    header: "Testing & Optimization:",
    list: ["Contribute to A/B testing efforts across creative, copy, and targeting strategies within paid media platforms.", "Track and summarize test performance, helping the team draw clear insights for future optimizations.", "Stay informed on platform updates and marketing best practices to bring new ideas for testing and channel improvements."]
  }, {
    header: "Reporting & Performance Tracking:",
    list: ["Pull weekly and monthly performance data across digital ad and affiliate marketing channels.", "Assist in maintaining campaign performance reports for monthly staff and marketing meetings.", "Track pacing, performance trends, and variances from target KPIs\u2014flagging issues or opportunities for improvement."]
  }, {
    header: "Project & Process Management:",
    list: ["Keep marketing calendars, campaign timelines, and shared project documentation organized and up to date.", "Coordinate across internal teams (Creative, Site, Product, and Brand) to ensure campaign deliverables are aligned and executed on time.", "Support the organization of marketing assets, testing recaps, vendor files, and planning documents for easy team access and archival."]
  }],
  who: ["Curious, organized, and excited to grow in the marketing space", "A proactive problem-solver and clear communicator", "Equally comfortable with spreadsheets and creative briefs", "Thrive in fast-paced, collaborative environments", "Detail-oriented with strong organizational skills"],
  qualifications: ["0\u20132 years of experience in digital marketing, eCommerce, or a related role", "Hands-on experience with paid media platforms like Meta Ads Manager and Google Ads is required", "Proficient using Excel/Google Sheets for data tracking and reporting", "Bachelor's degree in Marketing, Advertising, or related with a strong academic track record"],
  footer: "Expectations for All Employees: Supports Tea Collection\u2019s mission, vision, and values by embodying excellence and competence, collaboration, innovation, respect, personalization, community commitment, and accountability. \n    \n     Note: Nothing in this job description restricts management\u2019s right to assign or reassign duties and responsibilities to this job at any time. Tea Collection is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We do not discriminate based upon race, religion, color, national origin, sex, sexual orientation, gender identity, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics."
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;
var _marketingCoordinator = require("./job-descriptions/marketing-coordinator.js");
// import {
//     AccountExecutiveEast
// } from './account-executive-east.js';
// import {
//     SocialMediaContentIntern
// } from './job-descriptions/social-media-content-intern.js';

var jobs = exports.jobs = [_marketingCoordinator.marketingCoordinator];

},{"./job-descriptions/marketing-coordinator.js":2}],4:[function(require,module,exports){
"use strict";

var _jobListing = require("./job-listing.js");
var _dutiesQualifications = require("./duties-qualifications.js");
$(document).ready(function () {
  console.log(_jobListing.jobs);
  $(_jobListing.jobs).each(function (i, val) {
    var jobId = i;
    var jobTitle = val.title;
    $('.jobs-list').append("<li><h4><a href=\"#".concat(jobTitle, "\" data=\"").concat(jobId, "\"><span>").concat(jobTitle, "</span></a></h4></li>"));
  });

  //onclick show the job
  $('.jobs-list li a').click(function (e) {
    window.scrollTo(0, 0);
    // e.preventDefault();
    var jobId = $(this).attr('data');

    //get the clicked job
    $(_jobListing.jobs).each(function (i, job) {
      if (jobId == i) {
        console.log('single job');
        console.log(job);

        //hide the original page content
        $('.careers-welcome').hide();

        //show the clicked job content
        var backTo = '<p class="all-jobs"><a href="#">Back to All Jobs</a></p>';
        var jobTitle = "<h2>".concat(job.title, "</h2>");
        var jobApply = "<h2 style=\"margin: 10px 0\"><a href=\"mailto:hr@teacollection.com\" target=\"_blank\">apply</a></h2>";
        var jobHeader = "<div>".concat(job.header, "</div>");
        var jobPay = "<div>".concat(job.pay, "</div>");
        var jobFooter = "<div>".concat(job.footer, "</div>");
        var jobContent = "".concat(backTo, " ").concat(jobTitle, " ").concat(jobApply, " ").concat(jobHeader, " ").concat(jobPay, " ").concat(jobFooter);

        // show the title, location, description
        $('.the-job').append(jobContent);

        //show the responsibilities & qualifications
        (0, _dutiesQualifications.dutiesQualifications)(job.duties, "Duties & Responsibilities");
        //only show who you are if not undefined
        if (job.who !== undefined) {
          (0, _dutiesQualifications.dutiesQualifications)(job.who, "Who You Are");
        }
        (0, _dutiesQualifications.dutiesQualifications)(job.qualifications, "Qualifications");

        //show the footer and apply
        $('.the-job').append(jobFooter + jobApply);

        //on click return to all jobs
        $('.all-jobs').click(function (e) {
          window.scrollTo(0, 0);
          $('.the-job').children().remove();
          $('.careers-welcome').show();
        });
      }
    });
  });
});

},{"./duties-qualifications.js":1,"./job-listing.js":3}]},{},[4]);
