const Seller = require("../models/sellerAccount.model");

const express = require("express");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

// Register a user
router.post("", authenticate, async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
