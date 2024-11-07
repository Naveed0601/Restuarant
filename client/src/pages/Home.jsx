import React from "react";
import HeroSection from "../component/HeroSection";
import About from "../component/About";
import Qualities from "../component/Qualities";
import Menu from "../component/Menu";
import WhoAreWe from "../component/WhoAreWe";
import Team from "../component/Team";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
    </div>
  );
};

export default Home;
