const express = require("express");
const { orderHandler } = require("../controllers/order.controller");
const router = express.Router();

router.post("/createorder", orderHandler);

module.exports = router;
