//connecting NODEJS to MongoDB and printing the collection record of db on Console.
// const {MongoClient} = require('mongodb'} or
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const database = "shops";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let response = await collection.find().toArray();
  console.log(response);
}

getData();
