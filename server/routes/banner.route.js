/* external import */
const express = require("express");

/* internal import */
const bannerController = require("../controllers/banner.controller");
const upload = require("../middlewares/upload.middleware");
const imageController = require("../controllers/image.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload & update banner thumbnail
router
  .route("/thumbnail")
  .post(upload.single("thumbnail"), imageController.imageUpload)
  .patch(upload.single("thumbnail"), imageController.imageUpdate);

// display all banners and insert a banner
router
  .route("/")
  .get(bannerController.displayAllBanners)
  .post(bannerController.insertNewBanner);

// display, update and remove specific banner
router
  .route("/:id")
  .get(bannerController.displaySpecificBanner)
  .patch(bannerController.modifySpecificBanner)
  .delete(bannerController.removeSpecificBanner);

/* export banner router */
module.exports = router;
