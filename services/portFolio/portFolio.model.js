const mongoose = require("mongoose");

const portFolioModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name are required"],
    },
    portfolio_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "portfolio category are required"],
    },
    client: {
      type: mongoose.Types.ObjectId,
      required: [true, "client are required"],
    },
    cover_image1: {
      type: String,
      required: [true, "cover image1 are required"],
    },
    title: {
      type: String,
      required: [true, "title are required"],
    },
    description: {
      type: String,
      required: [true, "description are required"],
    },
    cover_image2: {
      type: String,
      required: [true, "cover image2 are required"],
    },
    technology_title: {
      type: String,
      required: [true, "technology title are required"],
    },
    technology_description: {
      type: String,
      required: [true, "technology description are required"],
    },
    tech_image1: {
      type: String,
      required: [true, "tech image1 are required"],
    },
    tech_desc1: {
      type: String,
      required: [true, "tech desc1 are required"],
    },
    tech_image2: {
      type: String,
      required: [true, "tech image2 are required"],
    },
    tech_desc2: {
      type: String,
      required: [true, "tech desc2 are required"],
    },
    footer_image1: {
      type: String,
      required: [true, "footer image1 are required"],
    },
    footer_image2: {
      type: String,
      required: [true, "footer image2 are required"],
    },
    footer_description: {
      type: String,
      required: [true, "footer description are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("portfolios", portFolioModel);
