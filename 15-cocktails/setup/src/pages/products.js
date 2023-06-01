import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h2>Products Page</h2>
      <Link to="/" className="btn">
        Home
      </Link>

      <Link to="/about" className="btn">
        About
      </Link>
    </div>
  );
};

export default Products;
