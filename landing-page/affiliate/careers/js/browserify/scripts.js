(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountExecutiveEast = void 0;
var AccountExecutiveEast = exports.AccountExecutiveEast = {
  title: "Account Executive, East",
  header: "<h4>Location:</h4>\n        <p>New York (Commuting distance from Manhattan (Chelsea))</p>\n\n        <h4>Reports to:</h4> \n        <p>Sr. Buying Manager (interim)</p>\n\n        <h4>Company Overview:</h4>\n<p>Tea Collection, headquartered in San Francisco, is a globally-inspired childrenswear brand known for its unique designs that celebrate cultures around the world. We are passionate about creating high-quality, stylish clothing that connects children to the world through exploration and discovery.</p>\n\n<h4>Position Overview:</h4>\n<p>As an Account Executive, you are responsible for expanding Tea Collection\u2019s sales, brand presence, and partnership with retailers.  We are seeking an Account Executive who is a proactive, self-motivated sales professional with a strong network and proven track record for driving sales growth.</p>\n\n<h4>Location & Territory (East):</h4>\n<p>You will be responsible for building and nurturing relationships with children's boutiques and specialty retailers across the Eastern US.</p>\n\n<p>This is a remote position based from a home office. There will be travel for regional trade shows (for example: Chicago Kids Show), 1-2 times/year San Francisco team meetings, occasional markets to support independent sales reps (example: Atlanta market), and retailer/prospect store visits. </p>\n\n<p>The territory includes direct management of accounts in the Midwest, Northeast, New England, and some department stores and international accounts. The Eastern US Account Executive will also be the primary contact for some independent sales rep(s) to ensure that everyone has the communication, training, marketing and sales tools needed to ensure all key geographic markets in the territory have boutique representation.</p>\n\n        ",
  pay: "<h4>Pay Range:</h4>\n    <p>$75,000-$90,000 +Bonus</p>",
  duties: ["<h4>Sales & Account Management</h4>", "Build sales plans by account including prospects and partner with stores to meet sales goals. Meet or exceed sales and account goals with existing accounts as well as vetting prospects and developing a sales pipeline.", "Ensure that all key geographic areas (target cities/regions) have representation with existing or new business opportunities.", "Cultivate and maintain strong relationships with existing and prospective retailers.", "Build book of business to manage directly at least 50 and possibly 100 or more accounts. Close pre-season orders, generate in-season orders, and support accounts as needed.", "Maintain product and brand expertise in order to educate and sell our assortment to retailers. Note: Tea offers more than 1200 styles across nearly monthly deliveries.", "Manage regional trade shows from beginning to end including registration, set up, scheduling appointments, business meetings, writing orders, and detailed follow up.", "Visit key or prospective retailers in person whether at a market or by traveling to visit their store. The expectation is that you meet in person with key accounts and prospects once per year.", "Collaborate with our Planning Team to develop account level targets pre-season and to update Planning with informed forecasts during market.", "Facilitate business conversations with retailers based on Retailer Reports from Planning", "<h4>Brand & Operations</h4>", "Collaborate with our Brand Marketing team to support boutiques and other retailers. This includes brand expression at showrooms/markets, marketing materials needed for sell-in and ongoing boutique communication, as well as opportunities in store like events and visual merchandising.", "Coordinate with our Customer Operations and Supply Chain teams to stay informed and provide updates to our Eastern US independent sales representatives and retailers", "Provide input and hindsights based on retailer feedback and sales for our Product teams (Design, Production & Buying) to ensure we offer an optimal assortment for retailers"],
  qualifications: ["Proven experience as a Wholesale Sales Representative in the childrenswear or fashion industry with at least three years and ideally with five years of experience and established relationships with children's boutiques in the territory", "Sales experience with proven track record of prospecting through closing and growing accounts with positive long term relationships", "Excellent communication and interpersonal skills, with the ability to build rapport and foster long-term, genuine partnerships", "Self-motivated and results-oriented, with the ability to work effectively both independently and collaboratively", "Organization skills and ability to prioritize to achieve sales results", "Trade show experience required", "Travel required (approximately 20%)", "While most meetings will accommodate local time zone, some meetings could be held on Pacific Time, therefore flexibility is required to accommodate the meeting timing", "Proficiency in spreadsheets and Slack for internal communication. Threadvine (order entry tool) experience is a plus as well."],
  footer: "<p>If you are enthusiastic about children\u2019s fashion and have the sales experience and network to drive wholesale growth, we invite you to apply by submitting your resume and a cover letter detailing your qualifications and interest in the role to <a href=\"mailtio:hr@teacollection.com\">hr@teacollection.com</a>.</p>\n\n    <p>Tea Collection is committed to creating a diverse environment and is proud to be an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.</p>"
};


},{}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;
var _accountExecutiveEast = require("./account-executive-east.js");
// import {
//   directorMarketing
// } from './director-marketing.js';
// import {
//   officeCoordinator
// } from './office-coordinator.js';

var jobs = exports.jobs = [_accountExecutiveEast.AccountExecutiveEast];


},{"./account-executive-east.js":1}],4:[function(require,module,exports){
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


},{"./duties-qualifications.js":2,"./job-listing.js":3}]},{},[4]);
