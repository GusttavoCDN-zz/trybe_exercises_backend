import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://gusttavocdn:<wrongPassWord>@librarydb.fka8pua.mongodb.net/Library-API'
);

const database = mongoose.connection;

export default database;
