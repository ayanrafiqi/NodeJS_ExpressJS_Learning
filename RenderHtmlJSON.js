const express = require('express');
const app = express();

app.get("", (req, res) => {
  res.send(
    `<h1> Welcome,This is home page </h1> 
    <input type = "text"  placeholder ="${req.query.name} "/>
    <button> click me </button>
    <a href="/about"> GO to about page </a>`
  );
 });

app.get("/about", (req, res) => {
  res.send(`<h2> Welcome , This is about page </h2>
    <a href= "/"> Go Back to home page </a>`);
});

app.get('/help', (req , res)=>{
    res.send(`[
        {"name": "ayan" , "email": "ayanrafiqui@gmail.com"},
        {"name": "shaz" ,"email":"jsbsabcjh@gmail.com"}'
         ];
    `)
})


app.listen(3000);