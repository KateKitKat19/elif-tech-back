const { Orders } = require("../../models/OrderModel");
const { errorCatcher } = require("../../helpers");

const addOrder = async (req, res) => {
  try {
    const items = JSON.parse(req.body.items);
    const newOrder = await Orders.create(...req.body, items);
    res.status(201).json({ status: 201, data: newOrder });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addOrder: errorCatcher(addOrder),
};
