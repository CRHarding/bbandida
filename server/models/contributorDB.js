const contributorDB = require('../config/connection');

module.exports = {
  getAllContributors() {
    return contributorDB.any(`SELECT * FROM contributor`);
  },

  getOneContributor(id) {
    return contributorDB.one(`SELECT * FROM contributor WHERE id = $1`, id);
  },

  addContributor(contributor) {
    return contributorDB.one(
      `INSERT INTO contributor
        (name, role, link)
      VALUES($[name], $[role], $[link]), RETURNING *`,
    );
  },

  editContributor(contributor) {
    return contributorDB.one(
      `UPDATE contributor
                              SET name = $[name],
                                  role = $[role],
                                  link = $[link]
                              WHERE id = $[id]
                              RETURNING *`,
      contributor,
    );
  },

  deleteContributor(contributor) {
    return contributorDB.none(
      `DELETE FROM contributor WHERE id = $1`,
      contributor.id,
    );
  },
};
