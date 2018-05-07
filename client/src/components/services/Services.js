import axios from 'axios';

const Services = {
  adminLogin(userInfo) {
    console.log('This is services for admin login');
  },

  getProducts() {
    return axios({
      method: 'GET',
      url: '/api/products'
    });
  },

  addProducts(product) {
    return axios({
      method: 'POST',
      url: '/api/products',
      data: product
    });
  },

  editProduct(product) {
    console.log('This is services for editProduct', product)
    return axios({
      method: 'PUT',
      url: 'api/products/edit',
      data: product
    })
  },

  deleteProduct(product) {},

  getContribs() {
    return axios({
      method: 'GET',
      url: '/api/contributors',
    });
  },

  editContrib(contribute) {},

  createBlog(blog) {
    console.log('This is services for createBlog', blog)
  },

  editBlog(blog) {},

  deleteBlog(blog) {},

  contactSubmit(contact) {
    return axios({
      method: 'POST',
      url: '/api/send',
      data: contact
    })
  }
};

export default Services;
