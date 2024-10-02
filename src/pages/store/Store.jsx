import { useEffect, useState } from "react";
import "./store.css";
import Book from "./book";
import { getBooks } from "../../services/bookService";
import { toastError } from "../../services/ToastService";

const Store = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
      console.debug(data);
    } catch (error) {
      console.error(error);
      toastError(error.message);
    }
  };

  return (
    <div className="mt-4 mx-2">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 text-center d-flex justify-content-center">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
