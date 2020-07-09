// https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61

'use strict';

// process identifier for 'ps' or 'top' like utilities
process.title = 'BicastR server';

// port of websocket server
var websocketPort = 1337;

var websocketServer = require('websocket').server;
var http = require('http');

// list of clients
var clients = [];

/**
 * HTTP server
 */
var server = http.createServer(function (request, response) {
	// no need to do anything here	
});

server.listen(websocketPort, function(){
	console.log((new Date()) + " Server is listening on port " + websocketPort);
});

/**
 * WebSocket server
 */
var wsServer = new websocketServer({
	httpServer:server
});

var num_client = 0;
// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request){

	console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

	// accept connection
	var connection = request.accept(null, request.origin);
	console.log((new Date()) + ' Connection accepted');

	// parsing client data
	clients.push(connection);
	connection.on('message', function(message){
		// connection.send(JSON.stringify(message.utf8Data));
		clients.forEach(conn => {
			if(conn != connection)
			conn.sendUTF(message.utf8Data);
		});
	});

	// client disconnected
	connection.on('close', function(connection){
		console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
	});
});