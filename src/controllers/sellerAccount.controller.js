const Seller = require("../models/sellerAccount.model");

const express = require("express");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

// Register a user
router.post("", async (req, res) => {
  try {
    const seller = await Seller.create(req.body);

    return res.status(200).send(seller);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const seller = await Seller.find().lean().exec();

    return res.status(200).send(seller);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
