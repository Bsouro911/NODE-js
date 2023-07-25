const express = require('express');
const app = express();
const reqFilter = require('./midlwr');
const route = express.Router();

route.use(reqFilter);

app.get('/', (_, resp)=>{
    resp.send("welcome to home page")
})

route.get('/users', (req, res)=>{
    res.send("welcome to users page")
})

route.get("/about", (req, res)=>{
    res.render("welcome to about page")
})

app.use('/', route);

app.listen(5000);