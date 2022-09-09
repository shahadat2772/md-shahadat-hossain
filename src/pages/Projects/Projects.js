import React from "react";
import { useQuery } from "react-query";
import EachProject from "./EachProject";
import "./Project.css";

const Projects = () => {
  const { data: projects, isLoading } = useQuery("projects", () =>
    fetch("projects.json").then((res) => res.json())
  );

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <div id="projects" className="section pb-20">
      <h2 className="md:text-3xl text-[20px] mb-12 pt-8 pl-8">
        <span className="text-primary">MY</span> PROJECTS
      </h2>
      <div className="projectsContainer">
        <div className="projects w-max mx-auto gap-10 gap-x-12 justify-items-center grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          {/* Each Projects */}
          {projects.map((project) => (
            <EachProject key={project._id} project={project}></EachProject>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
