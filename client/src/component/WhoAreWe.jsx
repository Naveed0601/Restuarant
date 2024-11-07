import React from "react";
import jsonData from "../restAPI.json";
import center from "../assets/center.svg";
import who_we_are from "../assets/whoweare.png";

const WhoAreWe = () => {
  const data = jsonData.data[0].who_we_are;

  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {data.slice(0, 2).map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 style={{ fontWeight: "300" }} className="heading">
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
        <div className="image_banner">
          <img src={center} alt="center" className="gradient_bg" />
          <img src={who_we_are} alt="who" />
        </div>
        <div className="text_banner">
          {data.slice(2, 4).map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 style={{ fontWeight: "300" }} className="heading">
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
