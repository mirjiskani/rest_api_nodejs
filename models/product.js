const mongoose = require('mongoose');
// schema for products 
const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    price: {
        type: mongoose.Decimal128,
        default: 0
    },
    image: {
        type: String,
        default: null
    },
    careatedAt: {
        type: Date,
        default: Date.now()
    },
})

const Products = mongoose.model('Products', productsSchema);
module.exports = Products;