const Seller = require("../models/sellerAccount.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (seller) => {
  return jwt.sign({ seller }, process.env.SECRET_KEY);
};
const registerSeller = async (req, res) => {
  try {
    console.log(req.body.sellerEmail);
    let seller = await Seller.findOne({ sellerEmail: req.body.sellerEmail });

    // console.log("before", seller);

    //checking email
    if (seller) {
      return res.status(400).send({ message: "Email already exists" });
    }

    // if new user, create it or allow to register;
    seller = await Seller.create(req.body);

    const token = generateToken(seller);
    // console.log("after", seller);
    // console.log(token);
    return res.status(200).send({ seller, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const loginSeller = async (req, res) => {
  try {
    const seller = await Seller.findOne({ sellerEmail: req.body.sellerEmail });
    //checked if mail exists
    if (!seller) {
      return res.status(400).send("Wrong Email or Password");
    }

    //if email exists, check password;
    const match = seller.checkPassword(req.body.password);

    // if it doesn't match
    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password" });
    }

    // if it matches
    const token = generateToken(seller);

    return res.status(200).send({ seller, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { registerSeller, loginSeller, generateToken };
