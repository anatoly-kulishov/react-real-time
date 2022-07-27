import React from 'react';
import LongPolling from "./LongPolling";
import EventSourcing from "./EventSourcing";
import WebSocket from "./WebSocket";
import './app.css';

function App() {

	return (
		<div>
			{/*<LongPulling/>*/}
			{/*<EventSourcing/>*/}
			<WebSocket/>
		</div>
	)
}


export default App;
