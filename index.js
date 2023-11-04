const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const { auth } = require("./firebase.js");

dotenv.config();

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:5173" } });
const port = process.env.PORT;

io.on("connection", (socket) => {
  console.log("New connection: ", socket.id);
});

app.get("/users", async (req, res) => {
  const { users } = await auth.listUsers();
  res.json({ success: true, message: "Get list of all users", data: users });
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
