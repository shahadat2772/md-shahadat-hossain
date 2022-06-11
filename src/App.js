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

export const projectProDetailContext = createContext("projectDetailState");
export const hireMeInfoContext = createContext("hireMeInfoContext");

function App() {
  // Modal opener state
  const [ProjectProDetail, setProjectForDetail] = useState(null);
  const [hireMeInfo, setHireMeInfo] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      {/* <Navbar></Navbar> */}
      <projectProDetailContext.Provider
        value={[ProjectProDetail, setProjectForDetail]}
      >
        <hireMeInfoContext.Provider value={[hireMeInfo, setHireMeInfo]}>
          {/* Trying react full page */}
          {/* <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
          <Route path="/about" element={<AboutMe></AboutMe>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Routes> */}
          <FullPageScroll></FullPageScroll>

          {/* <div className="container">
          <Banner></Banner>
          <Projects></Projects>
          <AboutMe></AboutMe>
          <ContactMe></ContactMe>
          <Blogs></Blogs>
        </div> */}
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
