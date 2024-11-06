import React from "react";
import jsonData from "../restAPI.json";

const Qualities = () => {
  const data = jsonData.data[0].ourQualities;

  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {data.map((element) => (
          <div className="card" key={element.id}>
            <img
              src={require(`../assets/${element.image.replace("./", "")}`)}
              alt={element.title}
            />
            <p className="title">{element.title}</p>
            <p className="description">{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
