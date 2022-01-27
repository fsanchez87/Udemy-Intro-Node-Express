const express = require("express");
const { multiplicacion } = require("./utils/operations");
const { phone } = require("phone");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, HOME !");
});

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   const urlData = url.parse(req.url, true);
//   const path = urlData.pathname;
//   const query = urlData.query;
//   console.log("PATH", path);
//   console.log("QUERY", query);

//   switch (path) {
//     case "/":
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("Hello, HOME!");
//       break;
//     case "/info":
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({ name: "udemy-intro-node-express", version: "1.0.0" })
//       );
//       break;
//     case "/detail":
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("Hello, DETAIL!");
//       break;

//     case "/phone":
//       try {
//         const result = phone(query.value, { country: query.country });
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(JSON.stringify(result));
//       } catch (error) {
//         res.writeHead(400, { "Content-Type": "text/html" });
//         res.write("Bad response,", error.message);
//       }
//       break;

//     default:
//       res.writeHead(400, { "Content-Type": "text/html" });
//       res.write("Hello, not fount!");
//       break;
//   }
// });

