const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [30, "Username must be less than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    minlength: [10, "Phone must be at least 10 characters long"],
    maxlength: [15, "Phone must be less than 15 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6characters long"],
  },
  role: {
    type: String,
    enum: ["user", "admin","resident","security","staff"],
    default: "user",
  },
});

// Middleware to hash password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(13);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

//method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Static method to find user by email
userSchema.statics.findByEmail = async function (email) {
  return await this.findOne({ email });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
