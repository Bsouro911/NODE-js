const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send(`this is my first express`)
})

app.get('/about', (req, res)=>{
    res.send(`this is my about page in express`)
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})