const http = require("http");
const { multiplicacion } = require("./utils/operations");

const PORT = 3000;

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello, world!");
    res.end();
  })
  .listen(PORT);

console.log("🚀 Multiplicación:", multiplicacion(1, 2));
