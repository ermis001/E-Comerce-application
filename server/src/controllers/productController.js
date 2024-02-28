const { v4: uuidv4 } = require("uuid");

const productModel = require("../models/productModel");
const { camelCaseToTitleCase } = require("../services/index");

// Add a Product
async function addProduct(req, res) {
  try {
    const productData = req.body;

    const duplicatedProduct = await productModel.findOne({
      productName: productData.productName,
    });
    let missingFields = [];
    for (let i = 0; i < Object.keys(productData).length; i++) {
      const key = Object.keys(productData)[i];
      if (key !== "sale" && key !== "productId" && !productData?.[key]) {
        missingFields.push(camelCaseToTitleCase(key));
      }
    }
    if (!!duplicatedProduct) {
      res.status(400).send("This Product already exists!");
    }
    if (!!missingFields.length) {
      res
        .status(400)
        .send(`Product fields are required, ${missingFields.join(" ,")}`);
    }

    const product = new productModel(productData);
    product.productId = uuidv4();

    await product.save();

    res.status(200).send(product);
  } catch (error) {
    console.log("Adding Product Error: ", error);
    res.status(500).send("Error Adding new Product: ", error);
  }
}

// Product Deletion
async function deleteProduct(req, res) {
  try {
    const productId = req.params.productId;

    await productModel.deleteOne({ productId });

    res.status(200).send("Product deleted successfully!");
  } catch (error) {
    console.log("Error Deleting Product: ", error);
    res.status(500).send("Error Deleting Product: ", error);
  }
}

// Get All Products
async function getAllProducts(req, res) {
  const filterData = req.query;
  try {
    if (!!Object.keys(filterData).length) {
      const { filterKey, filterValue } = filterData;
      const products = await productModel.find({ [filterKey]: filterValue });

      res.status(200).send(products);
    } else {
      const products = await productModel.find();
      res.status(200).send(products);
    }
  } catch (error) {
    console.log("Error getting Products: ", error);
    res.status(500).send("Error getting Products: ", error);
  }
}

// Find Product
async function findProduct(req, res) {
  const productId = req.params.productId;
  try {
    const product = await productModel.findOne({ productId });
    if (!product) {
      res.status(404).send("Product not found");
    }
    res.status(200).send(product);
  } catch (error) {
    console.log("Error finding Product: ", error);
    res.status(500).send();
  }
}

module.exports = { addProduct, deleteProduct, getAllProducts, findProduct };
