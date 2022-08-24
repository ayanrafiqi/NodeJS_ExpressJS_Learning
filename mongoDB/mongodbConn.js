// const {MongoClient} = require('mongodb'} or
const MongoClient = require("mongodb").MongoClient;
// Connect using a MongoClient instance
const url = "mongodb://localhost:27017";
const database = "shops";
// Connect using MongoClient
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

module.exports = dbConnection;
