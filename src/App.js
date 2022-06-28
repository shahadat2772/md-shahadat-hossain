import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe";
import { Toaster } from "react-hot-toast";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import ProjectDetailModal from "./pages/Projects/ProjectDetailModal";
import Blogs from "./pages/Blogs/Blogs";
import HireMeModal from "./pages/AboutMe/HireMeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
export const projectProDetailContext = createContext("projectDetailState");
export const hireMeInfoContext = createContext("hireMeInfoContext");

function App() {
  // Modal opener state
  const [ProjectProDetail, setProjectForDetail] = useState(null);
  const [hireMeInfo, setHireMeInfo] = useState(null);

  // State for navIcon
  const [checked, setChecked] = useState(false);

  // JS For active navigation on scroll
  {
    const sections = document.querySelectorAll("section");
    console.log(sections);
  }

  const menuItems = (
    <div className="menuItems">
      <li className="font-medium menuItem">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#home"}
        >
          Home
        </a>
      </li>
      <li className="font-medium menuItem">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#projects"}
        >
          Projects
        </a>
      </li>
      <li className="font-medium menuItem">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#about"}
        >
          About
        </a>
      </li>
      <li className="font-medium menuItem">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#contact"}
        >
          Contact
        </a>
      </li>
      <li className="font-medium">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#blogs"}
        >
          Blogs
        </a>
      </li>
    </div>
  );

  return (
    <div className="">
      <projectProDetailContext.Provider
        value={[ProjectProDetail, setProjectForDetail]}
      >
        <hireMeInfoContext.Provider value={[hireMeInfo, setHireMeInfo]}>
          {/* NavButton */}
          <div className="absolute top-3 right-3 md:right-7 bg-base-100 z-20 navIcon">
            {/* NavButton Icon */}
            <label htmlFor="my-drawer-4" className="navBtn">
              {checked ? (
                <FontAwesomeIcon
                  style={{ width: "23px", height: "23px", color: "#909096" }}
                  icon={faBarsStaggered}
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  style={{ width: "23px", height: "23px", color: "#909096" }}
                  icon={faBars}
                ></FontAwesomeIcon>
              )}
            </label>
          </div>

          {/* Drawer */}
          <div className="drawer drawer-end">
            <input
              onChange={() => setChecked(!checked)}
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              {/*  Page content here  */}
              <div className="scrollable">
                {/* <Home></Home> */}
                {/* <Projects></Projects> */}
                <AboutMe></AboutMe>
                {/* <ContactMe></ContactMe> */}
                {/* <Blogs></Blogs> */}
              </div>
            </div>
            <div className="drawer-side overflow-x-hidden">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <div className="sideContent bg-base-100 text-base-content">
                {/* Sidebar content here */}
                {menuItems}
              </div>
            </div>
          </div>
        </hireMeInfoContext.Provider>
      </projectProDetailContext.Provider>

      {/* Projects detail modal */}
      {ProjectProDetail && (
        <ProjectDetailModal
          ProjectProDetail={ProjectProDetail}
        ></ProjectDetailModal>
      )}
      {hireMeInfo && <HireMeModal hireMeInfo={hireMeInfo}></HireMeModal>}
      <Toaster></Toaster>
    </div>
  );
}

export default App;
