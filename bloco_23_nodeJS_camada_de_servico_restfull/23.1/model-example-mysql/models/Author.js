const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

const getAll = async () => {
  const [authors] = await connection.query('SELECT * FROM authors');
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};
