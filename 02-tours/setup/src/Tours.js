import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, setTour }) => {
  console.log(removeTour);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour}>
              {" "}
              setTour={setTour}
            </Tour>
          );
        })}
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            setTour([]);
          }}
        >
          clear all
        </button>
      </div>
    </section>
  );
};

export default Tours;
