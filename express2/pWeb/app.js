const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactForm');
}

// mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    emali: String,
    address: String,
    feedback: String
});

const contact = mongoose.model('contact', contactSchema);


// express specific
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// pug specific
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// endpoints
app.get('/', (req, res)=>{
    const p = {}
    res.status(200).render('index.pug', p);
})

app.get('/contact', (req, res)=>{
    const p = {}
    res.status(200).render('contact.pug', p);
})

app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database") // if error occurs then it will be displayed
    })

    // res.status(200).render('contact.pug');
})


// start the server
app.listen(port);