const dbConnection = require("./mongoDB/mongodbConn.js");
const mongoDB = require("mongoDB");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  const data = await dbConnection();
  const result = await data.insertMany(req.body);
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  const data = await dbConnection();
  const result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send({ result: "updated" });
});

app.delete("/:id", async (req, resp) => {
  const data = await dbConnection();
  const result = await data.deleteOne({
    _id: new mongoDB.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(6000);
