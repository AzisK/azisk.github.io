var goDesign = document.querySelectorAll('.go-design');
var animatedText = false;

for (var i = 0; i < goDesign.length; i++) {
  goDesign[i].onclick = function () {
     scrollIn(designPage);
     if (!animatedText) {
      animateText('#cross-platform', 'Cross-platform', 0, 110);
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
var footerLink = document.querySelector('.footer a');
var touchElements = [html, footerLink];
mobileBlocks.forEach(function (el) {
  touchElements.push(el);
});

var mobileView = function (on) {
  mobileBlocks.forEach(function (el) {
    if (on == 1) {
      el.classList.add('block-mobile');
      el.querySelector('svg').classList.add('block-svg');
    } else {
      if (el.classList.contains('block-mobile')) {
        el.classList.remove('block-mobile');
        el.querySelector('svg').classList.remove('block-svg');
      }
    }
  });
}

var touchView = function (on) {
  if (on == 1) {
    if (!html.classList.contains('cursor')) {
      touchElements.forEach(function (el) {
        el.classList.add('cursor');
      });
    }
  } else {
    touchElements.forEach(function (el) {
      el.classList.remove('cursor');
    });
  }
}

var responsiveView = function (currentMode, deviceMode) {
  if (currentMode != deviceMode) {
    body.classList.remove(currentMode);
    body.classList.add(deviceMode);

    if (deviceMode == 'mobile-view') {
      iphoneButton.classList.remove('hidden');
      mobileView(1);
      touchView(1);
    }
    if (deviceMode == 'tablet-view') {
      iphoneButton.classList.remove('hidden');
      mobileView(0);
      touchView(1);
    }
    if (deviceMode == 'desktop-view') {
      iphoneButton.classList.add('hidden');
      mobileView(0);
      touchView(0);
    }
  }
}

function deviceView (device) {
  var deviceMode = device.classList[0] + '-view';
  var currentMode = body.classList[0];
  responsiveView(currentMode, deviceMode);  
  scrollIn(main);
};

(function addViews () {
  for (var i = 0; i < views.length; i++) {
    views[i].onclick = function () {
      deviceView(this);
    };
  }
}());

iphoneButton.onclick = function () {
  scrollIn(main);
}



