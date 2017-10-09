function addToList (list, name, place, placeLink, time) {
  time = time || '';
  if (time.length > 0) {
    time = ' // ' + time;
  }

  if (placeLink.length > 0) {
    placeLink = '<a href="' + placeLink + '">';
  }
  list.push(
    {
      name,
      place,
      placeLink,
      time
    }
  )
};

var list = function (list) {
  e = list;
  template = '';
  for (var i = 0; i < e.length; i++) {
    template +=
      '<li>'
        + '<h3>' + e[i].name + ' @ ' + e[i].placeLink
        + e[i].place + '</a>' + e[i].time + '</h3>'
      + '</li>';
  }
  return template;
}

var educationList = [];

addToList(educationList, 'Informatics MS', 'KTU', 'https://ktu.edu/', '2018');
addToList(educationList, 'Physics BS', 'KTU', 'https://ktu.edu/', '2016');
addToList(educationList, 'Erasmus studies', 'Trieste', 'https://www.units.it/');
addToList(educationList, 'Erasmus studies', 'Bilkent', 'http://w3.bilkent.edu.tr/bilkent/');

var education = document.querySelector('.education-list');
education.innerHTML = list(educationList);

// var workList = [];
//
// addToList(workList, 'Software Engineer', 'Icybit', '', '2017 April - September');
// addToList(workList, 'Software Engineer Intern', 'Valuetech', '', '2017 January - April');
// addToList(workList, 'Junior Laboratory Coordinator', 'KTU', '', '2016 Autumn');
// addToList(workList, 'Server', 'P F Changs Hawaii', '', '2016 Summer');
//
// var work = document.querySelector('.work-list');
// work.innerHTML = list(workList);
