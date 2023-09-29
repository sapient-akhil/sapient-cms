const mongoose = require("mongoose");

const writersModel = new mongoose.Schema(
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
    image: {
      type: String
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("writers", writersModel);