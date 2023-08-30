const express = require('express');
const router = express.Router();
const {
   getListProducts,
   createProduct,
   updateProduct,
   deleteProduct
} = require('../controllers/productController');

// getting list of 
router.get('/', getListProducts);
// creating products into database 
router.post('/create-product', createProduct);

// creating products into database 
router.put('/update-product', updateProduct);

router.post('/delete-product',deleteProduct);

module.exports = router;