/* external import */
const express = require("express");

/* internal import */
const storeController = require("../controllers/store.controller");
const imageController = require("../controllers/image.controller");
const upload = require("../middlewares/upload.middleware");

/* router level connection */
const router = express.Router();

/* router method integration */
// upload & update store thumbnail
router
  .route("/thumbnail")
  .post(upload.single("thumbnail"), imageController.imageUpload)
  .patch(upload.single("thumbnail"), imageController.imageUpdate);

// display all stores and insert a store
router
  .route("/")
  .post(storeController.insertNewStore)
  .get(storeController.displayAllStore);

// display, update and remove specific store
router
  .route("/:id")
  .get(storeController.displaySpecificStore)
  .patch(storeController.updateSpecificStore)
  .delete(storeController.removeSpecificStore);

/* export router */
module.exports = router;
