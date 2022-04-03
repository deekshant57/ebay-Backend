const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  // return mongoose.connect("mongodb://127.0.0.1:27017/");
  return mongoose.connect(
    `mongodb+srv://deekshant57:${process.env.MONGO_SECRET_KEY}@practice.9w926.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-mk2ptn-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
  );
};
