/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create banner schema */
const bannerSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid banner title"],
      trim: true,
      unique: [true, "Same banner already exists"],
      maxLength: [25, "banner name would be at most 25 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide banner description"],
      trim: true,
      maxLength: [50, "banner description would be at most 50 characters"],
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://images.unsplash.com/photo-1523800378286-dae1f0dae656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
      },
      public_id: String,
    },

    // for url
    url: {
      type: String,
      default: "https://pofo.hasibulislam999.vercel.app",
      validate: [validator.isURL, "Please provide a valid url"],
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

/* create banner model schema */
const Banner = mongoose.model("Banner", bannerSchema);

/* export banner schema */
module.exports = Banner;
