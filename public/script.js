// call the io function and get the new socket object
var socket = io();

let btn = document.getElementById("btn");

btn.onclick = function exec() {
  socket.emit("From_client");
};

socket.on("From_server", () => {
  console.log("Collected new evernt form server");
  const div = document.createElement("div");
  div.innerText = "New event from server";
  console.log(div);
  document.body.appendChild(div);
});
