const mongoose = require("mongoose");

const contactsModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name are required"],
    },
    email: {
      type: String,
      required: [true, "email are required"],
    },
    phone: {
      type: String,
      required: [true, "phone are required"],
    },
    subject: {
      type: String,
      required: [true, "subject are required"],
    },
    message: {
      type: String,
      required: [true, "message are required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactsModel);
