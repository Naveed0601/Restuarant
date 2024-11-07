import React from "react";
import HeroSection from "../component/HeroSection";
import About from "../component/About";
import Qualities from "../component/Qualities";
import Menu from "../component/Menu";
import WhoAreWe from "../component/WhoAreWe";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
    </div>
  );
};

export default Home;
