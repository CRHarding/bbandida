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

let result = [];
let options = { type: 'upload', max_results: 50, tags: 'true' };

router.get('/', (req, res) => {
  productController
    .getAllProducts()
    .then(products => {
      let images = [];
      products.forEach(product => {
        images.push(product.images)
      });
      res.json({ products: products, images: images });
    })
    .catch(err => {
      res.status(400).json({ errors: err });
    });
});

router.post('/', (req, res) => {
  const productObject = {
    title: req.body.title,
    description: req.body.description,
    contributors: req.body.contributors,
    images: req.body.images,
    mainImage: req.body.mainImage,
    price: req.body.price,
    number_sold: req.body.numberSold,
  };
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
    title: req.body.title,
    description: req.body.description,
    contributors: req.body.contributors,
    images: req.body.images,
    mainImage: req.body.mainImage,
    price: req.body.price,
    number_sold: req.body.numberSold,
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
