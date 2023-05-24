const express = require("express");
const router = express.Router();
const { getAllGoods } = require("../../controllers/goods");

router.get("/", getAllGoods);

module.exports = router;
