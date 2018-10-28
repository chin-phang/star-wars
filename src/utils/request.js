import axios from 'axios';
import { throwError } from 'rxjs';

const request = axios.create({
  baseURL: 'https://swapi.co/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const get = (url, ...config) => {
  return request
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
