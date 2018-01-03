const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost/officeshop')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var index = require('./routes/index');
var products = require('./routes/products');
var wishList = require('./routes/wishList');

app.use('/', index);
app.use('/products', products);
app.use('/wishlist', wishList);

// var macbook = new Product({ title: 'macbook', price: 2249.99, description: 'apple macbook 2018' })
// macbook.save(function (err, macbook) {
//      if (err) return console.error(err);
//      macbook
// });

// Product.find({title: 'macbook'}, (err, data) => {
//      if (err) return console.error(err);
//      console.log(data)
// })

app.listen('3000', () => {
     console.log('office shop running on port 3000')
})