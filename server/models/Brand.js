/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create brand schema */
const brandSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid brand name"],
      trim: true,
      uppercase: true,
      unique: [true, "Same brand already exists"],
      maxLength: [50, "Brand name would be at most 50 characters"],
    },

    // for email
    email: {
      type: String,
      required: [true, "Please, provide a valid brand email"],
      trim: true,
      lowercase: true,
      unique: [true, "Same email already exists"],
      validate: [validator.isEmail, "Please provide a valid email address"],
    },

    // for website
    website: {
      type: String,
      required: [true, "Please, provide a valid brand website url"],
      lowercase: true,
      unique: [true, "Same website already exists"],
      validate: [validator.isURL, "Please provide a valid brand website url"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide brand description"],
      trim: true,
      maxLength: [500, "Brand description would be at most 500 characters"],
    },

    // for logo
    logo: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid logo URL"],
        default:
          "https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
      },
      public_id: String,
    },

    // for location
    location: {
      type: String,
      trim: true,
      required: [true, "Please, provide brand location"],
      maxLength: [100, "Brand address would be at most 100 characters"],
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

/* create brand model schema */
const Brand = mongoose.model("Brand", brandSchema);

/* export brand schema */
module.exports = Brand;
