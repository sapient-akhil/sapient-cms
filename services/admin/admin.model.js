const mongoose = require("mongoose");

const adminModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username are require"],
    },
    email: {
      type: String,
      required: [true, "Email are require"],
    },
    display_name: {
      type: String,
      required: [true, "Display name are require"],
    },
    password: {
      type: String,
      required: [true, "Password are require"],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "admin",
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminModel);
