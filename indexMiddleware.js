const express = require("express");
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

route.use(reqFilter);

//app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome To home page");
  console.log("home");
});
route.get("/user",(req, res) => {
    res.send("Welcome to user page");;
  });

 app.get("/about",(req, res) => {
    res.send("Welcome to about page");;
  });

  route.get("/help",(req, res) => {
    res.send("Welcome to help page");;
  });
app.use('/', route);

app.listen(1000);
