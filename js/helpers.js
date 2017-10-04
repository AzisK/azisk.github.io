var main = document.querySelector('.main');
var designPage = document.querySelector('.design-page');
var html = document.querySelector('.html');

var scrollIn = function (div) {
  div.scrollIntoView({ behavior: "smooth"});
};

var animateText = function (target, message, index, interval) { 
  var targetSelector = document.querySelector(target);
  if (index < message.length) {
    if (targetSelector.textContent.length == message.length) {
      clearText(target);
    }
    targetSelector.append(message[index++]);
    var timeout = setTimeout(function () { animateText(target, message, index, interval); }, interval);
  } else {
    clearTimeout(timeout);
  }
};

var clearText = function (target) {
  document.querySelector(target).textContent = ''
};