const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const errorHandler = require("../middlewares/errorHandler");

router.get("/products", productController.showProduct);
router.get("/cart", cartController.showCart);
router.post("/cart/:id", cartController.addCart);
router.delete("/cart/:ProductId", cartController.removeCart);

router.use(errorHandler.errHandler);

module.exports = router;
