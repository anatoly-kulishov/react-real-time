const ws = require('ws');

const wss = new ws.Server({
	port: 5000,
}, () => console.log(`Server started on 5000`))

wss.on('connection', function connection(ws) {
	let username;

	ws.on('message', function (message) {
		message = JSON.parse(message);
		switch (message.event) {
			case 'message':
				broadcastMessage(message);
				break;
			case 'connection':
				broadcastMessage(message);
				username = message.username
				break;
		}
	})

    ws.on('close', (code, reason) => {
		broadcastMessage({
			event: 'disconnected',
			username: username,
			code,
			reason
		})
	});
})

function broadcastMessage(message, id) {
	wss.clients.forEach(client => {
		client.send(JSON.stringify(message));
	})
}
