const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Routers
const userRouter = require("./src/routes/userRoute");
const productRouter = require("./src/routes/poductRouter");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 8000;
const URI = process.env.ATLAS_URI;

app.use(express.json()); // This allows the use of JSON data in app
app.use(cors()); // This allows the use of CORS in app

// Initialize collection endpoints
app.use("/api/Users", userRouter);
app.use("/api/Products", productRouter);

app.get("/", (req, res) => {
  res.send("E-Comerce Server Started!");
});

app.listen(port, (req, res) => {
  console.log(`Server running in port ${port}`);
});

// Connecting to DB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB: ", err));
