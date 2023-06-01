import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" className="btn">
        back home
      </Link>
    </div>
  );
};

export default Error;
