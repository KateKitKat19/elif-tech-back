const express = require("express");
const router = express.Router();
const { addOrder, getAllOrders } = require("../../controllers/orders");
const { addOrderSchema } = require("../../models/OrderModel");
const { validateBody } = require("../../helpers");

router.get("/", getAllOrders);
router.post("/", validateBody(addOrderSchema), addOrder);

module.exports = router;
