import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import ReactFullpage from "@fullpage/react-fullpage";
import ContactMe from "./pages/ContactMe/ContactMe";
import { Toaster } from "react-hot-toast";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import ProjectDetailModal from "./pages/Projects/ProjectDetailModal";
import Blogs from "./pages/Blogs/Blogs";
import FullPageScroll from "./FullPageScroll";
import Banner from "./pages/Home/Banner/Banner";
import HireMeModal from "./pages/AboutMe/HireMeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

export const projectProDetailContext = createContext("projectDetailState");
export const hireMeInfoContext = createContext("hireMeInfoContext");

function App() {
  // Modal opener state
  const [ProjectProDetail, setProjectForDetail] = useState(null);
  const [hireMeInfo, setHireMeInfo] = useState(null);

  // Sate for navIcon
  const [checked, setChecked] = useState(false);

  const menuItems = (
    <>
      <li className="font-medium">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#home"}
        >
          Home
        </a>
      </li>
      <li className="font-medium">
        {/* <a href={"/#projects"}>Projects</a> */}
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#projects"}
        >
          Projects
        </a>
      </li>
      <li className="font-medium">
        <a
          onClick={() => {
            document.getElementById("my-drawer-4").click();
          }}
          href={"/#about"}
        >
          About
        </a>
      </li>
      <li className="font-medium">
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
    </>
  );

  return (
    <div>
      <projectProDetailContext.Provider
        value={[ProjectProDetail, setProjectForDetail]}
      >
        <hireMeInfoContext.Provider value={[hireMeInfo, setHireMeInfo]}>
          {/* NavButton */}
          <div className="absolute top-3 right-3 z-20 bg-base-100 navIcon lg:hidden">
            <label
              onClick={() => setChecked(!checked)}
              htmlFor="my-drawer-4"
              className="navBtn "
            >
              {checked ? (
                <FontAwesomeIcon
                  style={{ width: "23px", height: "23px" }}
                  icon={faBarsStaggered}
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  style={{ width: "23px", height: "23px" }}
                  icon={faBars}
                ></FontAwesomeIcon>
              )}
            </label>
          </div>

          <div className="drawer drawer-mobile">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* <!-- Page content here --> */}
              <div className="scrollable">
                <Home></Home>
                <Projects></Projects>
                <AboutMe></AboutMe>
                <ContactMe></ContactMe>
                <Blogs></Blogs>
              </div>
            </div>
            <div className="drawer-side z-10">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu md:w-[120px] w-100 bg-base-100 justify-center text-base-content">
                {/* <!-- Sidebar content here --> */}
                {menuItems}
              </ul>
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
