const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'Public');


//app.use(express.static(publicPath));
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html` );
});

app.get('/aboutme' , (_,res)=>{
    res.sendFile(`${publicPath}/about.html`);

});
app.set('view engine','ejs');

app.get('/profile',(_,res)=>{
    const user={
        username : 'Ayan Rafiqi',
        email : 'ayanrafiqui@gmail.com',
        city : 'Srinagar Kashmir'
    }
    res.render('profile',{user});

});

app.get('*' , (_,res)=>{
    res.sendFile(`${publicPath}/404.html`);
});



app.listen(2000);

