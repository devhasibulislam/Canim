/* external imports */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
const console = require("./utils/console.util");
const error = require("./middlewares/error.middleware");

/* router level imports */
const userRoute = require("./routes/user.route");
const blogRoute = require("./routes/blog.route");
const reviewRoute = require("./routes/review.route");
const categoryRoute = require("./routes/category.route");
const brandRoute = require("./routes/brand.route");
const storeRoute = require("./routes/store.route");
const productRoute = require("./routes/product.route");
const bannerRoute = require("./routes/banner.route");

/* application level connections */
const app = express();

/* middlewares connections */
app.use(cors());
app.use(express.json());

/* router level connections */
app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/review", reviewRoute);
app.use("/category", categoryRoute);
app.use("/brand", brandRoute);
app.use("/store", storeRoute);
app.use("/product", productRoute);
app.use("/banner", bannerRoute);

/* global error handlers */
app.use(error);

/* enable connection */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "Establishing connection OK",
      description:
        "The request is processing well & returning success message for Canim",
    });
  } catch (error) {
    res.status(204).json({
      acknowledgement: false,
      message: error.name,
      description: error.message,
    });
  }
});

/* database connection */
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.URI_STRING, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.successMessage(`Successfully connected ${process.env.DB_NAME}`)
  )
  .catch((error) => console.errorMessage(error.message));

/* establish server port */
app.listen(process.env.PORT, () => {
  console.successMessage(`Listening on port ${process.env.PORT}`);
});
