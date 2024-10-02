import { NavLink } from "react-router-dom";
import "./navbar.css";

const activeNavLinkStyle = ({ isActive }) => ({
  color: isActive ? "#555df9" : "revert-layer",
});
const Navbar = () => {
  return (
    <nav
      className="navbar sticky-top py-1"
      style={{ backgroundColor: "rgba(236, 236, 236, 1)" }}
    >
      <div className="container-fluid">
        <div className="navbar-brand links">
          <NavLink to="/" style={activeNavLinkStyle}>
            <i className="logo bi bi-book-half " style={{ fontSize: "2em" }} />
          </NavLink>
          <h3 className="mb-0">Bookstore</h3>
        </div>
        <div className="links">
          <NavLink to="books" style={activeNavLinkStyle}>
            Books
          </NavLink>
          <NavLink to="contact" style={activeNavLinkStyle}>
            Contact
          </NavLink>
          <NavLink to="cart" style={activeNavLinkStyle}>
            <i className="logo bi bi-cart " style={{ fontSize: "2em" }} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
