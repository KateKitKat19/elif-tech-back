const express = require("express");
const router = express.Router();
const { goodsSchema } = require("../../models/GoodsModel");
const { getAllGoods } = require("../../controllers/goods");
const { validateBody } = require("../../helpers");

router.get("/", getAllGoods);

module.exports = router;
