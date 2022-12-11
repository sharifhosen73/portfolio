import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import InfoPage from "../InfoPage/InfoPage";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="w-full px-5 lg:w-3/4 mx-auto">
      <InfoPage />
      <Projects />
      <Skill />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
