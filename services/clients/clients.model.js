const mongoose = require("mongoose");

const clientModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name are required"],
    },
    image: {
      type: String,
      required: [true, "Image are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("clients", clientModel);
