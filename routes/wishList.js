var express = require('express');
var router = express.Router();
var WishList = require('../models').WishList
var Product = require('../models').Product

router.post('/', (req, res) => {
     var wishlist = new Wishlist(req.body)

     wishlist.save((err, data) => {
          if (err) res.status(500).send({ error: `could not save` })

          else res.send(data)
     })
})

router.put('/products/add', (req, res) => {
     Product.findOne({ _id: req.body.productId }, (err, product) => {
          if (err) return res.status(500).send({ error: "Could not find product" })
  
          else {
              WishList.update({ _id: req.body.wishlistId }, {
                  $addToSet: { products: product._id }
              }, function (err, wishlist) {
                  if (err)
                      res.status(500).send({ error: "Could not add item to wishlist" })
                  else {
                      res.send(wishlist)
                  }
              })
          }
      })
})


router.get('/', (req, res) => {
     WishList.find({})
     .populate({ path: 'products', model: 'Product' })
     .exec((err, wishLists) => {
         if (err)
             res.status(500).send({ error: 'Could not populate products' })
         else
             res.send(wishLists)
     })
     
     // WishList.find({}, (err, data) => {
     //      if (err) return console.error(err);

     //      else res.send(data)
     // })
})


module.exports = router;