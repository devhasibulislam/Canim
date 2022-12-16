/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

/* create review schema */
const reviewSchema = new mongoose.Schema(
  {
    // for reviewer name
    reviewer: {
      type: ObjectId,
      ref: "User",
    },

    // for reviewer designation
    designation: {
      type: String,
      required: [true, "Please, provide reviewer designation"],
      maxLength: [100, "Your review name must be at least 100 characters"],
    },

    // for review description
    description: {
      type: String,
      required: [true, "Please, provide your review"],
      trim: true,
      maxLength: [500, "Your review name must be at least 500 characters"],
    },

    // for review time stamps
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

/* create review model schema */
const Review = mongoose.model("Review", reviewSchema);

/* export review schema */
module.exports = Review;
