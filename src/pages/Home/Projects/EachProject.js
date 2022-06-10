import React from "react";

const EachProject = ({ project }) => {
  //   console.log(project);
  const {
    _id,
    name,
    brief,
    bulletPoints,
    images,
    technologies,
    live,
    clientRepo,
    serverRepo,
  } = project;

  console.log(project);

  return (
    <div className="card rounded card-compact w-80 bg-base-100 shadow-2xl">
      <figure>
        <img src={images[0]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{brief}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-outline">Details</button>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
