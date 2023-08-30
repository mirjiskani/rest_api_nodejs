const express = require('express');
const router = express.Router();
const {
   getListProducts,
   createProduct,
   updateProduct,
   deleteProduct
} = require('../controllers/productController');
const auth = require('../middleware/auth');

// getting list of 
router.get('/',auth, getListProducts);
// creating products into database 
router.post('/create-product',auth, createProduct);

// creating products into database 
router.put('/update-product',auth, updateProduct);

router.post('/delete-product',auth,deleteProduct);

module.exports = router;