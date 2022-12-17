/* external import */
const express = require("express");

/* internal imports */
const paymentController = require("../controllers/payment.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */
router
  .route("/")
  .post(paymentController.insertNewPaymentMethod)
  .get(paymentController.getAllPayments);

router
  .route("/:id")
  .patch(paymentController.modifyPaymentMethod)
  .get(paymentController.displayPaymentMethod)
  .delete(paymentController.removePaymentMethod);

/* export blog router */
module.exports = router;
