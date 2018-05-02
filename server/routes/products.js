const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const contributorController = require('../controllers/contributorController');
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

router.get('/', (req, res) => {
  productController
    .getAllProducts()
    .then(products => {
      cloudinary.v2.api.resources(function(error, result) {
        res.json({ products: products, images: result });
      });
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
  console.log(productObject);
  if (productObject.contributors.length > 0) {
    productObject.contributors.map(contributor => {
      contributorController
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
