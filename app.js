const express = require('express');
const app = express();

app.use(express.static('pubblic'))

//  ROOT : /
app.get('/', (req,res)=>{
    res.sendFile('home.html', {root: __dirname + "/pubblic"});
});


// ABOUT
app.get('/about', (req,res) => {
    res.send();
});

//CONTACT
app.get('/contact', (req,res) => {
    res.send();
});

app.all('*', (req, res) => {
    res.sendFile('404.html', {root: __dirname + "/pubblic"})
})

app.listen(3000, () =>{
    console.log("Server is running in port:3000");
})