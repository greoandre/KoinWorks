const { Product } = require("../models");

class productController {
  static async showProduct(req, res) {
    try {
      const response = await Product.findAll();
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = productController;
