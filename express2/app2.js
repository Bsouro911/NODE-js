const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey pug', message: 'Hello there and thanks for telling me how to use pug!' })
});

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.listen(port);