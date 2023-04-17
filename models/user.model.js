const mongoose = require("mongoose");
const constants = require("../utils/constants");

const eshopUserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: [constants.userRole.user, constants.userRole.admin],
      default: constants.userRole.user,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const eshopUserModel = mongoose.model("Eshop_user", eshopUserSchema);

module.exports = eshopUserModel;
