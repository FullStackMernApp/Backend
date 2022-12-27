const router = require("express").Router();
const categorieController = require("../controllers/categorie.controllers")
router.post("/create",categorieController.createCategorie)
router.get("/",categorieController.getAllCategories)
router.put("/edit/:categorieId",categorieController.updateCategorie)
router.delete("/delete/:categorieId",categorieController.deleteCategorie)
router.get("/show/:categorieId",categorieController.findCategorieById)
module.exports = router;
