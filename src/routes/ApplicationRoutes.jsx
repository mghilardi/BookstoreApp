import { Route, Routes } from "react-router-dom";
import BookCreate from "../pages/book/BookCreate";
import BookEdit from "../pages/book/BookEdit";
import BookIndex from "../pages/book/BookIndex";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Contact from "../pages/contact/contact";
import Store from "../pages/store/Store";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="books" element={<BookIndex />} />
      <Route path="books/:id" element={<BookEdit />} />
      <Route path="books/create" element={<BookCreate />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default ApplicationRoutes;
