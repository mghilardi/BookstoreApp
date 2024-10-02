import { useContext } from "react";
import PropTypes from "prop-types";
import defaultBookImage from "../../assets/books/1.jpg";
import ShopContext from "../../context/ShopContext";

const Book = ({ book }) => {
  const { id, title, isbn, author, price } = book;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems.find((item) => item.id === id)?.quantity;

  return (
    <div className="col book">
      <img src={defaultBookImage} />
      <div className="description">
        <p className="text-center mb-2">
          <b>{title.slice(0, 35)}</b>
        </p>
        <div className="details">
          <p className="text-center mb-1">
            <b>Author:</b> {author}
          </p>
          <p className="text-center mb-1">
            <b>ISBN:</b> {isbn}
          </p>
        </div>
        <p className="text-center mt-2 mb-1">€ {price}</p>
      </div>
      <button className="btn btn-dark btn-sm" onClick={() => addToCart(book)}>
        Add To Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
        <i
          className="icon bi bi-plus-square"
          style={{ color: "white", paddingLeft: "4px" }}
        />
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isbn: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Book;
