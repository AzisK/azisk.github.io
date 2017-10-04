var animatedText = false;

html.onscroll = function () {
	if (html.scrollTop > 100) {
		if (!animatedText) {
			animatedText = true;
			animateText('#cross-platform', 'Cross-platform', 0, 110);
		}
		html.onscroll = function () { };
	}
};