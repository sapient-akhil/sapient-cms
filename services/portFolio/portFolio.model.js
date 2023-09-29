const mongoose = require("mongoose");

const portFolioModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name are required"],
    },
    portfolio_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "Portfolio category are required"],
    },
    client: {
      type: mongoose.Types.ObjectId,
      required: [true, "Client are required"],
    },
    cover_image1: {
      type: String,
      required: [true, "Cover image1 are required"],
    },
    title: {
      type: String,
      required: [true, "Title are required"],
    },
    description: {
      type: String,
      required: [true, "Description are required"],
    },
    cover_image2: {
      type: String,
      required: [true, "Cover image2 are required"],
    },
    technology_title: {
      type: String,
      required: [true, "Technology title are required"],
    },
    technology_description: {
      type: String,
      required: [true, "Technology description are required"],
    },
    tech_image1: {
      type: String,
      required: [true, "Tech image1 are required"],
    },
    tech_desc1: {
      type: String,
      required: [true, "Tech desc1 are required"],
    },
    tech_image2: {
      type: String,
      required: [true, "Tech image2 are required"],
    },
    tech_desc2: {
      type: String,
      required: [true, "Tech desc2 are required"],
    },
    footer_image1: {
      type: String,
      required: [true, "Footer image1 are required"],
    },
    footer_image2: {
      type: String,
      required: [true, "Footer image2 are required"],
    },
    footer_description: {
      type: String,
      required: [true, "Footer description are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("portfolios", portFolioModel);
