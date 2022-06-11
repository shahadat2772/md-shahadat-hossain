import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  FullpageContext,
} from "@ap.cx/react-fullpage";
import Home from "./pages/Home/Home/Home";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactMe from "./pages/ContactMe/ContactMe";
import Blogs from "./pages/Blogs/Blogs";

const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection>
          <Home></Home>
        </FullpageSection>
        <FullpageSection className="max-h-screen overflow-y-auto hero">
          <Projects></Projects>
        </FullpageSection>
        <FullpageSection>
          <AboutMe></AboutMe>
        </FullpageSection>
        <FullpageSection>
          <ContactMe></ContactMe>
        </FullpageSection>
        <FullpageSection>
          <Blogs></Blogs>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
