const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true,
        unique: true
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorie"
    }
})

module.exports = mongoose.model("Produit",produitSchema)