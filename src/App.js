import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
// import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/projects" element={<Projects></Projects>}></Route> */}
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
