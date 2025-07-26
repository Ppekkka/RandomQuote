import { getBook } from "./getBook";
import { getBooks } from "./getBooks";

export const getRandomQuote = async () => {
  const books = await getBooks();
  const title = books[Math.floor(Math.random() * books.length)];
  const book = await getBook(title);
  const idx = Math.floor(Math.random() * book.quotesOfUse.length);
  const quote = book.quotesOfUse[idx];
  return { title, book, idx, quote };
};
