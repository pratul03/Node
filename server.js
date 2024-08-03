/***
 *
 * 3. Write a Node.js program that creates an HTTP server and handles different routes. The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route.
 */

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello, World!");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("Not found");
  }
});

server.listen(5000, () => {
    console.log("server started");
});
