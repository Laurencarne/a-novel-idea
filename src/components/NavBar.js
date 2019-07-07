import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav className="NavBar">
      <Link style={navStyle} to="/">
        <h3>Home</h3>
      </Link>

      <ul className="nav-links">
        <Link style={navStyle} to="/books">
          <li>Books</li>
        </Link>
        <Link style={navStyle} to="/orders">
          <li>Orders</li>
        </Link>
        <Link style={navStyle} to="/wishlists">
          <li>Wish List</li>
        </Link>
        <div>
          <h1>Home page!</h1>
          <Link style={navStyle} to='/signin'>Signin</Link> | <Link to='/inventory'>Inventory</Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
