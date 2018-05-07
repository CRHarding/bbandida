const productDB = require('../config/connection');

module.exports = {
  getAllProducts() {
    return productDB.any(`SELECT * FROM products ORDER BY id`);
  },

  addProduct(product) {
    return productDB.one(
      `INSERT INTO products
                            (tags, images, mainImage, description, contributors, price)
                          VALUES
                            ($[tags], $[images], $[mainImage], $[description],
                            $[contributors], $[price])
                            RETURNING *`,
      product,
    );
  },

  editProduct(product) {
    return productDB.one(
      `UPDATE products
        SET title = $[title], description = $[description], price=$[price], number_sold = $[number_sold]
                          WHERE id = $[id] RETURNING *`,
      product,
    );
  },

  deleteProduct(product) {
    console.log(product);
    return productDB.none(`DELETE FROM products WHERE id = $1`, product);
  },
};
