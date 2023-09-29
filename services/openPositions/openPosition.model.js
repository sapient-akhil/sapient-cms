const mongoose = require("mongoose");

const openPositionModel = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: [true, "Job title are required"],
    },
    location: {
      type: String,
      required: [true, "Location are required"],
    },
    date: {
      type: Date,
      required: [true, "Date are required"],
    },
    description: {
      type: String,
      required: [true, "Description are required"],
    },
    experiences: {
      type: String,
      required: [true, "Experiences are required"],
    },
    vacancy: {
      type: Number,
      required: [true, "Vacancy are required"],
    },
    deadline: {
      type: Date,
      required: [true, "Deadline are required"],
    },
    working_hours: {
      type: String,
      required: [true, "Working hours are required"],
    },
    working_days: {
      type: String,
      required: [true, "Working days are required"],
    },
    salary: {
      type: String,
      required: [true, "Salary are required"],
    },
    job_type: {
      type: mongoose.Types.ObjectId,
      required: [true, "Job type are required"],
    },
    job_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "Job category are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("openpositions", openPositionModel);
