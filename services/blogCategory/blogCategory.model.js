const mongoose = require("mongoose");

const blogCategortyModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name are required"],
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("blogcategories", blogCategortyModel)