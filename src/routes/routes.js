const express = require("express");
const routes = express.Router();
const db = require("../infra/database/connect");
const {
  ListAllCriptosController,
} = require("../controllers/ListAllCriptosController");

const { ListSpcifMoedas } = require("../controllers/ListSpcifMoedas");

const { ListConverMoeda } = require("../controllers/ListConverMoeda");

const { ListConverAllMoeda } = require("../controllers/ListConverAllMoeda");

routes.get("/all", ListAllCriptosController.TrazAllMoedas);

routes.get("/moeda/token/:token", ListSpcifMoedas.TrazMoedaEsp);

routes.get(
  "/conversao/moedas/:token/:conversao",
  ListConverMoeda.TrazCoverMoeda
);

routes.get("/conversao/all/:conversao", ListConverAllMoeda.TrazCoverAllMoedas);

module.exports = routes;
