var express = require('express');
var router = express.Router();
var Product = require('../models').Product

router.post('/', (req, res) => {
     var product = new Product(req.body)

     product.save((err, data) => {
          if (err) res.status(500).send({ error: `could not save` })

          else res.send(data)
     })

     //YOU CAN ALSO USE THIS SYNTAX
     // product.title = req.body.title
     // product.price = req.body.price
     // product.description = req.body.description
})

router.get('/', (req, res) => {
     Product.find({title: 'macbook'}, (err, data) => {
          if (err) return console.error(err);

          else res.send(data)
     })
})


module.exports = router;