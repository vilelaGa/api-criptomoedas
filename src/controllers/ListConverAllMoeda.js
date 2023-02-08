const db = require("../infra/database/connect");
const axios = require("axios");

class ListConverAllMoeda {
  static async TrazCoverAllMoedas(req, res) {
    const api = axios.create({
      baseURL: `https://economia.awesomeapi.com.br/`,
    });

    const { conversao } = req.params;

    if (conversao != "EUR" && conversao != "USD") {
      return res.status(400).json({ msg: `Metodo ${conversao} e invalido` });
    }

    switch (conversao) {
      case "EUR":
        console.log(`Conversão em EURO`);

        var { data } = await api.get(`${conversao}`);

        db.query("SELECT * FROM api", async (err, result) => {
          var rsmoedas;
          return res.json(
            await result.map(function (moedas) {
              var converMoeda = moedas.valor / data[0].bid;
              // console.log(converMoeda);
              rsmoedas = {
                id: moedas.id,
                token: moedas.token,
                nome: moedas.nome,
                valor: converMoeda,
                img: moedas.img,
              };
              return rsmoedas;
              // console.log(rsmoedas);
            })
          );
        });

        break;
      case "USD":
        console.log(`Conversão em DOLAR`);

        var { data } = await api.get(`${conversao}`);

        db.query("SELECT * FROM api", async (err, result) => {
          var rsmoedas;
          return res.json(
            await result.map(function (moedas) {
              var converMoeda = moedas.valor / data[0].bid;
              // console.log(converMoeda);
              rsmoedas = {
                id: moedas.id,
                token: moedas.token,
                nome: moedas.nome,
                valor: converMoeda,
                img: moedas.img,
              };
              return rsmoedas;
              // console.log(rsmoedas);
            })
          );
        });

        break;
    }
  }
}

module.exports = { ListConverAllMoeda };
