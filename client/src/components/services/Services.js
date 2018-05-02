import axios from 'axios';

const Services = {
  adminLogin(userInfo) {
    console.log('This is services for admin login');
  },

  getProducts() {
    console.log('This is services for getProducts');
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
    console.log('This is services for getContribs');
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
