const express = require("express");
const {
  registerUser,
  deleteUser,
  loginUser,
  getAllUsers,
  findUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", getAllUsers);
router.get("/find/:userId", findUser);

router.delete("/del/:userId", deleteUser);

module.exports = router;
