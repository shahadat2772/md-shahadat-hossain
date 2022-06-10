import React, { useContext } from "react";
import { useQuery } from "react-query";
import EachProject from "./EachProject";
// import { projectProDetailContext } from "../../../App";

const Projects = () => {
  // Using context for project detail
  // const [ProjectProDetail, setProjectForDetail] = useContext(
  //   projectProDetailContext
  // );

  // console.log([ProjectProDetail, setProjectForDetail]);

  const { data: projects, isLoading } = useQuery("projects", () =>
    fetch("projects.json").then((res) => res.json())
  );

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <div id="projects">
      <div className="projectsContainer max-w-max mx-auto mt-10 pb-14">
        <h2 className="text-3xl">MY PROJECTS</h2>
        <div className="projects gap-10 gap-x-12 justify-items-center mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
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
