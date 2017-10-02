var h2GoDesign = document.querySelector('.h2-go-design');
var detailsGoDesign = document.querySelector('.details');

var designPage = document.querySelector('.design-page');

goDesign = [h2GoDesign, detailsGoDesign]

for (var i = 0; i < goDesign.length; i++) {
  goDesign[i].onclick = function () {
     designPage.scrollIntoView({ behavior: "smooth"});
  };
}
