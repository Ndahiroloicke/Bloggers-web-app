import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <div className="body">
      <h1>Bloggers</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">New Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
