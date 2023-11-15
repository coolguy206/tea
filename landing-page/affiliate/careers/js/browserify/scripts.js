(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  }); // console.log(dutiesLi);

  var dutiesList = "<ul>".concat(dutiesLi, "</ul>");
  var dutiesContent = dutiesTitle + dutiesList;
  $('.the-job').append(dutiesContent);
};

exports.dutiesQualifications = dutiesQualifications;


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;

var _officeCoordinator = require("./office-coordinator.js");

// import {
//   digitalMarketingCoordinator
// } from './digital-marketing-coordinator.js';
// import {
//   directorMarketing
// } from './director-marketing.js';
var jobs = [_officeCoordinator.officeCoordinator];
exports.jobs = jobs;


},{"./office-coordinator.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.officeCoordinator = void 0;
var officeCoordinator = {
  title: " Office and Community Coordinator",
  header: "We are looking for an Office and Community Coordinator to join our team. \n    Please email a cover letter and resume to hr@teacollection.com for consideration. We would like to hear how you learned about the position, why you are interested, and how you can contribute in this role.\n    About the Role: \n    This position is an in person position. 20 hours a week. Typical schedule: 9am-12pm (M, T, Th, F) and 9am-5pm (W). Specific hours are flexible based on availability and business needs. The role is non-exempt, reporting into the Director of Finance & Accounting.",
  pay: "Pay Range:\n    $22-28 USD / hour, 20 hours/week",
  duties: [{
    header: "Office Management:",
    list: ["Manage inbound and outbound shipments", "Coordinate with office related services including janitorial, HVAC, contractors, security, groceries, and other", "Coordinate with landlord for any office needs", "Manage security procedures including distributing and tracking keys, keeping technology equipment and confidential documentation secure in the office", "Support for community building activities including delivering supplies, organizing events and monthly staff meetings", "Facilitate Tea meetings, events, interview schedules and/or appointments. Manage internal documents and databases, and create standardized organization systems", "Ad hoc support for Leadership Team members on an as needed basis; direction given each week", "Keep office organized and professional. Maintain/manage off site storage"]
  }, {
    header: "Community Building / Support:",
    list: ["Create and distribute product discounts and allowances to employees", "Organize monthly company lunches", "Facilitate monthly company values nomination process", "Support HR with onboarding and offboarding tasks", "Celebrate and recognize Birthdays/Anniversaries/Life Events", "Set up for company meetings including projection and video calls for remote team members", "Plan and support remote team members when visiting the Bay Area, plan and execute holiday cards/gifts to our team, vendors, and partners"]
  }, {
    header: "Special Projects:",
    list: ["Support creative team and producer as needed during in house photoshoots", "As needed, the coordinator will support the Tea team with projects, especially as projects relate to our team, office, and broader community including sample sales, etc."]
  }],
  qualifications: ["Exceptional attention to detail, organizational skills, and affinity for order and accuracy", "Physically able to move and maintain sample bins, boxes and racks", "Ability to work independently with minimal instruction and supervision", "Must have excellent time management skills, be self-sufficient and ability to adapt as needed", "Exceptional at creating and maintaining calendars and tracking documents/items", "Creative problem-solver", "Expert in video conferencing tools, Excel, Slack & Google Docs", "Experience in hospitality to create warm, welcoming environment"],
  footer: "Expectations for All Employees\n    Supports the organization\u2019s mission, vision, and values by exhibiting the following behaviors: excellence and competence, collaboration, innovation, respect, personalization, commitment to our community, and accountability and ownership. \n    \n    Tea is an equal opportunity employer.All qualified applicants will receive consideration for employment without regard to age, ancestry, color, family or medical care leave, gender identity or expression, genetic information, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran status, race, religion, sex(including pregnancy), sexual orientation, or any other characteristic protected by applicable laws, regulations, and ordinances.\n    Please email a cover letter and resume to hr@teacollection.com for consideration. We would like to hear how you learned about the position, why you are interested, and how you can contribute in this role."
};
exports.officeCoordinator = officeCoordinator;


},{}],4:[function(require,module,exports){
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


},{"./duties-qualifications.js":1,"./job-listing.js":2}]},{},[4]);
