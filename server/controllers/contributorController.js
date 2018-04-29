const contributors = require('../models/contributorDB');

module.exports = {
  getOneContributor(contributor) {
    return contributors.getOneContributor(contributor);
  },

  getAllContributors() {
    return contributors.getAllContributors();
  },
};
