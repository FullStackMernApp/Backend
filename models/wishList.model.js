const mongoose = require("mongoose");

const wichListSchema = new mongoose.Schema({
    produit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produit"
    }
})

module.exports = mongoose.model("wichList",wichListSchema);