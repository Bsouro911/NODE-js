const express = require('express');

const app = express();

app.get("", (req, res)=>{
    res.send(`<h1>Welcome to Express.JS</h1>
    <a href="/aboutus">Go to about us page</a>`);
});

// http://localhost/aboutus?name=strange
app.get("/aboutus", (req, res)=>{
    res.send(`<input type="text" placeholder="enter your name" value="${req.query.name}"/> 
    <button>click me</button>
    <a href="/">Go back to home</a>`);
});

app.get("/help", (req, res)=>{
    res.send([
        {
            name: "souro",
            Email: "souro911@gmail.com"
        }
    ]);
});

app.listen(80);