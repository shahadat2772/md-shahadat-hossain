import React from "react";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectDetailModal = ({ ProjectProDetail }) => {
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
  } = ProjectProDetail;

  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="projectDetailModal" className="modal-toggle" />
      <label htmlFor="projectDetailModal" className="modal cursor-pointer">
        <label className="modal-box relative w-11/12 max-w-5xl" htmlFor="">
          <label
            htmlFor="projectDetailModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-medium">
            More on <span className="text-primary">{name}</span>
          </h3>
          {/* Brief */}
          <p>{brief}</p>
          {/* Bullet Points */}
          <p className="py-[10px] ">
            {bulletPoints.map((bp, index) => (
              <li key={index}>{bp}</li>
            ))}
          </p>
          {/* Technologies */}
          <p>Build with: {technologies}</p>
          {/* Links */}
          <p className="pt-2">
            <FontAwesomeIcon className="text-[13px] px-2" icon={faLink} />
            <a className="pr-4 text-primary" href={live} target="_blank">
              Live
            </a>
            <a className="pr-4 text-primary" href={clientRepo} target="_blank">
              GitHub-Client
            </a>
            <a className="pr-4 text-primary" href={serverRepo} target="_blank">
              GitHub-Server
            </a>
          </p>
          {/* Images */}
          <div className="imagesContainer gap-7 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 pt-4">
            {images?.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </div>
        </label>
      </label>
    </div>
  );
};

export default ProjectDetailModal;
