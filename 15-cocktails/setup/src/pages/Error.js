import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section ">
      <div className="error-container">
        <h1>oop's! it's a dead end</h1>
        <link to="/" className="btn btn-primary">
          Back Home
        </link>
      </div>
    </section>
  );
};

export default Error;
