const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send({ nome: "Ola Mundo" });
});

module.exports = routes;
