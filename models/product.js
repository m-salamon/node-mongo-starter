const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema =  new Schema({
     title: {type: String, required: true},
     price: {type: Number, required: true},
     description: {type: String, required: 'This item has a description'}
})

module.exports = mongoose.model('Product', productSchema)
