import React from "react";
import jsonData from "../restAPI.json";

const Team = () => {
  const data = jsonData.data[0].team;
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {data.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img
                  src={require(`../assets/${element.image.replace("./", "")}`)}
                  alt={element.name}
                />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
