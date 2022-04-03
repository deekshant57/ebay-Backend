const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://deekshant57:deekshant_123@practice.9w926.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-mk2ptn-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
};
