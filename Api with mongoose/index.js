const express = require("express");
require("./config");
const Products = require("./product");
const app = express();
app.use(express.json());

//storing data to dB using api
app.post("/", (req, res) => {
  let data = new Products(req.body);
  data.save();
  res.send(data);
  console.log(data);
});

app.get("/data", (req, res) => {
  Products.find((err, data) => {
    var recordNames = [];
    if (err) {
      console.log(err);
    } else {
      data.forEach((items) => {
        recordNames.push(items.name);
      });
      res.send(recordNames);
      console.log(recordNames);
    }
  });
});

app.put("/:name", (req, res) => {
  Products.updateOne({ name: req.params.name }, { $set: req.body }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("record succesfully Updated");
    }
  });
});

app.delete("/:name", (req, res) => {
  Products.deleteOne({ name: req.params.name }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("record succesfully Deleted");
    }
  });
});

app.listen(8000, () => {
  console.log("server is running");
});
