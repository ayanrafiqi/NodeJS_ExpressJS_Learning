//jshint esversion:6
//connecting moongoose to our db 'shops' and creating schema and model for that DB.

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shops");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("products", productSchema);
//CRUD with the help of model name

//write operation ,it must according to the schema  

const product = new Product({
  name: "ayan",
  price: 1333,
});
product.save();

//read operation

Product.find((err, products) => {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close(); //closing the conn of db just after find method
    products.forEach((items) => {
      console.log(items.name);
    });
  }
});

//Update operation

Product.updateOne(
  { name: "3232" },
  { $set: { name: "samsung Note 14" } },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("record successfully updated");
    }
  }
);

// Delete operation

Product.deleteOne({ name: "galaxy s12" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("record successfully deleted");
  }
});
