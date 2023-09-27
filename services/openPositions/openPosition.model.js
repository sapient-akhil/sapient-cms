const mongoose = require("mongoose");

const openPositionModel = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: [true, "job_title are required"],
    },
    location: {
      type: String,
      required: [true, "location are required"],
    },
    date: {
      type: Date,
      required: [true, "date are required"],
    },
    description: {
      type: String,
      required: [true, "description are required"],
    },
    experiences: {
      type: String,
      required: [true, "experiences are required"],
    },
    vacancy: {
      type: Number,
      required: [true, "vacancy are required"],
    },
    deadline: {
      type: Date,
      required: [true, "deadline are required"],
    },
    working_hours: {
      type: String,
      required: [true, "working_hours are required"],
    },
    working_days: {
      type: String,
      required: [true, "working_days are required"],
    },
    salary: {
      type: String,
      required: [true, "salary are required"],
    },
    job_type: {
      type: mongoose.Types.ObjectId,
      required: [true, "job_type are required"],
    },
    job_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "job_category are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("openpositions", openPositionModel);
