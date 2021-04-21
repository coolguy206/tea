"use strict";

$(document).ready(function () {
  var apiUrl = 'https://api.lever.co/v0/postings/teacollection'; //get all the job listings

  $.get(apiUrl + '?mode=json', function (data) {
    console.log('all jobs');
    console.log(data);
    var jobs = data;
    $(jobs).each(function (i, val) {
      var jobId = val.id;
      var jobTitle = val.text;
      var jobUrl = jobTitle.replace(',', '');
      jobUrl = jobUrl.replace(/ /g, '-');
      var jobType = val.categories.commitment;
      var jobLocation = val.categories.location;
      var jobTeam = val.categories.team;
      $('.jobs-list').append('<li><h4><a href="#' + jobUrl + '" data="' + jobId + '"><span>' + jobTitle + ' - ' + jobType + '</span><span>' + jobLocation + '</span></a></h4></li>');
    }); //end of loop
    //onclick show the job

    $('.jobs-list li a').click(function (e) {
      window.scrollTo(0, 0); // e.preventDefault();

      var jobId = $(this).attr('data'); //get the clicked job

      $.get(apiUrl + '/' + jobId, function (job) {
        console.log('single job');
        console.log(job); //hide the original page content

        $('.careers-welcome').hide(); //show the clicked job content

        var backTo = '<p class="all-jobs"><a href="#">Back to All Jobs</a></p>';
        var jobTitle = '<h2>' + job.text + '</h2>';
        var jobApply = '<h2 style="margin: 10px 0"><a href="' + job.applyUrl + '" target="_blank">apply</a></h2>';
        var jobLocation = '<p>' + job.categories.location + '<br> ' + job.categories.team + '<br> ' + job.categories.commitment + '</p>' + jobApply;
        var jobDesc = job.description;
        var jobFooter = job.additional;
        var jobContent = backTo + jobTitle + jobLocation + jobDesc; // show the title, location, description

        $('.the-job').append(jobContent); //show the responsibilities & qualifications

        var lists = job.lists;
        $(lists).each(function (j, arr) {
          var listTitle = '<h3>' + arr.text + '</h3>';
          var list = '<ul>' + arr.content + '</ul>';
          var listContent = listTitle + list;
          $('.the-job').append(listContent);
        }); //show the footer and apply

        $('.the-job').append(jobFooter + jobApply); //on click return to all jobs

        $('.all-jobs').click(function (e) {
          window.scrollTo(0, 0); // e.preventDefault();
          //remove the single job

          $('.the-job').children().remove(); //show the original page content

          $('.careers-welcome').show();
        }); // end of .all-jobs click
      }); // end of $.get single job
    }); //end of .jobs-list li a click
  }); //end of $.get all jobs
}); //end of document .ready
//# sourceMappingURL=scripts.js.map
