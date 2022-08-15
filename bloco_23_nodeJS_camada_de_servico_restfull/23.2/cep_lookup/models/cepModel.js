const connection = require('../helpers/connection');
const connection2 = require('../helpers/connection2');
const searchCep = require('../helpers/api');

async function addBairro({ bairro, localidade, uf }) {
  const query = 'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?)';
  const [{ affectedRows }] = await connection2.query(query, [bairro, localidade, uf]);
  return affectedRows;
}

async function getBairroId(bairro) {
  const query = 'SELECT * FROM bairros WHERE bairro = ?';
  const [[{ id }]] = await connection2.query(query, [bairro]);
  return id;
}

async function addCep2({ cep, logradouro, bairro, localidade, uf }) {
  const affectedRows = await addBairro({ bairro, localidade, uf });
  if (affectedRows === 0) return null;
  const id = await getBairroId(bairro);
  const formatedCep = cep.replace('-', '');
  const query = 'INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?)';
  const [{ affectedRows: ar }] = await connection2.query(query, [formatedCep, logradouro, id]);
  console.log(ar);
}

async function getCepFromExternalAPI(cep) {
  const cepObj = await searchCep(cep);
  await addCep2(cepObj);
  if (!cepObj || !cepObj.cep) return null;
  return cepObj;
}

async function getCep(cep) {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [[result]] = await connection.query(query, [cep]);
  if (!result) return getCepFromExternalAPI(cep);
  return result;
}

// * Function version to add in the cep_lookp table
async function addCep({ cep, logradouro, bairro, localidade, uf }) {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const [{ affectedRows }] = await connection.query(query, [
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  ]);
  console.log(affectedRows);
  return affectedRows;
}

module.exports = {
  getCep,
  addCep,
};
