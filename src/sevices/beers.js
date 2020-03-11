import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
});

const list = async () => {
  try {
    
const result = await instance.get('/beers');
const products = result.data
return products

    
  } catch (error) {
    console.log(error);
  }
}
// };() =>
//   new Promise((resolve, reject) => {
//     instance
//       .get('/beers')
//       .then(result => {
//         const products = result.data;
//         resolve(products);
//       })
//       .catch(reject);
//     // .catch(error => {
//     //   reject(error);
//     // });
//   });

const load = async(id) =>{
  try {
    const result = await instance.get(`/beers/${id}`)
const beer = result.data;
return beer
  }catch (error) {
    console.log(error);
  }

}

  // new Promise((resolve, reject) => {
  //   instance
  //     .get(`/beers/${id}`)
  //     .then(result => {
  //       const beer = result.data;
  //       resolve(beer);
  //     })
  //     .catch(reject);
  // });

const random = async () => {
try {
  const result = await instance.get('beers/random')
  const beer = result.data;
  return beer
}catch (error) {
  console.log(error);
}
}

// }
//   new Promise((resolve, reject) => {
//     instance
//       .get('beers/random')
//       .then(result => {
//         const beer = result.data;
//         resolve(beer);
//       })
//       .catch(reject);
//   });

export { list, load, random };
