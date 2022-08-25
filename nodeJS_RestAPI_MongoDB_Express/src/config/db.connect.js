import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://otaku:<pastor2012>@cluster0.fqkxvxi.mongodb.net/alura-node'
);

const db = mongoose.connection;

export default db;
