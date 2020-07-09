var imageElement = document.getElementById('image');

// var rect;
var top_p = 0;
var left_p = 0;
var win_wid = window.innerWidth;
var win_hei = window.innerHeight;

function inform_server(top_p, left_p) {
	socket.send(JSON.stringify({ top: top_p, left: left_p }));
}

var socket = new WebSocket("ws://" + url);

// register connect event
socket.onopen = function () {
	console.log("Connected to server");
	imageElement.style.top = top_p - row * win_hei + 'px';
	imageElement.style.left = left_p - col * win_wid + 'px';
};
// Log errors
socket.onerror = function (error) {
	console.log('Websocket error ' + error);
}
// Log messages from server
var status;
socket.onmessage = function (message) {
	status = message.data;
	h = JSON.parse(status);
	imageElement.style.top = h.top - row * win_hei + 'px';
	imageElement.style.left = h.left - col * win_wid + 'px';
}

//Make the DIV element draggagle:
dragElement(imageElement);

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		inform_server(elmnt.offsetTop + row * win_hei, elmnt.offsetLeft + col * win_wid)
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}