const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express(); // Create an instance of the Express application
const server = http.createServer(app); // Create an HTTP server using the Express app
const io = socketio(server); // Attach Socket.IO to the HTTP server to enable WebSocket functionality

io.on("connection", (socket) => {
  console.log("a user connected", socket.id); // Log when a user connects and print their socket ID

  socket.on("msg_send", (data) => {
    console.log(data);

    // io.emit("msg_rcvd", data); // emit to all
    // socket.emit("msg_rcvd", data); // emit to yourself only
    // socket.broadcast.emit("msg_rcvd", data); emit to all execept urself
  });

  setInterval(() => {
    socket.emit("From_server");
  }, 2000);
});

app.use("/", express.static(__dirname + "/public")); // Serve static files from the "public" directory for routes matching "/"

/* Another way of rendering the html page */

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html"); // Send the "index.html" file when a GET request is made to the root URL "/"
// });

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
