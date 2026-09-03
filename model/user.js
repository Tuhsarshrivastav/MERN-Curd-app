const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

// How our document looks
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, "user");

// Create model
const postUser = mongoose.model("user", userSchema);

module.exports = postUser;
