const express = require("express");
const {
  addProduct,
  deleteProduct,
  getAllProducts,
  findProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/register", addProduct);

router.get("/", getAllProducts);
router.get("/find/:productId", findProduct);

router.delete("/del/:productId", deleteProduct);

module.exports = router;
