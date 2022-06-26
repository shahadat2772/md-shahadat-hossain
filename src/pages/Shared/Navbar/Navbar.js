import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="font-medium">
        <a href={"/#home"}></a>
      </li>
      <li className="font-medium">
        {/* <a href={"/#projects"}>Projects</a> */}
        <a
          onclick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#projects"}
        >
          Test
        </a>
      </li>
      <li className="font-medium">
        <a href={"/#about"}>About</a>
      </li>
      <li className="font-medium">
        <a href={"/#contact"}>Contact</a>
      </li>
      <li className="font-medium">
        <a href={"/#blogs"}>Blogs</a>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="">
        <div className="navbar max-w-[1280px] px-[15px] mx-auto">
          <div className="navbar-start bg-base-100 max-w-fit">
            <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg> */}
              <FontAwesomeIcon
                // height={"20px"}
                // width={50}
                style={{ width: "22px", height: "22px" }}
                icon={faBars}
              ></FontAwesomeIcon>
            </label>
          </div>

          <div className="navbar-end">
            {/* <label htmlFor="my-drawer-4" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label> */}
          </div>

          {/* <div className="navbar-end">
            <div className="flex-none">
              <label tabIndex="0" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </label>
            </div>
          </div> */}
          {/* <labelhtmlFor="my-drawer-4" className="drawer-button btn btn-primary">
            Open drawer
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
