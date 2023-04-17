const mongoose = require("mongoose");

const eshopOrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: () => Date.now(),
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Eshop_product",
    required: true,
  },
  shippingAddressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Eshop_shipping_address",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Eshop_user",
    required: true,
  },
});

const EshopOrderModel = mongoose.model("Eshop_order", eshopOrderSchema);

module.exports = EshopOrderModel;
