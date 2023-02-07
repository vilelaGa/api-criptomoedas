const db = require("../infra/database/connect");

class ListConverMoeda {
  static TrazCoverMoeda(req, res) {
    const { token, conversao } = req.params;

    if (conversao != ("EUR" || "USD"))
      return res.status(400).json({ msg: `Metodo ${conversao} e invalido` });

    switch (conversao) {
      case "EUR":
        console.log(`Conversão em EURO`);
        db.query(
          "SELECT * FROM api WHERE token = ?",
          [token],
          (err, result) => {
            return res.json({
              id: result[0].id,
              token: result[0].token,
              nome: result[0].nome,
              valor: result[0].valor,
              img: result[0].img,
            });
          }
        );
        break;
      case "USD":
        console.log(`Conversão em DOLAR`);
        break;
    }

    // db.query("SELECT * FROM api WHERE token = ?", [token]);

    // return res.json({ token: token, conversao: conversao });
  }
}

module.exports = { ListConverMoeda };
