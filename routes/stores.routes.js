const express = require("express");
const router = express.Router();
const { getStoreHandler } = require("../controllers/store.controller");

router.get('/getallstores', getStoreHandler);

module.exports = router;
