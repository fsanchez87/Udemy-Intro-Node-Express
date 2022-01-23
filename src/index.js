const http = require("http");
const { multiplicacion } = require("./utils/operations");

const PORT = 3000;

const server = http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Hello, HOME!");
        break;
      case "/info":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(
          JSON.stringify({ name: "udemy-intro-node-express", version: "1.0.0" })
        );
        break;
      case "/detail":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Hello, DETAIL!");
        break;
      default:
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write("Hello, not fount!");
        break;
    }
    res.end();
  })
  .listen(PORT);

console.log("🚀 Multiplicación:", multiplicacion(1, 2));
