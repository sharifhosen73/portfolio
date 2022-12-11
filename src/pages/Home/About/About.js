import React from "react";
import img from "../../../images/sharif1.png";

const About = () => {
  return (
    <div id="about" className="bg-gray-200">
      <div className="flex flex-col-reverse lg:flex-row">
        <img className="h-[450px] m-10 lg:w-2/6" src={img} alt="" />

        <div className="lg:w-4/6 px-5 py-10 pr-10">
          <h1 className="pb-8 text-5xl text-center font-semibold text-primary">
            ABOUT ME
          </h1>
          <p className="text-xl text-justify">
            I'm a frontend developer from Bangladesh. I love web development
            because I can showcase my creativity in this work. I want to see
            myself as a skilled web developer with my hard work. I want to work
            with someone who can help me develop both my professional and
            personal abilities.
          </p>
          <div className="">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-10 w-1/2 lg:w-80"
              href="https://drive.google.com/file/d/1ux2zmyZOVEbcqBr1umohjz1c6e5cOVN2/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
