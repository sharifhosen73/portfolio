import React, { useEffect, useState } from "react";

import SingleProject from "../SingleProject/SingleProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <section id="projects" className="my-10">
      <h1 className="text-3xl text-center text-primary font-semibold">
        MY PROJECTS
      </h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mt-16">
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}

        {/* <div className="card bg-base-100 shadow-xl">
          <figure>
            <a
              className="mr-2"
              href="https://clever-licorice-b115f9.netlify.app/"
            >
              <img className="h-64" src={image} alt="Shoes" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">RESALE BIKE</h2>
            <p>This project build by react and uses react component.</p>
            <div className="flex my-3">
              <a
                className="mr-2 text-3xl"
                href="https://clever-licorice-b115f9.netlify.app/"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                className=" text-3xl text-black ml-8"
                href="https://github.com/sharifhosen73/products-resale"
              >
                <FaGithub />
              </a>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <a className="mr-2" href="https://pathshala-tutorial.web.app/">
              <img className="h-64" src={image1} alt="Shoes" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">PATHSHAL TUTORIAL</h2>
            <p>This project build by react and uses react component.</p>
            <div className="flex my-3">
              <a
                className="mr-2 text-3xl"
                href="https://pathshala-tutorial.web.app/"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                className=" text-3xl text-black ml-8"
                href="https://github.com/sharifhosen73/pathshala-tutorial"
              >
                <FaGithub />
              </a>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <a className="mr-2" href="https://tourist-service-e88c6.web.app/">
              <img className="h-64" src={image2} alt="Shoes" />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">TOURIST SERVICES</h2>
            <p>This project build by react and uses react component.</p>
            <div className="flex my-3">
              <a
                className="mr-2 text-3xl"
                href="https://tourist-service-e88c6.web.app/"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                className=" text-3xl text-black ml-8"
                href="https://github.com/sharifhosen73/touriest-service-client"
              >
                <FaGithub />
              </a>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
