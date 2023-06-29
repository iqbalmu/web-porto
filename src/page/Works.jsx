import React from "react";
import Wrapper from "../components/Wrapper";
import Project from "../components/Project";
import { projects } from "../data";
import Button from "../components/Button";

const Works = () => {
  return (
    <Wrapper>
      <div id="project" className="relative">
        <h1 className="text-center text-xl mb-2">projects</h1>
        <p className="text-center text-xs text-zinc-600">beberapa project yang saya buat</p>
        <div className="flex justify-around h-max mt-24">
          {projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              link={project.link}
              title={project.title}
              stack={project.stack}
            />
          ))}
        </div>
        <div className="text-center h-max mt-20 flex justify-center bottom-0">
          <Button text={"view more"} href={""} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Works;
