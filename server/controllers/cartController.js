const { Product, Cart } = require("../models");

class cartController {
  static async showCart(req, res, next) {
    try {
      const response = await Cart.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });

      let countCart = 0;

      response.map((e) => {
        countCart = countCart + e.count;
      });

      res.status(200).json({ response, countCart });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async addCart(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await Product.findByPk(id);

      if (!resp) {
        throw { name: "notFound" };
      }

      const findCart = await Cart.findAll({
        where: {
          ProductId: id,
        },
      });

      const newCart = {
        ProductId: id,
        count: 1,
      };

      if (findCart.length == 0) {
        await Cart.create(newCart);
      } else {
        await Cart.increment(
          {
            count: 1,
          },
          {
            where: {
              ProductId: id,
            },
          }
        );
      }

      const response = await Cart.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });

      let countCart = 0;

      response.map((e) => {
        countCart = countCart + e.count;
      });

      res.status(200).json({ response, countCart });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async decreaseCart(req, res, next) {
    try {
      const { ProductId } = req.params;

      const resp = await Cart.findOne({
        where: {
          ProductId,
        },
        include: Product,
      });

      if (!resp) {
        throw { name: "notFound" };
      }

      if (resp.count == 1) {
        await Cart.destroy({
          where: {
            ProductId,
          },
        });
      } else {
        await Cart.decrement(
          {
            count: 1,
          },
          {
            where: {
              ProductId,
            },
          }
        );
      }

      const response = await Cart.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });

      let countCart = 0;

      response.map((e) => {
        countCart = countCart + e.count;
      });

      res.status(200).json({ response, countCart });
    } catch (err) {
      next(err);
    }
  }

  static async removeCart(req, res, next) {
    try {
      const { ProductId } = req.params;

      const resp = await Cart.findOne({
        where: {
          ProductId,
        },
        include: Product,
      });

      if (!resp) {
        throw { name: "notFound" };
      }

      await Cart.destroy({
        where: {
          ProductId,
        },
      });

      const response = await Cart.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });

      let countCart = 0;

      response.map((e) => {
        countCart = countCart + e.count;
      });

      res.status(200).json({ response, countCart });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = cartController;
