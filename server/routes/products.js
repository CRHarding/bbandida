const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const contributorController = require('../controllers/contributorController');
import multer from 'multer';
import cloudinary from 'cloudinary';
import fileUploadMiddleware from '../middleware/fileUploadMiddleware';

cloudinary.config({
  cloud_name: 'process.ENV.CLOUD_NAME',
  api_key: 'process.ENV.API_KEY',
  api_secret: 'proces.ENV.API_SECRET',
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', (req, res) => {
  productController
    .getAllProducts()
    .then(products => {

      res.json({ products: products, images: images });
    })
    .catch(err => {
      res.status(400).json({ errors: err });
    });
});

router.post('/file', upload.single('file'), fileUploadMiddleware);

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
