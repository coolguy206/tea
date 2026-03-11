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
exports.growthMarketingCoordinator = void 0;
var growthMarketingCoordinator = exports.growthMarketingCoordinator = {
  title: "Growth Marketing Coordinator",
  header: "\n    <p>\n    Reports to: Growth Marketing Coordinator<br> \n    Department: Site & Growth Marketing<br> \n    Reports: None<br> \n    FLSA Status: Non-Exempt<br> \n    </p>\n\n    <h5>\n    To be considered for this role, please complete the Google Form Application here:\n    </h5>\n\n    <p>\n    <a href=\"https://forms.gle/AhgpUnuKC7odmVyv8\" target=\"_blank\">https://forms.gle/AhgpUnuKC7odmVyv8</a>\n    </p>\n\n    <h3>Position Overview</h3>\n    \n    <p>\n    We\u2019re looking for a Marketing Coordinator to help keep Tea Collection\u2019s marketing efforts organized, on track, and running smoothly. This role supports the execution and optimization of our marketing programs across digital advertising and print catalogs.\n    </p>\n\n    <p>\n    You\u2019ll work closely with Marketing, Creative, Site, Product, and external partners to support campaign execution, performance tracking, and testing. This is a great opportunity for someone who enjoys both creative and analytical work, thrives in a fast-paced environment, and wants to grow hands-on marketing experience with strong mentorship.\n    </p>\n\n    <p>\n    This is a hybrid role. Bay Area\u2013based team members work from our Emeryville office at least one day per week. Remote team members are expected to travel to the office at least twice a year. The Coordinator must be accessible via video and messaging platforms during standard Pacific Time business hours.\n    </p>\n\n",
  pay: "\n    <h3>Pay Range:</h3>\n    <p>$53,000-58,000 Salary</p>\n    ",
  duties: [{
    header: "Campaign Execution & Coordination:",
    list: ["Support the day-to-day execution of marketing campaigns across digital advertising and catalogs. Partner with Creative and cross-functional teams to ensure assets are planned, delivered, and launched accurately and on time."]
  }, {
    header: "Channel & Partner Support:",
    list: ["Coordinate with external partners such as advertising platform representatives and catalog vendors to ensure timelines, assets, and execution are aligned."]
  }, {
    header: "Testing & Optimization:",
    list: ["Support testing across creative, copy, and targeting strategies. Track results and help summarize learnings to inform future optimizations and improvements."]
  }, {
    header: "Reporting & Performance Analysis:",
    list: ["Pull and organize weekly, monthly, and quarterly performance data across marketing channels. Support reporting and hindsighting to help the team understand trends, pacing, and opportunities."]
  }, {
    header: "Project & Process Management:",
    list: ["Help keep marketing calendars, trackers, timelines, and documentation organized and up to date. Support smooth collaboration across teams by ensuring clarity, alignment, and follow-through on campaign deliverables."]
  }],
  who: ["Curious, organized, and excited to grow in the marketing space", "A proactive problem-solver and clear communicator", "Equally comfortable with both creative and analytical tasks", "Detail-oriented with strong organizational skills", "Thrive in fast-paced, collaborative environments"],
  qualifications: ["0\u20132 years of experience in digital marketing, eCommerce, or a related role", "Hands-on experience with paid media platforms (Meta Ads + Google Ads)", "Proficient using Excel/Google Sheets for data tracking and reporting", "Bachelor's degree in Marketing, Advertising, or related with a strong academic track record"],
  footer: "\n    <h3>Expectations for All Employees:</h3>\n    \n    <p>\n    Supports Tea Collection\u2019s mission, vision, and values by embodying excellence and competence, collaboration, innovation, respect, personalization, community commitment, and accountability.\n    </p>\n    \n    <p>\n    Note: Nothing in this job description restricts management\u2019s right to assign or reassign duties and responsibilities to this job at any time. Tea Collection  is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We do not discriminate based upon race, religion, color, national origin, sex, sexual orientation, gender identity, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics.\n    </p>\n    "
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;
var _growthMarketingCoordinator = require("./job-descriptions/growth-marketing-coordinator.js");
// import {
//     AccountExecutiveEast
// } from './account-executive-east.js';
// import {
//     SocialMediaContentIntern
// } from './job-descriptions/social-media-content-intern.js';

var jobs = exports.jobs = [_growthMarketingCoordinator.growthMarketingCoordinator];

},{"./job-descriptions/growth-marketing-coordinator.js":2}],4:[function(require,module,exports){
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

        //? content with the apply url
        // var jobContent = `${backTo} ${jobTitle} ${jobApply} ${jobHeader} ${jobPay} ${jobFooter}`;
        //? content without the apply url
        var jobContent = "".concat(backTo, " ").concat(jobTitle, " ").concat(jobHeader, " ").concat(jobPay, " ").concat(jobFooter);

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
        //? content with the apply url
        // $('.the-job').append(jobFooter + jobApply);
        //? content without the apply url
        $('.the-job').append(jobFooter);

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
