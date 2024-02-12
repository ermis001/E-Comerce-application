const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Routers
const userRouter = require("./src/routes/userRoute");
const productRouter = require("./src/routes/poductRouter");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;
let URI = "";
// changing URI endpoint based on env
if (process.env.NODE_ENV === "production") {
  URI = process.env.ATLAS_URI_PROD;
} else if (process.env.NODE_ENV === "test") {
  URI = process.env.ATLAS_URI_TEST;
} else {
  URI = process.env.ATLAS_URI_DEV;
}

app.use(express.json()); // This allows the use of JSON data in app
app.use(cors()); // This allows the use of CORS in app

// Initialize collection endpoints
app.use(`/users`, userRouter);
app.use(`/products`, productRouter);

app.get("/", (req, res) => {
  res.send("E-Comerce Server Started!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, (req, res) => {
    console.log(`Server running in port ${port}`);
  });
}

// Connecting to DB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB: ", err));

module.exports = app;
