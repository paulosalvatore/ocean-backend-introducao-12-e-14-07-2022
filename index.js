const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// /oi -> "Olá, mundo"
app.get("/oi", function (req, res) {
  res.send("Olá, mundo");
});

// Endpoints de Heróis

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//               0                   1                2

// [GET] /herois
app.get("/herois", function (req, res) {
  res.send(herois);
});

app.listen(3000, function () {
  console.log("Aplicação rodando em http://localhost:3000");
});
