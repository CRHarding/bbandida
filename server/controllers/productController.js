const products = require('../models/productDB');
const contributors = require('../models/contributorDB');

module.exports = {
  addProduct(req, res) {
    const productObject = {
      image_ids: req.body.image_ids,
      description: req.body.description,
      contributors: req.body.contributors,
      price: req.body.price,
    };
    if (productObject.contributors) {
      productObject.contributors.map(contributor => {
        contributors
          .getOneContributor(contributor)
          .then(contributor => {
            return contributor.id;
          })
          .catch(() => {
            contributors.addContributor(contributor).then(contributor => {
              return contributor.id;
            });
          });
      });
    }

    products
      .addProduct(productObject)
      .then(product => {
        return product;
      })
      .catch(err => {
        return err;
      });
  },

  getAllProducts() {
    products
      .getAllProducts()
      .then(products => {
        return products;
      })
      .catch(err => {
        return err;
      });
  },

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

  editProduct(product) {
    products
      .editProduct(product)
      .then(responseProduct => {
        return responseProduct;
      })
      .catch(err => {
        return err;
      });
  },

  deleteProduct(product) {
    products
      .deleteProduct(product)
      .then(() => {
        return true;
      })
      .catch(err => {
        return false;
      });
  },
};
