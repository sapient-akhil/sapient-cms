const mongoose = require("mongoose");

const jobCategoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jobcategories", jobCategoryModel);
