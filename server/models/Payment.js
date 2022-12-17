/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require('validator');

/* create store schema */
const paymentSchema = new mongoose.Schema(
  {
    // for payment user
    user: {
      type: ObjectId,
      ref: "User",
    },

    // payment method
    method: {
      type: String,
      enum: ["paypal", "bkash"],
      default: "paypal",
    },

    // payment information
    paymentInformation: {
      cardNumber: {
        type: String,
        trim: true,
        uppercase: true,
        unique: true,
      },
      cvcNumber: {
        type: String,
        trim: true,
        uppercase: true,
        unique: true,
      },
      transactionId: {
        type: String,
        trim: true,
        uppercase: true,
        unique: true,
      },
      receiver: {
        type: String,
        validate: {
          validator: (value) =>
            validator.isMobilePhone(value, "bn-BD", { strictMode: true }),
          message: "Phone number {VALUE} is not valid. Please, retry",
        },
        default: "+8801906315901"
      },
    },

    // for category  time stamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* create payment schema model */
const Payment = mongoose.model("Payment", paymentSchema);

/* export payment schema */
module.exports = Payment;
