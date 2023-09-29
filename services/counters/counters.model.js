const mongoose = require("mongoose");

const countersModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name are required"],
    },
    numbers: {
      type: String,
      required: [true, "Numbers are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("counters", countersModel);
