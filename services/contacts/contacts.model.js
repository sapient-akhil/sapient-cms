const mongoose = require("mongoose");

const contactsModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name are required"],
    },
    email: {
      type: String,
      required: [true, "Email are required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone are required"],
    },
    subject: {
      type: String,
      required: [true, "Subject are required"],
    },
    message: {
      type: String,
      required: [true, "Message are required"],
    },
    view: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactsModel);
