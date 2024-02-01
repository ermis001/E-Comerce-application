const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.ObjectId },
    userName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 40,
      unique: true,
    },
    userStatus: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
