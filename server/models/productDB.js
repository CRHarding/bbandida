const productDB = require('../config/connection');

module.exports = {
  getAllProducts() {
    return productDB.any(`SELECT * FROM products`);
  },

  addProduct(product) {
    return productDB.one(
      `INSERT INTO products
                            (title, images, mainImage, description, contributors, price)
                          VALUES
                            ($[title], $[images], $[mainImage], $[description],
                            $[contributors], $[price])
                            RETURNING *`,
      product,
    );
  },

  editProduct(product) {
    console.log(product);
    return productDB.one(
      `UPDATE products
        SET images = $[images], mainImage = $[mainImage], description = $[description], price=$[price], number_sold = $[number_sold]
                          WHERE id = $[id] RETURNING *`,
      product,
    );
  },

  deleteProduct(product) {
    console.log(product);
    return productDB.none(`DELETE FROM products WHERE id = $1`, product);
  },
};
