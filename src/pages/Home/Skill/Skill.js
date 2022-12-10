import React from "react";

const Skill = () => {
  return (
    <div id="skill" className="my-14">
      <h1 className="text-5xl text-center text-primary font-bold">
        Professional Skill
      </h1>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl text-primary font-semibold mt-10">
            Frontend Skill
          </h1>
          <div className="mt-3">
            <h3 className="text-xl">HTML-5</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="100"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">CSS-3</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="90"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">Bootstrap</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="100"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">Tailwind CSS</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="100"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">React JS</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="95"
              max="100"
            ></progress>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-primary font-semibold mt-10">
            Backend Skills
          </h1>
          <div className="mt-3">
            <h3 className="text-xl">JavaScript</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="mt-3">
            <h3 className="text-xl">Node JS</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="70"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">Express JS</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="80"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">MongoDB</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="70"
              max="100"
            ></progress>
          </div>

          <div className="mt-3">
            <h3 className="text-xl">JWT</h3>
            <progress
              className="progress progress-secondary w-5/6"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
