const productDB = require('../config/connection');

module.exports = {
  getAllProducts() {
    return productDB.any(`SELECT * FROM products`);
  },

  addProduct(product) {
    return productDB.one(
      `INSERT INTO products
                            (image_ids, description, contributors, price, number_sold)
                          VALUES
                            ($[image_ids], $[description],
                            $[contributors], $[price], $[number_sold])
                            RETURNING *`,
      product,
    );
  },

  editProduct(product) {
    return productDB.one(
      `UPDATE products
        SET image_ids = $[image_ids], description = $[description], price=$[price], number_sold = $[number_sold]
                          WHERE id = $[id] RETURNING *`,
      product,
    );
  },

  deleteProduct(product) {
    return productDB.none(`DELETE FROM products WHERE id = $1`, product.id);
  },
};
