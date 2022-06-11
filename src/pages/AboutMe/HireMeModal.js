import React from "react";

const HireMeModal = ({ hireMeInfo }) => {
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="hireMeModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="hireMeModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">As simple as that!</h3>
          <p className="py-4">
            Phone: 01833778129
            <br />
            Email: mdshahadathossain4774@gmail.com
          </p>
          {/* <div className="modal-action">
            <labelhtmlFor="hireMeModal" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HireMeModal;
