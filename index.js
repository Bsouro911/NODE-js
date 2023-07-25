const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

const r_dir = path.join(__dirname, 'Public_folder')

// app.use(express.static(r_dir));

app.set('view engine', 'ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${r_dir}/index.html`)
});

app.get('/profile',(_,resp)=>{
    const data = {
        name: 'souro',
        email: 'souro123@gmail.com',
        city: 'kolkata',
        skills: ['c/c++', 'python', 'javascript', 'mongodb']
    };
    resp.render('profile',{data});
});

app.get('/register',(_,resp)=>{
    resp.render('register');
})

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${r_dir}/about.html`)
// });

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${r_dir}/404.html`)
// });

app.listen(5000);

// remove an extension from url -> sendFile method