const express = require("express");
const { multiplicacion } = require("./utils/operations");
const { phone } = require("phone");

const PORT = 3000;
const app = express();

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

app.use((req, res) =>{
  res.status(404).send("NOT FOUND!");
});

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});

