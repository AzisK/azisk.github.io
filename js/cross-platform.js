var mobile = document.querySelector('.mobile');
var tablet = document.querySelector('.tablet');
var desktop = document.querySelector('.desktop');

var views = [mobile, tablet, desktop];

var body = document.body;
var main = document.querySelector('.main');
var iphoneButton = document.querySelector('.iphone-button');

for (var i = 0; i < views.length; i++) {
  views[i].onclick = function () {
    thisClass = this.classList[0];
    if (body.classList.length) {
      if (body.classList[0] == thisClass + '-view') {
        body.classList.remove(body.classList[0]);
      } else {
        body.classList.remove(body.classList[0]);
        body.classList.add(thisClass + '-view');
      }
    } else {
      body.classList.add(thisClass + '-view');
    }

    if (body.classList[0] == 'mobile-view' || body.classList[0] == 'tablet-view') {
      iphoneButton.classList.remove('hidden');
    } else {
      iphoneButton.classList.add('hidden')
    }

    main.scrollIntoView({ behavior: "smooth"});
  };
}


iphoneButton.onclick = function () {
  main.scrollIntoView({ behavior: "smooth"});
}
