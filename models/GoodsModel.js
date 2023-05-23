const { Schema, model } = require("mongoose");
const { handleError } = require("../helpers");

const goodsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

goodsSchema.post("save", handleError);

const Goods = model("goods", goodsSchema);

module.exports = {
  goodsSchema,
  Goods,
};
