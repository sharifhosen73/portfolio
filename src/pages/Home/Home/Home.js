import React from "react";
import Contact from "../Contact/Contact";
import InfoPage from "../InfoPage/InfoPage";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="w-3/4 mx-auto">
      <InfoPage />
      <Projects />
      <Skill />
      <Contact />
    </div>
  );
};

export default Home;
