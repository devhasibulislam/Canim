/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create category schema */
const categorySchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a category name"],
      trim: true,
      lowercase: true,
      unique: [true, "Same category already exists"],
      maxLength: [50, "Category name would be at most 50 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide category description"],
      trim: true,
      maxLength: [500, "Category description would be at most 500 characters"],
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      },
      public_id: String,
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

/* create category model schema */
const Category = mongoose.model("Category", categorySchema);

/* export category schema */
module.exports = Category;
