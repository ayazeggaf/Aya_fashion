const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://ayazeggaf68:6AVQBNAPhfRfJN1c@cluster0.v5zohzq.mongodb.net/aya-fashion");

// API creation
app.get('/', (req, res) => {
    res.send("express app is running");
});

// Image storage
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload for images
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});
require('./Product');
const Product=mongoose.model('Product');
//Add_Product
app.post('/addProduct',async(req,res)=>{
    const product=new Product({
        id:req.body.id,
        name:req.body.name,
       image:req.body.image,
       category:req.body.category,
       new_price:req.body.new_price,
       old_price:req.body.old_price,
       date:req.body.date,
       available:req.body.available,
    })
    console.log(product)
    await product.save();
    console.log('saved');
    res.json({
        success:true,
        name:req.body.name
    })

})
//Delete Product
app.post("/deleteProduct",async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name
    })

})
//All products
app.get("/allProducts",async(req,res)=>{
   let products=await Product.find();
   res.json({
    products:products
   })

})
// Connection
app.listen(port, (error) => {
    if (!error) {
        console.log("Aya Fashion connecté avec succès");
    } else {
        console.log("Erreur de connexion : " + error);
    }
});
