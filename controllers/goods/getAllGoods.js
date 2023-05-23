const { Goods } = require("../../models/GoodsModel");
const { errorCatcher } = require("../../helpers");

const getAllGoods = async (req, res) => {
  const result = await Goods.find();
  res.json(result);
};

module.exports = {
  getAllGoods: errorCatcher(getAllGoods),
};
