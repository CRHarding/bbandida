import axios from 'axios';

const Services = {
  adminLogin(userInfo) {
    console.log('This is services for admin login');
  },

  getProducts() {
    return axios({
      method: 'GET',
      url: '/api/products',
    });
  },

  editProduct(product) {
    console.log('This is servcies for editProduct');
  },

  deleteProduct(product) {},

  getContribs() {
    return axios({
      method: 'GET',
      url: '/api/contributors',
    });
  },

  editContrib(contribute) {},

  createBlog(blog) {},

  editBlog(blog) {},

  deleteBlog(blog) {},
};

export default Services;
