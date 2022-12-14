/* external import */
const express = require("express");

/* internal import */
const userController = require("../controllers/user.controller");
const imageController = require("../controllers/image.controller");
const verify = require("../middlewares/verify.middleware");
const upload = require("../middlewares/upload.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload user avatar
router
  .route("/avatar")
  .post(upload.single("avatar"), imageController.imageUpload)
  .patch(upload.single("avatar"), imageController.imageUpload);

// sign up an user with confirmation
router
  .route("/sign-up")
  .get(userController.confirmSignedUpUser)
  .post(userController.signUpAnUser);

//   sign in an user
router.post("/sign-in", userController.signInAnUser);

// persist an user to logged in
router.get("/myself", verify, userController.persistMeLogin);

// fetch all user
router.get("/all-users", userController.displayAllUsers);

// fetch all query users
router.get("/query-users", userController.queryUsers);

// reset password
router
  .route("/reset-password")
  .get(userController.confirmPasswordReset)
  .patch(userController.forgotPassword);

// update an user
router.patch("/update-user", userController.updateUser);

// remove an user account
router.delete("/remove-user", userController.removeAnUser);

/* export user router */
module.exports = router;
