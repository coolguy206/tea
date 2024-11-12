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
exports.jobs = void 0;
var _technicalDesigner = require("./technical-designer.js");
// import {
//     AccountExecutiveEast
// } from './account-executive-east.js';

// import {
//   officeCoordinator
// } from './office-coordinator.js';

var jobs = exports.jobs = [_technicalDesigner.TechnicalDesigner];


},{"./technical-designer.js":4}],3:[function(require,module,exports){
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


},{"./duties-qualifications.js":1,"./job-listing.js":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TechnicalDesigner = void 0;
var TechnicalDesigner = exports.TechnicalDesigner = {
  title: "Technical Designer ",
  header: "\n        <h4>Reports to:</h4> \n        <p>Manager of Technical Design</p>\n\n        <h4>Department:</h4>\n        <p>Technical Design</p>\n\n        <h4>Group:</h4>\n        <p>PD & Supply Chain</p>\n\n        <h4>Direct Reports:</h4>\n        <p>N/A</p>\n\n        <h4>FLSA Status:</h4>\n        <p>Non-exempt</p>\n\n        <h4>Expectations for all Employees:</h4>\n        <p>\n            Supports the organization\u2019s mission, vision, and values by exhibiting the following behaviors: excellence and competence, collaboration, innovation, respect, personalization, commitment to our community, and accountability and ownership.\n        </p>\n\n        <h4>Hybrid Role:</h4>\n        <p>\n            This position is a hybrid role - the Technical Designer is required to be in the office minimally two times per week and as needed for in person meetings and team collaboration.\n        </p>\n\n        <h4>Objective:</h4>\n        <p>\n            The key objective of this role is to ensure Brand Integrity, execute superior Garment Quality and Construction, promote Team Collaboration and communicate effectively via traditional forums and through digital platforms.\n        </p>\n\n        <p>\n            Manage brand integrity throughout the product development process and ensure garments meet Tea Collection\u2019s function and fit requirements with the goal of delivering fit consistency and elevating the quality of the product.  Create and foster a productive environment amongst the Design,  Production, and Agent teams. This role participates in cross-functional teams to bring Tea\u2019s seasonal product collections to life, from concept development to final top of production samples.\n        </p>\n\n        <p>\n            The role owns the final fit results and communicates cross functionally and if there are variations from initial strategic planning and intent through the product development process.  It is critical to develop and maintain strong working relationships with cross-functional teams to ensure a cohesive internal organization.\n        </p>",
  pay: "<h4>Pay Range:</h4>\n    <p>$65,000 - $85,000</p>",
  duties: ["Regular agent communication,  weekly review of workflow, and provide alignment and feedback on calendar management and due dates.", "Own several product classifications directly, in addition to overseeing and sharing best practices amongst the work of team members.", "Analyze fit on a live model and form, while maintaining consistency.", "Evaluate garment fit, construction and trim details according to standards.", "Work with, Design, Production, Buying and Agents to establish the direction of the fit and garment details.", "Create and execute spec packs from concept to T.O.P. (inclusive of written comments on fit, construction, and trims, digital photos, and any other necessary information).", "Communicate with Agents, Design and Production as it relates to the construction details and execution of fit of the product.", "Analyze and propose recommendations for improvements in both process and creative direction for the product, including honing and perfecting standards, fit blocks, grades, and pattern.", "Respond to sales and market product feedback with research and analysis and propose recommendations to address concerns.", "Schedule and oversee fit sessions with technical teams and cross functional partners.", "Develop timelines, project plans and standard operating procedures when necessary.", "All fit details are communicated via ERP system and 3D digital pattern software.", "Special projects as necessary."],
  qualifications: ["At least 5 years of experience in apparel design or technical design, with an emphasis in children\u2019s wear.", "Bachelor of Fine Arts, or equivalent advanced knowledge through work experience and intellectual instruction.", "Proven success working within 3D Fashion Design Software.", "Proven ability to deal with pattern and ability to analyze garment specifications conceptually.", "Complete understanding of fit, balance and garment construction; knowledge of fabrics and finishes as related to the fit of the product.", "Experience in multiple Children\u2019s product categories.", "Excellent written and verbal communication skills with a proven ability to persuasively present recommendations cross-functionally.", "Must have demonstrated successful cross-functional relationship management.", "Excellent time and team management skills and ability to work under tight deadlines.", "Due to the nature of the role, the candidate resides in the San Francisco Bay Area."],
  footer: "\n    <p>\n        If you are enthusiastic about children\u2019s fashion and have the sales experience and network to drive wholesale growth, we invite you to apply by submitting your resume and a cover letter detailing your qualifications and interest in the role to <a href=\"mailtio:hr@teacollection.com\">hr@teacollection.com</a>.\n    </p>\n\n    <p>\n        Tea Collection is committed to creating a diverse environment and is proud to be an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.\n    </p>"
};


},{}]},{},[3]);
