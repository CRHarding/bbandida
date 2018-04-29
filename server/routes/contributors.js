const express = require('express');
const router = express.Router();
const contributorController = require('../controllers/contributorController');

router.get('/', (req, res) => {
  contributors = contributorController
    .getAllContributors()
    .then(contributors => {
      res.json({ contributors: contributors });
    })
    .catch(err => {
      console.log('error in get all--->', err);
      res.json({ errors: err });
    });
});

module.exports = router;
