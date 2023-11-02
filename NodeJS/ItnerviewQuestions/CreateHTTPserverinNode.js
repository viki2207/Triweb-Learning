//can u create http server in node.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.send("Server is running");
});

server.listen(3000);
