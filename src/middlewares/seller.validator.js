const { body, validationResult } = require("express-validator");
module.exports = [
  body("sellerName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("First Name must be at least 4 characters"),
  (req, res, next) => {
    const errorValidation = validationResult(req);
    console.log(errorValidation);
    if (!errorValidation) {
      return res.status(500).json({
        title: "an error occured",
        error: errorValidation,
      });
    }
    return next();
  },
];
