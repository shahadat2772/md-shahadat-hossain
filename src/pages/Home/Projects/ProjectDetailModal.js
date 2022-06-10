import React from "react";

const ProjectDetailModal = ({ ProjectProDetail }) => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label htmlFor="projectDetailModal" className="btn modal-button">
        open modal
      </label> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="projectDetailModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="projectDetailModal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
