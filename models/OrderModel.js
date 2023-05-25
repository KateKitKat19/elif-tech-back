const { Schema, model } = require("mongoose");
const { handleError } = require("../helpers");
const Joi = require("joi");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    items: [
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
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleError);

const itemSchema = Joi.object({
  _id: Joi.objectId(),
  title: Joi.string().required(),
  shop: Joi.string().required(),
  image: Joi.string(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

const addOrderSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .max(20)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.empty":
            err.message = `Missing required name field`;
            break;
          case "string.min":
            err.message = `Name should have at least ${err.local.limit} characters!`;
            break;
          case "string.max":
            err.message = `Name should have at most ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  email: Joi.string()
    .required()
    .email()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.empty":
            err.message = `Missing required email field`;
            break;
          case "string.email":
            err.message = `Value is not a valid e-mail`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  phone: Joi.string()
    .required()
    .min(8)
    .max(16)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.empty":
            err.message = `Missing required phone field`;
            break;
          case "string.min":
            err.message = `Phone number should have at least ${err.local.limit} characters!`;
            break;
          case "string.max":
            err.message = `Phone number should have at most ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  address: Joi.string()
    .required()
    .min(8)
    .max(22)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.empty":
            err.message = `Missing required address field`;
            break;
          case "string.min":
            err.message = `The address should have at least ${err.local.limit} characters!`;
            break;
          case "string.max":
            err.message = `The address should have at most ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  items: Joi.array().items(itemSchema),
});

const Orders = model("orders", orderSchema);

module.exports = {
  orderSchema,
  Orders,
  addOrderSchema,
};
