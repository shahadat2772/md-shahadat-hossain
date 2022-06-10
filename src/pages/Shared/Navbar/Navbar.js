import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="font-medium">
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to={"/projects"}>Projects</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-base-100">
        <div className="navbar max-w-[1200px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a href="/" className=" normal-case text-2xl">
              ShahadatTheDev
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
