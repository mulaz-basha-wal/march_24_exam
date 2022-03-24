var express = require("express");
var router = express.Router();
var productController = require("../controller/product");

router.get("/", productController.getProducts);
router.post("/", productController.postProduct);
module.exports = router;
