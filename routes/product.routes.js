const express = require("express");
const { productHandler } = require("../controllers/product.controller");
const router = express.Router();

router.get('/getproducts/:id', productHandler);

module.exports = router;
