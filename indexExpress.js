const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'Public');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(8000);

