/* external import */
const express = require("express");

/* internal imports */
const blogController = require("../controllers/blog.controller");
const imageController = require("../controllers/image.controller");
const upload = require("../middlewares/upload.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(upload.single("thumbnail"), imageController.imageUpload)
  .patch(upload.single("thumbnail"), imageController.imageUpdate);

// display all blogs and insert a blog
router
  .route("/")
  .post(blogController.insertNewBlog)
  .get(blogController.displayAllBlogs);

// update, update & delete specific blog
router
  .route("/:id")
  .get(blogController.displaySpecificBlogs)
  .patch(blogController.updateSpecificBlog)
  .delete(blogController.removeSpecificBlog);

/* export blog router */
module.exports = router;
