import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setpeole] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section>
      <div className="title">
        span
        <span>/</span>Review
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //more stuffs
          return (
            <article key={id}>
              <div>
                <img className="person-img" src={image} alt={name} />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
                <button className="prev">
                  <FiChevronLeft />
                </button>
                <button className="next">
                  <FiChevronRight />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;
