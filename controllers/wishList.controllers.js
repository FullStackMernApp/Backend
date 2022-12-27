const WishList = require("../models/wishList.model");

module.exports.createWishList = async (req,res) => {
    try {
        // get body content
        let { produit } = req.body
        let newWishList = new WishList({
          produit:produit
        })
        let savedWishList = await newWishList.save();
        return res.status(200).json({
            success: true,
            wishList: savedWishList
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllWishList = async (req,res) => {   
    try {
        let WishLists = await WishList.find().populate("produit");
        return res.status(200).json({
            success: true,
            WishLists
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteById = async (req,res) => {
    let {id} = req.params
    let delData = await WishList.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        delData
    })
}