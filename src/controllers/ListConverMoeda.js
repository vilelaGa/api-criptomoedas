const db = require("../infra/database/connect");
const axios = require("axios");

class ListConverMoeda {
  static async TrazCoverMoeda(req, res) {
    const api = axios.create({
      baseURL: `https://economia.awesomeapi.com.br/`,
    });

    const { token, conversao } = req.params;

    if (conversao != "EUR" && conversao != "USD") {
      return res.status(400).json({ msg: `Metodo ${conversao} e invalido` });
    }

    switch (conversao) {
      case "EUR":
        console.log(`Conversão em EURO`);

        var { data } = await api.get(`${conversao}`);

        db.query(
          "SELECT * FROM api WHERE token = ?",
          [token],
          (err, result) => {
            var valor = result[0].valor / data[0].bid;

            return res.json({
              id: result[0].id,
              token: result[0].token,
              nome: result[0].nome,
              valor: valor,
              img: result[0].img,
            });
          }
        );
        break;
      case "USD":
        console.log(`Conversão em DOLAR`);

        var { data } = await api.get(`${conversao}`);

        db.query(
          "SELECT * FROM api WHERE token = ?",
          [token],
          (err, result) => {
            var valor = result[0].valor / data[0].bid;

            return res.json({
              id: result[0].id,
              token: result[0].token,
              nome: result[0].nome,
              valor: valor,
              img: result[0].img,
            });
          }
        );

        break;
    }
  }
}

module.exports = { ListConverMoeda };
