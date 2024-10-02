import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { saveBook } from "../../services/bookService";
import { toastError, toastSuccess } from "../../services/ToastService";

const BookCreate = () => {
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.debug(name, value);
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await saveBook(book);
      setBook(data);
      console.debug(data);
      navigate("/books");
      toastSuccess("Book created");
    } catch (error) {
      console.error(error);
      toastError(`${error.response.data.message.slice(1, -1)}`);
    }
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="title"
            name="title"
            value={book.title || ""}
            onChange={handleInput}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="author"
            name="author"
            value={book.author || ""}
            onChange={handleInput}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="isbn" className="form-label">
            ISBN
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="isbn"
            name="isbn"
            value={book.isbn || ""}
            onChange={handleInput}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="price" className="form-label">
            Price (€)
          </label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            className="form-control form-control-sm"
            id="price"
            name="price"
            value={book.price || 0}
            onChange={handleInput}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            min="0"
            max="10000"
            step="1"
            className="form-control form-control-sm"
            id="quantity"
            name="quantity"
            value={book.quantity || 0}
            onChange={handleInput}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="description"
            name="description"
            value={book.description || ""}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-dark submit-btn">
          Save
        </button>
        <button
          type="reset"
          className="btn btn-danger reset-btn"
          onClick={() => navigate("/books")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
