// import { io, Socket } from 'socket.io-client';

// // const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
// const URL = 'wss://compiler.skillshikshya.com/ws/compiler/';

// // Create and export the socket instance
// export const socket: Socket = io(URL, {
//   autoConnect: true, // Automatically connect on initialization
//   reconnection: true, // Enable reconnection if the connection drops
//   transports: ['websocket'], // Enforce WebSocket transport for better performance
// });



const socket = new WebSocket("ws://localhost:8080")

// Connection opened
socket.addEventListener("open", event => {
  socket.send("Connection established")
  console.log("connected")
});

// Listen for messages
socket.addEventListener("message", event => {
  console.log("Message from server ", event.data)
  console.log("connected")
});