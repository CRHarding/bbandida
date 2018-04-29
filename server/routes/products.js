const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const contributorController = require('../controllers/contributorController');

router.get('/', (req, res) => {
  productController
    .getAllProducts()
    .then(products => {
      res.json({ products: products });
    })
    .catch(err => {
      res.status(400).json({ errors: err });
    });
});

router.post('/', (req, res) => {
  const productObject = {
    image_ids: req.body.image_ids,
    description: req.body.description,
    contributors: req.body.contributors,
    price: req.body.price,
  };
  if (productObject.contributors.length > 0) {
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
  productController
    .addProduct(productObject)
    .then(product => {
      res.json({ product: product });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ errors: err });
    });
});

router.post('/edit', (req, res) => {
  const productObject = {
    id: req.body.id,
    image_ids: req.body.image_ids,
    description: req.body.description,
    contributors: req.body.contributors,
    price: req.body.price,
    number_sold: req.number_sold,
  };
  productController
    .editProduct(productObject)
    .then(responseProduct => {
      res.json({ product: responseProduct });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ errors: err });
    });
});

router.post('/delete/:id', (req, res) => {
  productController
    .deleteProduct(req.params.id)
    .then(() => {
      res.json({ deleted: true });
    })
    .catch(err => {
      res.status(400).json({ errors: err });
    });
});

module.exports = router;
