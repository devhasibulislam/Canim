/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create blog schema */
const blogSchema = new mongoose.Schema(
  {
    // for blogger full name
    name: {
      type: String,
      required: [true, "Please, provide blogger name"],
      trim: true,
      maxLength: [100, "Blogger name would be at most 100 characters"],
    },

    // for blog title
    title: {
      type: String,
      required: [true, "Please, provide your blog title"],
      trim: true,
      unique: [true, "Same title already exists"],
      maxLength: [100, "Your blog title would be at most 100 characters"],
    },

    // for blog thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      public_id: String,
    },

    // for blog description
    description: {
      type: String,
      required: [true, "Please, provide your blog name"],
      trim: true,
      maxLength: [2000, "Blog description would be at most 2000 characters"],
    },

    // for count visit
    watch: {
      type: Number,
      default: 1,
    },

    // for blog time stamps
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

/* create blog model schema */
const Blog = mongoose.model("Blog", blogSchema);

/* export blog schema */
module.exports = Blog;
