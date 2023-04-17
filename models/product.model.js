const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eshop_product = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    availableItems: {
      type: Number,
      required: true,
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Eshop_product", eshop_product);

module.exports = Product;
