const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', (req, res) => {
  products = productController.getAllProducts(req, res)
  .then(products => {
    res.json({ products: products });
  });
});

router.post('/', (req, res) => {
  product = productController.addProduct(req, res)
  .then(product => {
    res.json({ product: product });
  });
});

router.post('/edit', (req, res) => {
  product = productController.editProduct(req, res)
  .then(product => {
    res.json({ product: product });
  });
});

router.post('/delete', (req, res) => {
  productController.deleteProduct(req, res)
  .then(() => {
    res.json({ message: 'Delete successful' });
  });
});

module.exports = router;
