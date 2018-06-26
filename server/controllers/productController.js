const products = require('../models/productDB');
const contributors = require('../models/contributorDB');

module.exports = {
  getAllProducts() {
    return products.getAllProducts();
  },

  addProduct(product) {
    return products.addProduct(product);
  },

  editProduct(product) {
    return products.editProduct(product);
  },

  deleteProduct(product) {
    console.log(product);
    return products.deleteProduct(product);
  },
};
