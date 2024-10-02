import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShopContext from "../../context/ShopContext";
import CartItem from "./CartItem";

import "./cart.css";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      {totalAmount > 0 ? (
        <div className="book-form">
          <h4 className="text-center">Cart Items</h4>

          {cartItems?.map((book) => {
            return book?.quantity > 0 && <CartItem key={book.id} book={book} />;
          })}

          <div className="text-end">
            <p>
              Subtotal
              <b>
                {" € "}
                {(
                  Math.round((totalAmount + Number.EPSILON) * 100) / 100
                ).toFixed(2)}
              </b>
            </p>
          </div>
          <button
            className="btn btn-dark  back-to-store-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button
            type="submit"
            className="btn btn-success  checkout-btn"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h4 className="text-center mt-4"> Cart is Empty</h4>
      )}
    </div>
  );
};

export default Cart;
