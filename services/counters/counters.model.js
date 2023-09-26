const mongoose = require("mongoose");

const countersModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name are required"],
    },
    numbers: {
      type: String,
      required: [true, "numbers are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("counters", countersModel);
