const { Product } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((err) => req.status(500).json(err));
});

module.exports = router;
