"use strict";

$(document).ready(function () {
  var countryCode = "US";
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var message;
  var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var holidayApi = "https://date.nager.at/api/v3/PublicHolidays";
  fetch("".concat(holidayApi, "/").concat(year, "/").concat(countryCode)).then(function (data) {
    return data.json();
  }).then(function (data) {
    var nextYear = year + 1;
    fetch("".concat(holidayApi, "/").concat(nextYear, "/").concat(countryCode)).then(function (newData) {
      return newData.json();
    }).then(function (newData) {
      console.log("next year data");
      console.log(newData);
      console.log("current year data");
      console.log(data);

      //? for dev
      // month = 12;
      // day = 2;

      var holidays = data;
      holidays.map(function (val, i) {
        // console.log(val);
        var holidayDate = val.date;
        holidayDate = holidayDate.split('-');
        var holidayYear = Number(holidayDate[0]);
        var holidayMonth = Number(holidayDate[1]);
        var holidayDay = Number(holidayDate[2]);
        // console.log(month, holidayMonth);
        // console.log(day, holidayDay);

        //? for new years
        var nextYearDate = newData[0].date;
        nextYearDate = nextYearDate.split('-');
        var nextYearYear = nextYearDate[0];
        var nextYearMonth = nextYearDate[1];
        var nextYearDay = nextYearDate[2];
        if (year == holidayYear) {
          if (val.name !== "Good Friday" && val.name !== "Martin Luther King, Jr. Day" && val.name !== "Washington's Birthday" && val.name !== "Juneteenth" && val.name !== "Columbus Day" && val.name !== "Veterans Day" && val.name !== "Veterans Day") {
            if (month == 12 && month == holidayMonth) {
              message = "\n                <h3>Christmas Eve ".concat(holidayMonth, "/24/").concat(holidayYear, "</h3>\n                <h3>").concat(val.name, " ").concat(holidayMonth, "/").concat(holidayDay, "/").concat(holidayYear, "</h3>\n                <h3>New Year\u2019s Eve ").concat(holidayMonth, "/31/").concat(holidayYear, "</h3>\n                <h3>").concat(newData[0].name, " ").concat(nextYearMonth, "/").concat(nextYearDay, "/").concat(nextYearYear, "</h3>\n              ");
              $('.holiday-closure p').html(message);
              $('.holiday-closure').show();
            } else if (month == 7 && month == holidayMonth) {
              var theDay = new Date("".concat(holidayMonth, "/").concat(holidayDay - 1, "/").concat(holidayYear)).getDay();
              theDay = weekdays[theDay - 1];

              // console.log(theDay);
              message = "\n              <!-- <h3>".concat(theDay, " ").concat(holidayMonth, "/").concat(holidayDay - 1, "/").concat(holidayYear, "</h3> -->\n              <h3>").concat(val.name, " ").concat(holidayMonth, "/").concat(holidayDay, "/").concat(holidayYear, "</h3>\n              ");
              $('.holiday-closure p').html(message);
              $('.holiday-closure').show();
            } else if (month == holidayMonth) {
              message = "<h3>".concat(val.name, " ").concat(holidayMonth, "/").concat(holidayDay, "/").concat(holidayYear, "</h3>");
              $('.holiday-closure p').html(message);
              $('.holiday-closure').show();
            }
          }
        }
      });
    });
  })["catch"](function (err) {
    console.log("oops something went wrong");
    console.log(err);
  });
});
//# sourceMappingURL=scripts.js.map
