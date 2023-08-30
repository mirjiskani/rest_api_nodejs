const mongoose = require("mongoose");
// Schema for modelss
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;