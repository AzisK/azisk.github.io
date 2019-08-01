var listElement = s('.js-list');

function educationList () {
  var educationList = [];
  var educations = [
    ['Informatics Master of Science', 'KTU', 'https://ktu.edu/', '2016-2018', 'Changed my field from physics to informatics. Have been creating an AI music composer for my thesis.'],
    ['Physics Bachelor of Science', 'KTU', 'https://ktu.edu/', '2012-2016', 'Graduated with a Bachelor of Science in applied physics.'],
    ['Erasmus studies', 'Trieste', 'https://www.units.it/', '2015 fall', 'Met outstanding lads and lasses that enriched me wholly. Struggled really hard in grasping quantum field physics while being an undergraduate.'],
    ['Erasmus studies', 'Bilkent', 'http://w3.bilkent.edu.tr/bilkent/', '2014 fall', 'Opened up all of my horizons. Met amazing people that made me the 10x person than I have been before.']
  ];
  makeList(educationList, educations);
  (function () {
    listElement.innerHTML = list(educationList);
  })();
}

function jobList () {
  var jobList = [];
  var jobs = [
    ['Data Engineer', 'Kayak', 'https://www.kayak.com/', ' Since 2018 November', "Taking care of SEO data."],
    ['Software Engineer', 'Kayak', 'https://www.kayak.com/', '2018 January-November', "Helping people travel the world."],
    ['Software Engineer', 'Icybit', 'https://icybit.co/', '2017 April-September', "Maintaining a huge b2b e-commerce shop and later analising loads of communications data."],
    ['Software Engineer Intern', 'Valuetech', 'http://www.valuetech.eu/', '2017 January-April', 'Software engineering internship in an Italy.'],
    ['Junior Laboratory Coordinator', 'KTU', 'https://ktu.edu/', '2016 Autumn', 'Demonstrations of picturesque and interactive physics and chemistry experiments to students.'],
    ['Back Waiter', 'P F Changs Hawaii', 'http://www.pfchangshawaii.com/', '2016 Summer', 'Having a crazy summer surfing and hiking while not serving food in one of the busiest restaurants in the world.']
  ];
  makeList(jobList, jobs);
  (function () {
    listElement.innerHTML = list(jobList);
  })();
}

function lifeDiv() {
  var div = `
    <div class="life">
      <div class="life-text">
          <h1>
            Hi, stranger. My name is Azis. 
          </h1>
          <h3>
            I am a software engineer and a data scientist trying to bring life to internet and earn a dollar.
          </h3>
          <h3>
            <a class="color-enhanced enhance-animate" onclick="goToDesign()">Try this page out!<a>
          </h3>
      </div>
      <img src="https://i.imgur.com/TiY7WFV.jpg">
    </div>
  `;
  (function () {
    listElement.innerHTML = div;
  })();
}
