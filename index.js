const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config()
const categorieRoutes = require("./routes/categorie.routes")
const produitRoutes = require("./routes/produit.routes")
const wishListRoutes = require("./routes/wishList.routes")
const port = process.env.PORT || 3001;
const app = express();

// parse application/json
app.use(bodyParser.json())
app.use(cors())
// mongoose connect
mongoose.connect(process.env.DB_CONNECT )
mongoose.connection.on("connected",()=> {
    
    console.log("database connected successfully.")
})
mongoose.connection.on("error",(err)=> {
    console.log("error when connected to the database ",err)
})

app.use("/api/categorie",categorieRoutes)
app.use("/api/produit",produitRoutes)
app.use("/api/wishList",wishListRoutes)
app.listen(port,()=> {
    console.log(`server listning on port ${port}`)
})