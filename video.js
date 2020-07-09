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
	imageElement.style.top = (top_p - row * win_hei) + 'px';
	imageElement.style.left = (left_p - col * win_wid) + 'px';
	if (row != 0 || col != 0) {
		imageElement.muted = true;
	}
};

// Log errors
socket.onerror = function (error) {
	console.log('Websocket error ' + error);
}
// Log messages from server
var status;
var deadlock;
socket.onmessage = function (message) {
	status = message.data;
	h = JSON.parse(status);
	if (h.videoEve == true) {
		deadlock = true;
		if (h.play == true) {
			imageElement.play();
			imageElement.currentTime = h.time;
			console.log("playing");
		}
		else if (h.pause == true) {
			imageElement.pause();
			imageElement.currentTime = h.time;
			console.log("paused");
		}
		else if (h.seek == true) {
			imageElement.currentTime = h.time;
			console.log("seeking");
		}
	}
}

// video controls
imageElement.onplay = function (e) {
	if (deadlock == true) {
		deadlock = false;
	}
	else {
		socket.send(JSON.stringify({ videoEve: true, play: true, time: imageElement.currentTime }));
	}
}

imageElement.onpause = function () {
	if (deadlock == true) {
		deadlock = false;
	}
	else {
		socket.send(JSON.stringify({ videoEve: true, pause: true, time: imageElement.currentTime }));
	}
}

imageElement.onseeking = function () {
	if (deadlock == true) {
		deadlock = false;
	}
	else {
		socket.send(JSON.stringify({ videoEve: true, seek: true, time: imageElement.currentTime }));
	}
}