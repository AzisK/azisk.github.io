var goDesign = document.querySelectorAll('.go-design');
var animatedText = false;

for (var i = 0; i < goDesign.length; i++) {
  goDesign[i].onclick = function () {
     scrollDesign();
     if (!animatedText) {
      animateText('#cross-platform', 'Cross-platform', 0, 150);
      animatedText = true;
     }
  };
}

var mobile = document.querySelector('.mobile');
var tablet = document.querySelector('.tablet');
var desktop = document.querySelector('.desktop');

var views = [mobile, tablet, desktop];
var deviceMode = 'desktop';

var body = document.body;
var iphoneButton = document.querySelector('.iphone-button');
var mobileBlocks = document.querySelectorAll('.xs-block');

var mobileView = function (on) {
  mobileBlocks.forEach(function (el) {
    if (on == 1) {
      el.classList.add('block');
      el.querySelector('svg').classList.add('block-svg');
    } else {
      el.classList.remove('block');
      el.querySelector('svg').classList.remove('block-svg');
    }
  });
}

var responsiveView = function (currentMode, deviceMode, mobileBlocks) {
  if (currentMode != deviceMode) {
    body.classList.remove(currentMode);
    body.classList.add(deviceMode);

    if (deviceMode == 'mobile-view') {
      iphoneButton.classList.remove('hidden');
      mobileView(1);
    }
    if (deviceMode == 'tablet-view') {
      iphoneButton.classList.remove('hidden');
      mobileView(0);
    }
    if (deviceMode == 'desktop-view') {
      iphoneButton.classList.add('hidden');
      mobileView(0);
    }
  }
}

function deviceView (device) {
  var deviceMode = device.classList[0] + '-view';
  var currentMode = body.classList[0];
  responsiveView(currentMode, deviceMode);  
  scrollTop();
};

(function addViews () {
  for (var i = 0; i < views.length; i++) {
    views[i].onclick = function () {
      deviceView(this);
    };
  }
}());

iphoneButton.onclick = function () {
  scrollTop();
}



