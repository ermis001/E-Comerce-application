const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, unique: true },
    productName: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 40,
    },
    category: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    subCategory: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    price: {
      type: Number,
      required: true,
    },
    sale: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    quantity: {
      type: Number,
      required: true,
    },
    createdBy: {
      userName: {
        type: String,
      },
      userId: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
