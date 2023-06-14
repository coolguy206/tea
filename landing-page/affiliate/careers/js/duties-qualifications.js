
export var dutiesQualifications = function(job, str){
    var duties = job;
    var dutiesLi = ``;
    var dutiesTitle = `<h3>${str}</h3>`;
    $(duties).each(function (j, arr) {
      var list = `<li>${arr}</li>`;
      dutiesLi = dutiesLi + list;
    });

    var dutiesList = `<ul>${dutiesLi}</ul>`;
    var dutiesContent = dutiesTitle + dutiesList;
    $('.the-job').append(dutiesContent);
};


