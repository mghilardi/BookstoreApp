import { useContext } from "react";
import PropTypes from "prop-types";
import ShopContext from "../../context/ShopContext";
import defaultBookImage from "../../assets/books/1.jpg";

const CartItem = ({ book }) => {
  const { id, title, isbn, author, price } = book;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={defaultBookImage} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <div className="details">
          <p>
            <b>Author:</b> {author}
          </p>
          <p>
            <b>ISBN:</b> {isbn}
          </p>
        </div>
        <p>
          <b>€ </b>
          {price}
        </p>
        <div className="countHandler">
          <i
            className="icon bi bi-dash-square"
            onClick={() => removeFromCart(book)}
          />
          <input
            type="number"
            min="0"
            max="10000"
            step="1"
            className="form-control form-control-sm"
            value={cartItems.find((item) => item?.id === id)?.quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <i
            className="icon bi bi-plus-square"
            onClick={() => addToCart(book)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isbn: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
  }),
};
