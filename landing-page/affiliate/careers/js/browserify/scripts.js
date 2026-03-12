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
    if (arr === "") return; // Skip if arr is an empty string
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
  var dutiesList = "<ul>".concat(dutiesLi, "</ul>");
  if (dutiesLi.trim() === "") return; // Do not append if list is empty
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
exports.officeCommunityCoordinator = void 0;
var officeCommunityCoordinator = exports.officeCommunityCoordinator = {
  title: "Office & Community Coordinator",
  header: "\n    <p>\n    Reports to: Director of Finance & Accounting<br> \n    Department: Finance & Accounting<br> \n    Reports: None<br> \n    FLSA Status: Non-Exempt<br> \n    </p>\n\n    <h5>\n    To be considered for this role, please complete the Google Form Application here:\n    </h5>\n\n    <p>\n    <a href=\"https://docs.google.com/forms/d/e/1FAIpQLScXxFe53qiorXm0NXsqD9a210LtmfC33WmcIt3Z1QTFsbT_xQ/viewform?usp=publish-editor\" target=\"_blank\">https://docs.google.com/forms/d/e/1FAIpQLScXxFe53qiorXm0NXsqD9a210LtmfC33WmcIt3Z1QTFsbT_xQ/viewform?usp=publish-editor</a>\n    </p>\n\n    <h3>About the Role:</h3>\n    \n    <p>\n    This position is a part-time, in office position. Typical office schedule: 9am-5pm on all-company office days (initially one day/week), approximately 4-6 hours on all other days. Specific hours are within business hours, but flexible based on business needs and advanced manager approval..\n    </p>\n\n    <h3>Overview:</h3>\n\n    <p>\n    The Office/Community Coordinator is responsible for our office, ensuring our team, both remote and local, have the resources and environment needed to be successful.\n    </p>\n\n",
  pay: "\n    <h3>Pay Range:</h3>\n    <p>$22-26 per hour</p>\n    ",
  duties: [{
    header: "Office Management:",
    list: ["Proactive communication and support for anyone who works in or visits our office to ensure a welcoming environment", "Keep office organized and professional. Maintain/manage off site storage. Prioritize a positive, productive, and brand right environment.", "Manage inbound and outbound mail and shipments", "Coordinate with office related services including janitorial, landlord (??), security, groceries, and other", "Coordinate with landlord and/or contractors for any office needs", "Manage parking assignments and security procedures including distributing access codes/keys, keeping technology equipment and confidential documentation secure in the office", "Support for community building activities including delivering supplies, organizing events and monthly staff meetings", "Facilitate Tea meetings, events, interview schedules and/or appointments. Manage internal documents and databases, and create standardized organization systems", "Prepare office for photo shoots and then ensure office is ready for regular work after photo shoots are completed", "Provide ad hoc support during Photoshoots including coordinating basic logistics, cleaning services, food and permits as needed.", "Occasional support for Leadership Team members on an as needed basis; direction given each week. For example: facilitate all staff meetings (materials, technology, scheduling, etc)", "Responsible for adhering to budget and reporting results to finance"]
  }, {
    header: "Community Building/Support:",
    list: ["Plan community building activities and events for the team including periodic off-site meetings and retreats.", "Primary point person on Corporate Social Responsibility efforts including volunteering, donations, and other giveback opportunities.", "Create and distribute product discounts and allowances to employees and vendors", "Organize monthly company lunches and regular educational/development opportunities", "Facilitate monthly company values nomination process", "Celebrate and recognize Birthdays/Anniversaries/Life Events", "Plan and execute meetings including projection and video calls for remote team members. Ensure remote team is able to engage fully during in office work days", "Plan and support remote team members when visiting the Bay Area, plan and execute holiday cards/gifts to our team, vendors, and partners", "Facilitate community volunteer opportunities", "Facilitate and execute Donation strategy with input from Marketing & Finance"]
  }, {
    header: "Special Projects:",
    list: ["As needed, the coordinator will support the Tea team with projects, especially as projects relate to our team, office, and broader community including sample sales, etc.", "Support HR with various employee actives (ie Day 1 Onboarding & Welcome) and project to support Tea culture and engagement activities as needed", "Office d\xE9cor, organization or space planning as needs and seasons change", "Support team with inbound and outbound packages, including samples and items being shipped back and forth to production vendors. Ensure office stays organized including samples, supporting samples when/as needed"]
  }],
  who: [""],
  qualifications: ["1-3 Years of Admin/Coordinator or Office Management (or equivalent) experience", "Exceptional attention to detail, organizational skills, and affinity for order and accuracy", "Physically able to move and maintain sample bins, boxes and racks", "Ability to work independently with minimal instruction and supervision", "Must have excellent time management skills, be self-sufficient and ability to adapt as needed", "Exceptional at creating and maintaining calendars and tracking documents/items", "Creative problem-solver", "Expert in video conferencing tools, Excel, Slack & Google Docs", "Experience in hospitality to create warm, welcoming environment"],
  footer: "\n    <h3>Expectations for All Employees:</h3>\n    \n    <p>\n    Supports the organization\u2019s mission, vision, and values by exhibiting the following behaviors: excellence and competence, collaboration, innovation, respect, personalization, commitment to our community, and accountability and ownership.\n    </p>\n    "
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;
var _officeCommunityCoordinator = require("./job-descriptions/office-community-coordinator.js");
var _growthMarketingCoordinator = require("./job-descriptions/growth-marketing-coordinator.js");
var jobs = exports.jobs = [_growthMarketingCoordinator.growthMarketingCoordinator, _officeCommunityCoordinator.officeCommunityCoordinator];

},{"./job-descriptions/growth-marketing-coordinator.js":2,"./job-descriptions/office-community-coordinator.js":3}],5:[function(require,module,exports){
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
        var jobContent = "".concat(backTo, " ").concat(jobTitle, " ").concat(jobHeader, " ").concat(jobPay);

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

},{"./duties-qualifications.js":1,"./job-listing.js":4}]},{},[5]);
