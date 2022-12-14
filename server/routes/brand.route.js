/* external import */
const express = require("express");

/* internal import */
const brandController = require("../controllers/brand.controller");
const imageController = require("../controllers/image.controller");
const upload = require("../middlewares/upload.middleware");

/* router level connection */
const router = express.Router();

/* router method integration */
// upload & update brand logo
router
  .route("/logo")
  .post(upload.single("logo"), imageController.imageUpload)
  .patch(upload.single("logo"), imageController.imageUpdate);

// display all blogs and insert a blog
router
  .route("/")
  .post(brandController.insertNewBrand)
  .get(brandController.displayAllBrands);

// display, update and remove specific brand
router
  .route("/:id")
  .get(brandController.displaySpecificBrand)
  .patch(brandController.updateSpecificBrand)
  .delete(brandController.removeSpecificBrand);

/* export brand router */
module.exports = router;
