/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create review schema */
const reviewSchema = new mongoose.Schema(
  {
    // for user name
    name: {
      type: String,
      // required: [true, "Please, provide reviewer name"],
    },

    // for user avatar
    avatar: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid avatar URL"],
        default:
          "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      public_id: String,
    },

    // for user designation
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
