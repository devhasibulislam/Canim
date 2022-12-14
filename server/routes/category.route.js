/* external import */
const express = require("express");

/* internal imports */
const categoryController = require("../controllers/category.controller");
const imageController = require("../controllers/image.controller");
const upload = require("../middlewares/upload.middleware");

/* router level imports */
const router = express.Router();

/* router method integration */
// upload & update store thumbnail
router
  .route("/thumbnail")
  .post(upload.single("thumbnail"), imageController.imageUpload)
  .patch(upload.single("thumbnail"), imageController.imageUpdate);

// display all categories and insert a category
router
  .route("/")
  .post(categoryController.insertNewCategory)
  .get(categoryController.displayAllCategories);

// display, update and remove specific category
router
  .route("/:id")
  .get(categoryController.displaySpecificCategory)
  .patch(categoryController.updateSpecificCategory)
  .delete(categoryController.removeSpecificCategory);

/* export review router */
module.exports = router;
