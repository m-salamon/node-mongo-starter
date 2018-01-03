const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId


const wishListSchema = new Schema({
    title: { type:String, default: 'Cool WishList' },
    products : [{ type: ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model('Wishlist', wishListSchema)
