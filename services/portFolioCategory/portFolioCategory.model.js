const mongoose = require("mongoose");

const portFolioCategortyModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name are required"],
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("portfoliocategories", portFolioCategortyModel)