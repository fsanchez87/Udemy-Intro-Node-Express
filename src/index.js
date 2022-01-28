const express = require("express");
const bodyParser = require("body-parser");
const { phone } = require("phone");
const { restart } = require("nodemon");

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, HOME !");
});

app.get("/info", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res
    .status(200)
    .send(
      JSON.stringify({ name: "udemy-intro-node-express", version: "1.0.0" })
    );
});

app.get("/detail", (req, res) => {
  res.status(200).send("Hello, DETAIL!");
});

app.get("/detail", (req, res) => {
  res.status(200).send("Hello, DETAIL!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  username === "paco" && password === "2345"
    ? res.send({ status: "ok" })
    : res.status(401).send({ status: "Error" });
});

app.get("/phone", (req, res) => {
  try {
    const { value, country } = req.query;
    const result = phone(value, { country: country });
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    res.status(400).send("Bad response,", error.message);
  }
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
