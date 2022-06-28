import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import laptop from "../../../assets/images/laptop44.png";
import "./Home.css";
const Home = () => {
  return (
    <div id="home" className="section hero min-h-screen">
      <div className="hero-content md:gap-6 flex-col p-0 lg:flex-row-reverse">
        <img alt="" src={laptop} className="md:max-w-[500px] max-w-[320px]" />
        <div className="max-w-[600px]">
          <h1 className="md:text-[85px] text-[46px] md:leading-[85px] leading-[53px] bannerTexts">
            Hello,
          </h1>
          <h1 className="md:text-[85px] text-[46px] md:leading-[85px] leading-[53px] bannerTexts">
            <span className="text-primary">I'm</span> Shahadat,
          </h1>
          <h1 className="md:text-[85px] text-[46px] md:leading-[85px] leading-[53px] bannerTexts">
            Web Developer.
          </h1>
          {/* <div
            aria-label="Slide 2"
            to={"/projects"}
            className="btn btn-primary btn-outline mt-8 ml-1"
          >
            Projects
          </div> */}
          <button className="btn btn-primary btn-outline  mt-8 ml-1">
            <a href="https://drive.google.com/u/0/uc?id=1RpnuRcI_0fjmTDayBN2-wxEeQbaQoEVZ&export=download">
              Download Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
