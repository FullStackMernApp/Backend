const categorie = require("../models/categorie.model");

module.exports.createCategorie = async (req,res) => {
    try {
        // get body content
        let { name } = req.body
        let newCategorie = new categorie({
            name: name
        })
        let savedCategorie = await newCategorie.save();
        return res.status(200).json({
            success: true,
            categorie: savedCategorie
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllCategories = async (req,res) => {
    try {
        let categories = await categorie.find();
        return res.status(200).json({
            success: true,
            categories
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.updateCategorie = async (req,res) => {
    try {
        let {categorieId} = req.params;
        let { name } = req.body;

        let updatedCategorie = await categorie.findByIdAndUpdate(categorieId,{
            $set: {
                name: name
            }
        },{new: true});
        return res.status(200).json({
            success: true,
            categorie: updatedCategorie
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteCategorie = async (req,res) => {
    try {
        let {categorieId} = req.params;
        await categorie.findByIdAndDelete(categorieId);
        return res.status(200).json({
            success: true,
            message: "categorie deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.findCategorieById = async (req,res) => {
    try {
        let {categorieId} = req.params;
        let getCategorie = await categorie.findById(categorieId);
        return res.status(200).json({
            success: true,
            categorie: getCategorie
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}




