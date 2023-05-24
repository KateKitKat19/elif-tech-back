const { Orders } = require("../../models/OrderModel");
const { errorCatcher } = require("../../helpers");

const getAllOrders = async (req, res) => {
  const result = await Orders.find();
  res.json(result);
};

module.exports = {
  getAllOrders: errorCatcher(getAllOrders),
};
