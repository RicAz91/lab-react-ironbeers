import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
});

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/beers')
      .then(result => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject);
    // .catch(error => {
    //   reject(error);
    // });
  });

const load = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/${id}`)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

const random = () =>
  new Promise((resolve, reject) => {
    instance
      .get('beers/random')
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

export { list, load, random };
