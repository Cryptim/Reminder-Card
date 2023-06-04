import React, { useState, useEffect } from "react";
import { FaEnvelopeOpen, FaUser, FaMap, FaPhone, FaLock } from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("Random value");

  const handleValue = (e) => {
    const newValue = e.target.dataset.label;
    setTitle(newValue);
    setValue(person[newValue]);
  };

  const getPerson = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      const person = data.results[0];

      if (person) {
        const { phone, email } = person;
        const { large: image } = person.picture;
        const { login: { password } = {} } = person;
        const { name: { first = "", last = "" } = {} } = person;
        const { dob: { age } = {} } = person;
        const { location: { street: { number, name } = {} } = {} } = person;

        const newPerson = {
          image,
          phone,
          email,
          password,
          age,
          street: number && name ? `${number} ${name}` : null,
          name: `${first}${last}`,
        };

        setPerson(newPerson);
        setTitle("name");
        setValue(newPerson.name);
      }
    } catch (error) {
      console.error("Error fetching random user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person?.image || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is </p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
            <button className="btn" type="button" onClick={getPerson}>
              {loading ? "Loading..." : "Random User"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
