const Produit = require("../models/produit.model");

module.exports.createProduit = async (req,res) => {
    try {
        // get body content
        let { name,
            description,
            amount,
            categorie } = req.body
        let newProduit = new Produit({
            name: name,
            description: description,
            amount: amount,
            categorie: categorie
        })
        let savedProduit = await newProduit.save();
        console.log("success ya mourad")
        return res.status(200).json({
            success: true,
            produit: savedProduit
        })
    }catch(err) {
        console.log("Error ya mourad")
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllProduits = async (req,res) => {
    try {
        let produits = await Produit.find().populate("categorie");
        return res.status(200).json({
            success: true,
            produits
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}