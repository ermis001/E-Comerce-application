const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

function createToken(id) {
  const jwtKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtKey, { expiresIn: "3d" });
}

// User Registration
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
    user.password = await bcrypt.hash(user.password, salt);
    user.userId = user._id;

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({ userId: user.userId, userName, email, token });
  } catch (error) {
    console.log("Error creating new User: ", error);
    res.status(500).json("Error creating new User: ", error);
  }
}

// User Deletion
async function deleteUser(req, res) {
  try {
    const userId = req.params.userId;

    await userModel.deleteOne({ userId });

    res.status(200).json("User deleted successfully!");
  } catch (error) {
    console.log("Error Deleting User: ", error);
    res.status(500).json("Error Deleting User: ", error);
  }
}

// Log In User
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).json("Invalid email or password!");
    }

    const validPassword = await bcrypt.compare(password);

    if (!validPassword) {
      res.status(400).json("Wrong password!");
    }

    const token = createToken(user.userId);

    return res.status(200).json({ ...user, token });
  } catch (error) {
    console.log("Error Login User: ", error);
    res.status(500).json("Error Login User: ", error);
  }
}

// Get List Of Users
async function getAllUsers(req, res) {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error getting Users: ", error);
    res.status(500).json("Error getting Users: ", error);
  }
}

// Find User
async function findUser(req, res) {
  const userId = req.params.userId;
  try {
    const user = await userModel.findOne({ userId });
    if (!user) {
      res.status(404).json("This user does not exist.");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error finding User: ", error);
    res.status(500).json("Error finding User: ", error);
  }
}

module.exports = { registerUser, deleteUser, loginUser, getAllUsers, findUser };
