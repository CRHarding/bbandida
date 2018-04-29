const products = require('../models/productDB');
const contributors = require('../models/contributorDB');

module.exports = {
  getAllProducts() {
    return products.getAllProducts();
  },

  //POSSIBLY NOT NEEDED//
  getOneProduct(id) {
    products
      .getOneProduct(product)
      .then(responseProduct => {
        return responseProduct;
      })
      .catch(err => {
        return err;
      });
  },
  //POSSIBLY NOT NEEDED//

  addProduct(product) {
    return products.addProduct(product);
  },

  editProduct(product) {
    return products.editProduct(product);
  },

  deleteProduct(product) {
    console.log(product);
    return  products.deleteProduct(product);
  },
};
