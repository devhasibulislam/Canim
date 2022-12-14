/* external import */
const express = require("express");

/* internal import */
const productController = require("../controllers/product.controller");
const imageController = require("../controllers/image.controller");
const upload = require("../middlewares/upload.middleware");

/* router level import */
const router = express.Router();

/* router method integration */
// upload product thumbnails
router
  .route("/thumbnails")
  .post(
    upload.array("thumbnails", 5),
    productController.productThumbnailsUpload
  )
  .patch(
    upload.array("thumbnails", 5),
    productController.productThumbnailsUpdate
  );

// display all products and insert a product
router
  .route("/")
  .post(productController.insertNewProduct)
  .get(productController.displayAllProducts);

// display, update and remove specific product
router
  .route("/:id")
  .get(productController.displaySpecificProduct)
  .patch(productController.updateSpecificProduct)
  .delete(productController.removeSpecificProduct);

/* export product router */
module.exports = router;
