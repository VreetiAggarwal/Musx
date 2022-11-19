const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please fill your name"],
    unique: true,
    maxlength: [50],
  },
  email: {
    type: String,
    required: [true, "Please fill your email"],
    unique: true,
    maxlength: [50],
  },
  pw: {
    type: String,
    required: [true, "Please fill your password"],
    unique: true,
    maxlength: [15, "Your password cant be more than 15 characters"],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
