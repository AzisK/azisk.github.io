var mainPage = document.querySelector('.main-page');
var designPage = document.querySelector('.design-page');
var html = document.querySelector('.html');

var scrollIn = function (div) {
  div.scrollIntoView({ behavior: "smooth"});
};

var animateText = function (target, message, index, interval) { 
  var targetSelector = document.querySelector(target);
  if (index < message.length) {
    targetSelector.append(message[index++]);
    var timeout = setTimeout(function () { animateText(target, message, index, interval); }, interval);
  } 
};
