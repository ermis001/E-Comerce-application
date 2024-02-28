const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

function createToken(id) {
  const jwtKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id: id }, jwtKey, { expiresIn: "5h" });
}

// User Registration
async function registerUser(req, res) {
  try {
    const { userName, email, password } = req.body;

    const userEmailDuplicate = await userModel.findOne({ email });
    if (userEmailDuplicate) {
      res
        .status(400)
        .send({ error: "User with the given email already exists!" });
      return;
    }
    if (!userName || !email || !password) {
      res.status(400).send({ error: "Please fill all the fields." });
      return;
    }
    if (!validator.isEmail(email)) {
      res.status(400).send({ error: "Please add a valid Email." });
      return;
    }
    if (!validator.isStrongPassword(password)) {
      res.status(400).send({
        error:
          "Password must contain one upper case letter one number and one special character.",
      });
      return;
    }

    let user = new userModel({ userName, email, password, userId: uuidv4() });

    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).send({ userId: user.userId, userName, email, token });
  } catch (error) {
    console.log("Error creating new User: ", error);
    res.status(500).send(error);
  }
}

// User Deletion
async function deleteUser(req, res) {
  const jwtKey = process.env.JWT_SECRET_KEY;
  const authToken =
    req.headers.authorization && req.headers.authorization.slice(6);

  if (!authToken) {
    res.status(500).send("Missing Authentication token");
    return;
  }

  const tokenVerification = jwt.verify(authToken, jwtKey);
  const expired = Math.floor(Date.now() / 1000) > tokenVerification.exp;

  if (expired) {
    res.status(400).send("Authentication token has expired");
    return;
  }

  const authUser = await userModel.findById(tokenVerification._id);

  if (authUser !== "owner") {
    res.status(500).send("This user does not have access for this action");
    return;
  }

  try {
    const userId = req.params.userId;

    await userModel.deleteOne({ userId });

    res.status(200).send({ message: "User deleted successfully!" });
  } catch (error) {
    console.log("Error Deleting User: ", error);
    res.status(500).send(error);
  }
}

// Log In User
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).send("Invalid email or password!");
    }

    const validPassword = bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(400).send({ error: "Wrong password!" });
    }

    const token = createToken(user.userId);

    return res.status(200).send({ user, token });
  } catch (error) {
    console.log("Error Login User: ", error);
    res.status(500).send(error);
  }
}

// Get List Of Users
async function getAllUsers(req, res) {
  const jwtKey = process.env.JWT_SECRET_KEY;
  const filterData = req.query;
  const authToken =
    req?.headers?.authorization &&
    req.headers.authorization.slice(6, req.headers.authorization.length);

  if (!authToken) {
    res.status(500).send("Missing Authentication Token!");
    return;
  }

  const tokenVerification = jwt.verify(authToken, jwtKey);
  // Token verification result { _id: '65ca7c3601926a95b3bbf858', iat: 1709152441, exp: 1709170441 }
  const expired = Math.floor(Date.now() / 1000) > tokenVerification.exp;

  if (expired) {
    res.status(500).send("Authentication Token have expired");
    return;
  }

  // const authUser = await userModel.findById(tokenVerification._id);

  // if (authUser.userStatus === "member") {
  //   req.status(400).send("This user does not have access for this data");
  //   return;
  // }

  try {
    if (!!Object.keys(filterData)?.length) {
      const { filterKey, filterValue } = filterData;
      const users = await userModel.find({
        [filterKey]: filterValue,
        isPrivate: false,
      });

      res.status(200).send(users);
    } else {
      const users = await userModel.find({ isPrivate: false });
      res.status(200).send(users);
    }
  } catch (error) {
    console.log("Error getting Users: ", error);
    res.status(500).send(error);
  }
}

// Find User
async function findUser(req, res) {
  const userId = req.params.userId;
  try {
    const user = await userModel.findOne({ userId });
    if (!user) {
      res.status(404).send({ error: "This user does not exist." });
    }
    res.status(200).send(user);
  } catch (error) {
    console.log("Error finding User: ", error);
    res.status(500).send(error);
  }
}

module.exports = { registerUser, deleteUser, loginUser, getAllUsers, findUser };
