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
exports.SocialMediaContentIntern = void 0;
var SocialMediaContentIntern = exports.SocialMediaContentIntern = {
  title: "Social Media Content Intern",
  header: "\n\n        <h4>Reports to:</h4> \n        <p>Digital Marketing Associate</p>\n\n        <h4>Department:</h4> \n        <p>Marketing</p>\n\n        <h4>FLSA Status:</h4> \n        <p>Non-Exempt</p>\n\n        <h4>Expectations for All Employees:</h4>\n<p>Supports the organization\u2019s mission, vision and values by exhibiting the following behaviors: excellence and competence, collaboration, innovation, respect, personalization, commitment to our community, and accountability and ownership.</p>\n\n<h4>About the Role:</h4>\n<p>Tea Collection is a globally inspired children's clothing company based in San Francisco. We believe in fostering global curiosity and connection in children through our high-quality, uniquely designed apparel. Our mission is to create beautiful, comfortable clothing that celebrates cultures around the world.</p>\n\n<p>This position is hybrid; San Francisco Bay Area employees work in the Tea office one day/week or as business requires. This intern will be required to work in person with the team, and visit various Bay Area locations, including boutiques that carry our products.</p>\n\n<h4>Objective:</h4>\n<p>Tea Collection is seeking a Marketing Intern for a 3-month internship to join our team. In this role, you will be responsible for ideating & producing daily video content for our paid and organic channels, and will work closely with the Digital & Brand Marketing teams to ensure alignment with Tea voice & business objectives.</p>\n\n        ",
  pay: "<h4>Availability:</h4>\n    <p>This is a part-time position, 10-15 hours per week.</p>",
  duties: ["Brainstorm video content based on current trends (sounds, challenges, etc.)", "Align ideas with brand voice and featured product", "Highlight & support on-site promos and product launches", "Produce and edit 5 videos per week to be used on TikTok and/or Instagram", "Report out on performance & creative learnings"],
  qualifications: ["Currently a student or recent grad with interest in social media marketing", "Creative, outgoing, curious mind with ability to brainstorm and iterate", "Ability to work in a fast-paced environment", "Strong communication skills, decisiveness, & attention to detail", "Able to work independently with daily direction from key lead", "Engagement in learning and research on social media platforms & trends", "Previous experience creating content, portfolio a plus", "Experience as a creator on TikTok is a plus"],
  footer: "<p>Tea Collection is committed to creating a diverse environment and is proud to be an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.</p>"
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;
var _socialMediaContentIntern = require("./job-descriptions/social-media-content-intern.js");
// import {
//     AccountExecutiveEast
// } from './account-executive-east.js';

// import {
//   officeCoordinator
// } from './office-coordinator.js';

var jobs = exports.jobs = [_socialMediaContentIntern.SocialMediaContentIntern];

},{"./job-descriptions/social-media-content-intern.js":2}],4:[function(require,module,exports){
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
