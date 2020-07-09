var alignment;

// window.onload = function(){
// 	alignment = prompt("Alignment");
// };

$(function () {
	$(".image").draggable();
});

var imageElement = document.getElementById('image');

// var rect;
var top_p = 0;
var left_p = 0;
var win_wid = window.outerWidth;
var win_hei = window.outerHeight;

function update(){
	// rect = imageElement.getBoundingClientRect();
	// console.log(rect.left, rect.top);
	top_p = parseInt(imageElement.style.top.slice(0,-2));
	left_p = parseInt(imageElement.style.left.slice(0,-2));
	inform_server(top_p, left_p + alignment*win_wid);
};

function inform_server(top_p, left_p){
	socket.send(JSON.stringify({top:top_p,left:left_p}));
}

// JSON object
// var status = {
// 	type:alignment,
// 	top:top_p,
// 	left:left_p
// }

var socket = new WebSocket("ws://localhost:1337");

// register connect event
socket.onopen = function(){
	console.log("Connected to server");
	socket.send(JSON.stringify({top:top_p,left:left_p}));
};
// Log errors
socket.onerror = function(error){
	console.log('Websocket error ' + error);
}
// Log messages from server
var status;
socket.onmessage = function(message){
	status = message.data;
	h = JSON.parse(status);
	console.log(h.top, h.left);
	imageElement.style.top = h.top + 'px';
	imageElement.style.left = h.left - alignment*win_wid + 'px';
}