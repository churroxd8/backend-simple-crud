const express = require("express");
const Product = require("../models/product.mode.js");
const router = express.Router();
const { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

router.get('/', getProducts);
router.get('/:id', getSingleProduct);

router.post('/', createProduct);


// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

module.exports = router;