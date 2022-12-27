const router = require("express").Router();
const wishListController = require("../controllers/wishList.controllers")
router.post("/create",wishListController.createWishList)
router.get("/",wishListController.getAllWishList)
router.delete("/del/:id",wishListController.deleteById)
module.exports = router;