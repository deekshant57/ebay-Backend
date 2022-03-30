// productTitle, productPrice, productImageURL, shippingCharges, sellerId.

const mongoose = require("mongoose");
const Seller = require("./sellerAccount.model");
const productSchema = new mongoose.Schema(
  {
    productTitle: { type: String, required: true },
    productPrice: { type: Number, required: true },
    shippingCharges: { type: Number, required: true },
    productImageURL: { type: String, required: true },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
