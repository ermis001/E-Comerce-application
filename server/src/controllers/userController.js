const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

function createToken(id) {
  const jwtKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ userId }, jwtKey, { expiresIn: "3d" });
}

async function registerUser(req, res) {
  try {
    const { userName, email, password } = req.body;

    const userEmailDuplicate = await userModel.findOne({ email });
    if (userEmailDuplicate) {
      res.status(400).json("User with the given email already exists!");
    }
    if (!userName || !email || !password) {
      res.status(400).json("Please fill all the fields.");
    }
    if (!validator.isEmail(email)) {
      res.status(400).json("Please add a valid Email.");
    }
    if (!validator.isStrongPassword(password)) {
      res
        .status(400)
        .json(
          "Password must contain one upper case letter one number and one special character."
        );
    }

    let user = new userModel({ userName, email, password });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(user.password, slat);

    await user.save();

    const token = createToken(user.userId);

    res.status(200).json({ userId: user.userId, userName, email, token });
  } catch (error) {
    console.log("Error creating new User: ", error);
    res.status(500).json("Error creating new User: ", error);
  }
}


module.exports = { registerUser };