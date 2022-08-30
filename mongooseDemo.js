//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shops");

const productSchema = new mongoose.Schema({
    name : String,
    price : Number 
});

const Product = mongoose.model("products",productSchema );


const product = new Product ({
    name: 798,
    price :1333
});


product.save();

