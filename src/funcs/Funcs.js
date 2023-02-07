const db = require("../infra/database/connect");

class Funcs {
  static async BRL_EUR(token) {
    db.query(
      "SELECT * FROM api WHERE token = ?",
      [token],
      async (err, result) => {
        return {
          id: result[0].id,
          token: result[0].token,
          nome: result[0].nome,
          valor: result[0].valor,
          img: result[0].img,
        };
      }
    );
  }
}

module.exports = { Funcs };
