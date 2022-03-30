const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.post(
  "/",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("First Name must be at least 4 characters"),
  async (req, res) => {
    try {
      console.log(body("firstName"));
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.create(req.body);
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);
router.patch("/:uid", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.uid, req.body, {
      new: true,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/:uid", async (req, res) => {
  try {
    const user = await User.findById(req.params.uid).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
