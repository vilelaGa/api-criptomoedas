const db = require("../infra/database/connect");

class ListAllCriptosController {
  /*
   *Traz todas as criptos
   */
  static TrazAllMoedas(req, res) {
    db.query("SELECT * FROM api", (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
}

module.exports = { ListAllCriptosController };
