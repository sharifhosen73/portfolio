import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import image from "../../../images/my-image.jpeg";

const InfoPage = () => {
  return (
    <section id="info" className="flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-3/5 p-8">
        <h3 className="text-3xl font-semibold my-8">Welcome to my world</h3>
        <h1 className="text-4xl text-rose-600 font-semibold">
          Hi, I'm MD Sharif Hosen <br />
          <span className="text-2xl text-inherit">a Web Developer.</span>
        </h1>
        <p className="text-xl my-8 font-medium text-justify">
          I am a junior web developer with one year of learning/working
          experience. I love to work with logic and build it by programming.
        </p>
        <div>
          <h3 className="text-xl mt-5 mb-2 font-semibold">Find Me</h3>
          <div className="flex text-3xl ">
            <a
              className="mr-4 text-primary "
              href="https://www.linkedin.com/in/md-sharif-hosen-938173191/"
            >
              {" "}
              <FaLinkedin></FaLinkedin>
            </a>

            <a
              className="mr-4 text-black"
              href="https://github.com/sharifhosen73"
            >
              <FaGithub />
            </a>
            <a
              className="mr-4 text-primary"
              href="https://www.facebook.com/profile.php?id=100009112445498"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <button className="btn btn-outline my-8 px-10">Hire Me</button>
      </div>
      <div className="w-full lg:w-2/5 lg:ml-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className="rounded-lg h-[420px] " src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
