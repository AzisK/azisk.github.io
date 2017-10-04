var curStartPos, curPos, curDown, moveBy, moveTo;

document.onmousemove = function (e) {
	if (curDown) {
		curPos = e.clientY;
		moveBy = (curStartPos - curPos)*2;
		moveTo = html.scrollTop + moveBy;
		html.scrollTop = moveTo;
		curStartPos = curPos;
	}
}

document.onmousedown = function (e) {
    curStartPos = e.clientY;
    curDown = true;
}

document.onmouseup = function (e) {
    curDown = false
}
