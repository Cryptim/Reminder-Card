import React, { useState } from "react";

const Menu = ({ items, Categories }) => {
  const [readmore, setReadMore] = useState(true);
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, img, desc, price } = menuItems;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">
                {readmore ? desc : `${desc.substring(0, 30)}....`}
                <button
                  className="btn"
                  onClick={() => {
                    setReadMore(!readmore);
                  }}
                >
                  {readmore ? "show less" : "read more"}
                </button>
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
