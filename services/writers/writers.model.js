const mongoose = require("mongoose");

const writersModel = new mongoose.Schema(
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