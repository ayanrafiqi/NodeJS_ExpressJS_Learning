const express = require("express");
require("./config");
const Products = require("./product");
const app = express();
app.use(express.json());


app.get('/search/:key',async(req,res)=>{
      let data = await Products.find(
        {
           "$or":[
            { "name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}
        ]
        
      })
      res.send(data);
})

app.listen(2000, () => {
    console.log("server is running");
  });
  