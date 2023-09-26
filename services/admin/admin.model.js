const mongoose = require("mongoose");

const adminModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username are require"],
    },
    email: {
      type: String,
      required: [true, "email are require"],
    },
    display_name: {
      type: String,
      required: [true, "display_name are require"],
    },
    password: {
      type: String,
      required: [true, "password are require"],
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
