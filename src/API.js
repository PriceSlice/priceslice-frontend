// api.js

import axios from 'axios';
const { xdict } = require('./Sidebar/Sidebar.js');

export const saveProductKey = (productKey) => {
    // Your code to save the productKey, for example, storing it in local storage or making an API call
    console.log(`Product key saved: ${productKey}`);
  };

const instance = axios.create({
  baseURL: 'https://maddata-backend.vercel.app/api/products/', // Replace with your API base URL
});

export const fetchData = async () => {
  try {
    const response = await instance.get(); // Adjust the endpoint accordingly
    console.log('Data fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchDataByProductKey = (productKey) => {
    // Concatenate the productKey to the baseURL
    const url = `https://maddata-backend.vercel.app/api/products/${productKey}/`;
    
    // Make a GET request to the concatenated URL
    console.log(url);
    return instance.get(url);
  };



export default instance;
