/* external imports */
const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const validator = require("validator");

/* create user schema */
const userSchema = new mongoose.Schema(
  {
    // for user full name
    name: {
      type: String,
      required: [true, "Please, provide your full name"],
      trim: true,
      minLength: [3, "Your name must be at least 3 characters"],
      maxLength: [100, "Your name would be at most 100 characters"],
    },

    // for user email
    email: {
      type: String,
      required: [true, "Please, provide your email address"],
      validate: [validator.isEmail, "Provide a valid email address"],
      unique: [true, "Email exists in DB. Please, provide another"],
    },

    // for user initial password
    password: {
      type: String,
      required: [true, "Please, provide a strong password"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: "Password {VALUE} is not strong enough. Please, retry",
      },
    },

    // for user confirm password
    confirmPassword: {
      type: String,
      required: [true, "Please, retype password to confirm"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords won't match. Please, retry",
      },
    },

    // for user avatar
    avatar: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid avatar URL"],
        default:
          "https://images.unsplash.com/photo-1575439462433-8e1969065df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      public_id: String,
    },

    // for user contact number
    phone: {
      type: String,
      required: [
        true,
        "Please, provide your phone number, i.e.: +8801xxxxxxxxx",
      ],
      validate: {
        validator: (value) =>
          validator.isMobilePhone(value, "bn-BD", { strictMode: true }),
        message: "Phone number {VALUE} is not valid. Please, retry",
      },
    },

    // for user role to be played
    role: {
      type: String,
      enum: ["admin", "buyer", "seller", "supplier", "deliverer"],
      default: "buyer",
    },

    // for user account status
    /**
     * active: verified account
     * inactive: not verified account
     */
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },

    // for address and date of birth
    address: {
      type: String,
      maxLength: [100, "Address should be within 100 characters"],
    },
    dateOfBirth: Date,

    // for user account confirmation token
    confirmationToken: String,
    confirmationTokenExpires: Date,

    // for user account password reset
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,

    // for user account time stamps
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

/* encrypted user account password */
userSchema.methods.encryptedPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

/* middleware to encrypt password */
userSchema.pre("save", async function (next) {
  try {
    // initialize encrypted password
    if (!this.isModified("password")) {
      return next();
    }

    // encrypt password
    this.password = this.encryptedPassword(this.password);

    // after encryption remove confirm password field
    this.confirmPassword = undefined;
  } catch (error) {
    next(error);
  }
});

/* compare passwords as sign in proportion */
userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

/* generate new user account credential token */
userSchema.methods.generateCredentialToken = function (slug) {
  // generate random token
  const token = crypto.randomBytes(16).toString("hex");

  //   initialize & set up an expiry date <= 1 day
  const date = new Date();
  date.setDate(date.getDate() + 1);

  if (slug === "sign-up") {
    //   insert token to the confirmation token field
    this.confirmationToken = token;

    // insert expiry to the confirmation token expiry field
    this.confirmationTokenExpires = date;
  } else if (slug === "reset-password") {
    //   insert token to the password reset token field
    this.passwordResetToken = token;

    // insert expiry to the password reset token expiry filed
    this.passwordResetTokenExpires = date;
  }

  return token;
};

/* create user model schema */
const User = mongoose.model("User", userSchema);

/* export user schema */
module.exports = User;
