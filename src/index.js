var http = require("http");
var operations = require("./operations");

var server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello, world!");
    res.end();
  })
  .listen(3000);

console.log("🚀 Suma:", operations.suma(1, 1));
console.log("🚀 Multiplicación:", operations.multiplicacion(1, 2));
