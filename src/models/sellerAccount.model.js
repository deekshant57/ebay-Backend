// sellerName, sellerEmail , password, sellerLocation;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sellerSchema = new mongoose.Schema(
  {
    sellerName: { type: String, required: true },
    sellerEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sellerLocation: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
sellerSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

sellerSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
