const router = require("express").Router();
const produitController = require("../controllers/produit.controller")
router.post("/create",produitController.createProduit)
router.get("/",produitController.getAllProduits)
module.exports = router;