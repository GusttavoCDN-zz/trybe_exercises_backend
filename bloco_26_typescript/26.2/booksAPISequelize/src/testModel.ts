import Book from './database/models/Book';

async function main() {
  const books = await Book.findAll({ raw: true });
  console.table(books);
  console.log('done');
}

main();
