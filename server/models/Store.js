/* external import */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create store schema */
const storeSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid store name"],
      trim: true,
      unique: [true, "Same store already exists"],
      maxLength: [100, "store name would be at most 100 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide store description"],
      trim: true,
      maxLength: [500, "store description would be at most 500 characters"],
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      public_id: String,
    },

    // for seller
    seller: {
      type: ObjectId,
      ref: "User",
    },

    // for status
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "Invalid status, choose active/inactive",
      },
      default: "active",
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

/* create store schema model */
const Store = mongoose.model("Store", storeSchema);

/* export store schema */
module.exports = Store;
