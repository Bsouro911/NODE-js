// application level middleware

const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    if(!req.query.age){
        resp.send("enter your age");
    }
    else if(req.query.age<18){
        resp.send("Sorry can't allow, you are under aged!");
    }
    else{
        next();
    }
}

app.use(reqFilter);

app.get('/',(_, resp)=>{
    resp.send("you are welcome!")
})

app.listen(5000)