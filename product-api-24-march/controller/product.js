const Product = require("../models/product");

exports.postProduct = (req, res) => {
  new Product(req.body).save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "Product created" });
    }
  });
};

exports.getProducts = (req, res) => {
  Product.find((error, products) => {
    if (error) {
      res.json(error);
    } else {
      res.json(products);
    }
  });
};
