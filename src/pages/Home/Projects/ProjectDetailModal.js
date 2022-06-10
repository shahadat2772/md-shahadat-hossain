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
      <input type="checkbox" id="projectDetailModal" class="modal-toggle" />
      <label for="projectDetailModal" class="modal cursor-pointer">
        <label class="modal-box relative w-11/12 max-w-5xl" for="">
          <label
            for="projectDetailModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-xl font-medium">More on {name}</h3>
          {/* Brief */}
          <p>{brief}</p>
          {/* Bullet Points */}
          <p class="pt-[10px] pb-1">
            {bulletPoints.map((bp) => (
              <li>{bp}</li>
            ))}
          </p>
          {/* Technologies */}
          <p>Build with: {technologies}</p>
          {/* Links */}
          <p className="pt-2">
            <FontAwesomeIcon className="text-[13px] px-2" icon={faLink} />
            <a className="pr-4" href={live}>
              Live
            </a>
            <a className="pr-4" href={clientRepo}>
              GitHub-Client
            </a>
            <a className="pr-4" href={serverRepo}>
              GitHub-Client
            </a>
          </p>
          {/* Images */}
          <div className="imagesContainer gap-7 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 pt-4">
            {images?.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
        </label>
      </label>
    </div>
  );
};

export default ProjectDetailModal;
