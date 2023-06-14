import {
  jobs
} from './job-listing.js';

import {
  dutiesQualifications
} from './duties-qualifications.js';

$(document).ready(function () {

  console.log(jobs);

  $(jobs).each(function (i, val) {
    var jobId = i;
    var jobTitle = val.title;
    $('.jobs-list').append(`<li><h4><a href="#${jobTitle}" data="${jobId}"><span>${jobTitle}</span></a></h4></li>`);
  });

  //onclick show the job
  $('.jobs-list li a').click(function (e) {
    window.scrollTo(0, 0);
    // e.preventDefault();
    var jobId = $(this).attr('data');

    //get the clicked job
    $(jobs).each(function (i, job) {

      if (jobId == i) {
        console.log('single job');
        console.log(job);

        //hide the original page content
        $('.careers-welcome').hide();

        //show the clicked job content
        var backTo = '<p class="all-jobs"><a href="#">Back to All Jobs</a></p>';
        var jobTitle = `<h2>${job.title}</h2>`;
        var jobApply = `<h2 style="margin: 10px 0"><a href="mailto:hr@teacollection.com" target="_blank">apply</a></h2>`;
        var jobHeader = `<div>${job.header}</div>`;
        var jobPay = `<div>${job.pay}</div>`;
        var jobFooter = `<div>${job.footer}</div>`;
        var jobContent = `${backTo} ${jobTitle} ${jobApply} ${jobHeader} ${jobPay} ${jobFooter}`;

        // show the title, location, description
        $('.the-job').append(jobContent);

        //show the responsibilities & qualifications
        dutiesQualifications(job.duties, `Duties & Responsibilities`);
        dutiesQualifications(job.qualifications, `Qualifications`);

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
