var http = require("http");
var { multiplicacion } = require("./utils/operations");

var server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello, world!");
    res.end();
  })
  .listen(3000);

console.log("🚀 Multiplicación:", multiplicacion(1, 2));
