import React, { useContext } from "react";

import { projectProDetailContext } from "../../App";

const EachProject = ({ project }) => {
  // Using context for project detail
  const [ProjectProDetail, setProjectForDetail] = useContext(
    projectProDetailContext
  );

  const {
    _id,
    name,
    brief,
    images,
    bulletPoints,
    technologies,
    live,
    clientRepo,
    serverRepo,
  } = project;

  return (
    <div className="eachProject card rounded card-compact w-80 bg-base-100 shadow-2xl">
      <figure>
        <img src={images[0]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{brief}</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="projectDetailModal"
            onClick={() => setProjectForDetail(project)}
            className="btn btn-primary btn-outline"
          >
            Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
