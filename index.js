// 1. Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server, the server should respond with a "Hello, Students!" message.//

const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("Hello, Students!");
  })
  .listen(3000, () => {
    console.log("server started");
  });
