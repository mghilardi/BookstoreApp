import { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../../services/ToastService";
import { NavLink } from "react-router-dom";
import { getBooks, deleteBook } from "../../services/bookService";

const BookList = () => {
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

  const handleDelete = async (id) => {
    console.debug("id : -", id);
    try {
      const { data } = await deleteBook(id);
      console.debug(data);
      setBooks(books.filter((item) => item.id !== id));
      toastSuccess("Book deleted");
    } catch (error) {
      console.error(error);
      toastError(`${error.message}: ${error.response.data.message}`);
    }
  };

  return (
    <div className="mt-4 mx-5">
      <div>
        <NavLink to={`/books/create`}>
          <button className="btn btn-outline-dark btn-sm add-btn">
            Add book
            <i className="icon bi bi-plus-square" />
          </button>
        </NavLink>
      </div>

      <table className="table table-striped table-borderless table-hover table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Isbn</th>
            <th>Author</th>
            <th className="text-center">#</th>
            <th>Price (€)</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, i) => {
            return (
              <tr key={i + 1}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td className="text-center">{book.quantity}</td>
                <td className="text-center">{book.price}</td>
                <td className="text-center">
                  <NavLink to={`/books/${book.id}`}>
                    <i className="icon bi bi-pencil-square" />
                  </NavLink>

                  <i
                    className="icon bi bi-trash"
                    style={{ color: "#dc3545" }}
                    onClick={() => handleDelete(book.id)}
                  />
                  {/* <i
                    className="icon icon-trash bi bi-trash"
                    onClick={() => handleDelete(book.id)}
                  /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
