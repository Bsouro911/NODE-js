const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// Express specific
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true })); // Use urlencoded middleware with extended option

// Pug specific
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// endpoints
app.get('/', (req, res)=>{
    res.status(200).render('index.pug'); 
})

app.post('/',(req, res)=>{
    console.log(req.body);
    const p = {'message':'your form has been submitted successfully'}
    res.status(200).render('index.pug',p);
})

// start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
