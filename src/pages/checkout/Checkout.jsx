import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShopContext from "../../context/ShopContext";
import { toastError, toastSuccess } from "../../services/ToastService";
import { saveOrder } from "../../services/OrderService";

const Checkout = () => {
  const { cartItems, getTotalCartAmount, resetCartItems } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const sendOrder = async () => {
    const books = cartItems.map((item) => item.id);
    const order = {
      // TODO remove the hardcoded customer after implement registration and auth
      customer: 103,
      books: books,
    };
    try {
      const { data } = await saveOrder(order);
      resetCartItems();
      console.debug(data);
      navigate("/");
      toastSuccess("Order created");
    } catch (error) {
      console.error(error);
      toastError(`${error.response.data.message.slice(1, -1)}`);
    }
  };

  return (
    <div className="">
      <div className="mt-4 mx-5">
        <table className="table table-striped table-borderless table-hover table-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th className="text-center">#</th>
              <th className="text-center">Price (€)</th>
              <th className="text-center">Subtotal (€)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((book, i) => {
              return (
                <tr key={i + 1}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td className="text-center">{book.quantity}</td>
                  <td className="text-center">{book.price}</td>
                  <td className="text-center">
                    {(
                      Math.round(
                        (book.quantity * book.price + Number.EPSILON) * 100
                      ) / 100
                    ).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end">
          <p>
            <b>
              Order Total €
              {(Math.round((totalAmount + Number.EPSILON) * 100) / 100).toFixed(
                2
              )}
            </b>
          </p>
        </div>
        <button
          className="btn btn-dark back-to-cart-btn"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </button>
        <button
          type="submit"
          className="btn btn-success checkout-btn"
          onClick={() => {
            sendOrder();
            navigate("/");
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
