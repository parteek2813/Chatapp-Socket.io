const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const connect = require("./config/database-config");

const app = express(); // Create an instance of the Express application
const server = http.createServer(app); // Create an HTTP server using the Express app
const io = socketio(server); // Attach Socket.IO to the HTTP server to enable WebSocket functionality

io.on("connection", (socket) => {
  console.log("a user connected", socket.id); // Log when a user connects and print their socket ID
  socket.on("msg_send", (data) => {
    console.log(data);
    io.emit("msg_rcvd", data);
    // socket.emit("msg_rcvd", data); // emit to yourself only
    // socket.broadcast.emit("msg_rcvd", data);
  });
});

app.use("/", express.static(__dirname + "/public"));

app.get("/chat/:roomid", (req, res) => {
  res.render("index", {
    name: "Parteek",
    id: req.params.roomid,
  });
});

app.set("view engine", "ejs");

const PORT = 3000;
server.listen(PORT, async () => {
  console.log("Server listening on port", PORT);
  connect();
});
