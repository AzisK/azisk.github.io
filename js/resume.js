var education = document.querySelector('.education');
var jobs = document.querySelector('.jobs');
var life = document.querySelector('.life');

var modes = [education, jobs, life];
var currentMode;

function svgSelect (mode) {
  if (mode != currentMode) {
    if (document.querySelector('.hover-color-svg')) {
      document.querySelector('.hover-color-svg').classList.remove('hover-color-svg');
    }

    mode.querySelector('svg').classList.add('hover-color-svg');
  }
}

function resumeMode (mode) {
  if (mode == 'education') {
    educationList();
  }
  if (mode == 'jobs') {
    jobList();
  }
  addListHead(mode);
  currentMode = mode;
}

resumeMode('education');
svgSelect(education);

function addModes () {
  for (var i = 0; i < modes.length; i++) {
    modes[i].onclick = function () {
      resumeMode(this.classList[0]);
      svgSelect(this);
    }
  }
}

addModes();
