import React from "react";
import HeroSection from "../component/HeroSection";
import About from "../component/About";
import Qualities from "../component/Qualities";
import Menu from "../component/Menu";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
    </div>
  );
};

export default Home;
