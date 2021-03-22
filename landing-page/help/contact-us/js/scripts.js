$(document).ready(function() {
  // jQuery('img[usemap]').rwdImageMaps();

  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var message;

  //for dev
  // month = 9;
  // day = 2;

  switch (month) {
    //november
    case 11:
      if (day >= 26) {
        $('.holiday-closure').hide();
      } else if (day <= 25) {
        message = `<h3>Thanksgiving Day ${month}/25/${year}</h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //december & january
    case 12:
      // if(month == 1 && day >= 2){
      //     $('.holiday-closure').hide();
      // } else

      if (day >= 1) {
        year = year + 1;
        // message = `<ul>
        // <li>Christmas Eve ${month}/24</li>
        // <li>New Years Day 1/1/${year}</li>
        // </ul>`;
        $('.holiday-closure h2').text('CUSTOMER CARE HOLIDAY HOURS')
        message = `
        <ul>
          <li>Christmas Eve Hours: 7am PT - 2pm PT</li>
          <li>Christmas Day CLOSED</li>
          <li>New Year's Eve Hours: 7am PT - 2pm PT</li>
          <li>New Years Day CLOSED</li>
        </ul>
        `;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //january
    case 1:
      if (day >= 3) {
        $('.holiday-closure').hide();
      } else if (day <= 2) {
        message = `
        <ul>
          <li>New Years Day </li>
        </ul>
        `;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //february
      // case 2:
      //     if(day >= 21){
      //         $('.holiday-closure').hide();
      //     } else if(day >= 1){
      //         message = '<h3>President\'s Day '+ month +'/20/'+ year +'</h3>';
      //         $('.holiday-closure p').html(message);
      //         $('.holiday-closure').show();
      //     }
      //     break;
      //march & april
    case 3:
      var month = month + 1;
      if (day <= 16) {
        $('.holiday-closure').hide();
      } else if (day >= 17) {
        message = `<h3>Easter ${month}/4/${year}</h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //april
    case 4:
      if (day >= 5) {
        $('.holiday-closure').hide();
      } else if (day <= 4) {
        message = `<h3>Easter ${month}/4/${year}</h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //may
    case 5:
      if (day <= 15) {
        $('.holiday-closure').hide();
      } else if (day >= 16) {
        message = `<h3>Memorial Day ${month}/31/${year} </h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //june & july
    case 6:
      if (day <= 15) {
        $('.holiday-closure').hide();
      } else if (day >= 16) {
        var month = month + 1;
        message = `<h3>Independence Day ${month}/4/${year} </h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //july
    case 7:
      if (day >= 5) {
        $('.holiday-closure').hide();
      } else if (day <= 4) {
        message = `<h3>Independence Day ${month}/4/${year} </h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //august & september
    case 8:
      if (day <= 15) {
        $('.holiday-closure').hide();
      } else if (day >= 16) {
        var month = month + 1;
        message = `<h3>Labor Day ${month}/6/${year}</h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
      //september
    case 9:
      if (day >= 7) {
        $('.holiday-closure').hide();
      } else if (day <= 6) {
        message = `<h3>Labor Day ${month}/6/${year}</h3>`;
        $('.holiday-closure p').html(message);
        $('.holiday-closure').show();
      }
      break;
  }
});