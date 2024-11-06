import React from "react";
import jsonData from "../restAPI.json";

const Menu = () => {
  const data = jsonData.data[0].dishes;
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta
            pariatur eius et recusandae veritatis. Quasi, et molestias!
          </p>
        </div>
        <div className="dishes_container">
          {data.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img
                  src={require(`../assets/${element.image.replace("./", "")}`)}
                  alt={element.title}
                />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
