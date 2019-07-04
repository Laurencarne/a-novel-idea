import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav className="NavBar">
      <h3>Logo</h3>
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
      </ul>
    </nav>
  );
}

export default NavBar;
