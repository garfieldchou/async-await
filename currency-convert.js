// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');

const getExchangeRate = (from, to) => {
  return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
    return response.data.rates[to];
  });
};

getExchangeRate('USD', 'CAD').then((rate) => {
  console.log(rate);
});
