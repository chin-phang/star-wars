import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.co/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const get = (url, ...config) => {
  return instance
    .get(url, ...config)
    .then(response => response)
    .catch(error => {
      if (error.response) {
        if (error.response.status === 404) {
          window.location.replace('/404');
        }

        return error.response.data;
      }
    });
};

export default instance;
