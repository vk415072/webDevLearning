// 1. basic app setup (1/3)
const express = require('express');
const app = express();
const path = require('path');
// 5. default mongoose code. With custom db name "shopApp"
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myShop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN !!")
    })
    .catch(err => {
        console.log("OH NO! MONGO CONNECTION ERROR!!");
        console.log(err);
    });

// 6. requiring our model 
const Product = require('./models/product');


// 2. basic app setup (2/3)
app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');



// // 4. testing basic route
// app.get('/dog', (req, res) => {
//     res.send('Woff!');
// })



// 7. route to show our Product db
// 8. also making a async handler for this route as it will take time 
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    // console.log(products);
    res.render('products/index.ejs', {products});
})



// 3. basic app setup (3/3)
app.listen(3000, () =>{
    console.log('App is listening on port 3000!');
})

