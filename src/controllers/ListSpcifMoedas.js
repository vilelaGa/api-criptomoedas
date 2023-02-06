const db = require("../infra/database/connect");

class ListSpcifMoedas {
  /**
   *Traz uma moeda especifica
   */
  static TrazMoedaEsp(req, res) {
    const { token } = req.params;

    db.query("SELECT * FROM api WHERE token = ?", [token], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
}

module.exports = { ListSpcifMoedas };
