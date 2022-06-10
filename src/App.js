import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Navbar from "./pages/Shared/Navbar/Navbar";
import ProjectDetailModal from "./pages/Home/Projects/ProjectDetailModal";

export const projectProDetailContext = createContext("projectDetailState");

function App() {
  // Modal opener state
  const [ProjectProDetail, setProjectForDetail] = useState(null);

  console.log(ProjectProDetail);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <projectProDetailContext.Provider
        value={[ProjectProDetail, setProjectForDetail]}
      >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          {/* <Route path="/projects" element={<Projects></Projects>}></Route> */}
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </projectProDetailContext.Provider>

      {/* Projects detail modal */}
      {ProjectProDetail && (
        <ProjectDetailModal
          ProjectProDetail={ProjectProDetail}
        ></ProjectDetailModal>
      )}
    </div>
  );
}

export default App;
