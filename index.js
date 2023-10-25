const express = require("express");
const dotenv = require("dotenv");
const { createServer } = require("node:http");

dotenv.config();

const app = express();
const server = createServer(app);
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("The Chat App server is running");
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
