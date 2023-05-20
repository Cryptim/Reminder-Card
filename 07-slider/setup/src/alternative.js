import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setpeople] = useState(data);
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };
  //   useEffect(() => {
  //     const lastIndex = people.length - 1;
  //     if (index < 0) {
  //       setIndex(lastIndex);
  //     }
  //     if (index > lastIndex) {
  //       setIndex(0);
  //     }
  //   }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => clearInterval(slider);
  }, [index, people.length]);
  return (
    <section className="section">
      <div className="title">
        span
        <span>/</span>Review
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //more stuffs
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (personIndex === index - 1) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <div>
                <img className="person-img" src={image} alt={name} />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
                <button className="prev" onClick={prevSlide}>
                  <FiChevronLeft />
                </button>
                <button className="next" onClick={nextSlide}>
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
