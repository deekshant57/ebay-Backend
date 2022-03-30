const express = require("express");
const { register, login } = require("./controllers/auth.controller");
const {
  registerSeller,
  loginSeller,
} = require("./controllers/seller.auth.controller");

const userController = require("./controllers/user.controller");
const sellerController = require("./controllers/sellerAccount.controller");

const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

// Endpoint to register a user(customer)
app.use("/register", register);

// Endpoint to login for users
app.use("/login", login);

// Endpoint to get the user data
app.use("/user", userController);

// Endpoint to register a new seller account
app.use("/registerSeller", registerSeller);

// Endpoint to login a seller account
app.use("/loginSeller", loginSeller);

// Endpoint to get the seller account data
app.use("/seller", sellerController);

// Endpoint tp add the products as a seller
app.use("/product", productController);

module.exports = app;
