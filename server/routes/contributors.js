const express = require('express');
const router = express.Router();
const contributorController = require('../controllers/contributorController');

router.get('/', (req, res) => {
  contributorController
    .getAllContributors()
    .then(contributors => {
      res.json({ contributors: contributors });
    })
    .catch(err => {
      res.status(400).json({ errors: err });
    });
});

module.exports = router;
