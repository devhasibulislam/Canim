/* external import */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create product schema */
const productSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a product name"],
      trim: true,
      unique: [true, "Same product already exists"],
      maxLength: [100, "Product name would be at most 100 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide product description"],
      trim: true,
      maxLength: [1000, "Product description would be at most 1000 characters"],
    },

    // for thumbnails
    thumbnails: [
      {
        url: {
          type: String,
          validate: [validator.isURL, "Please, provide a valid thumbnail URL"],
          default:
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        public_id: String,
      },
    ],

    // for price
    price: {
      type: Number,
      required: [true, "Please, provide a product price"],
      min: [5, "Price unit won't be less than 5"],
    },

    // for category
    category: {
      type: ObjectId,
      ref: "Category",
    },

    // for brand
    brand: {
      type: ObjectId,
      ref: "Brand",
    },

    // for store
    store: {
      type: ObjectId,
      ref: "Store",
    },

    // for count visit
    watch: {
      type: Number,
      default: 1,
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

/* create product schema */
const Product = mongoose.model("Product", productSchema);

/* export product schema */
module.exports = Product;
