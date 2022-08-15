const axios = require('axios');

async function searchCep(CEP) {
  const URL = `https://viacep.com.br/ws/${CEP}/json/`;
  const { data } = await axios.get(URL);
  const { cep, logradouro, bairro, localidade, uf } = data;
  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = searchCep;
