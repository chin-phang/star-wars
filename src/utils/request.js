import axios from 'axios';

const request = axios.create({
  baseURL: 'https://swapi.co/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const get = url => {
  return request
    .get(url)
    .then(response => response)
    .catch(error => error);
};
