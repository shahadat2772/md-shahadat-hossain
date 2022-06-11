import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import laptop from "../../../assets/images/laptop44.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="home" className="section hero min-h-screen">
      <div className="hero-content  md:gap-6 flex-col lg:flex-row-reverse">
        <img alt="" src={laptop} className="md:max-w-[470px]" />
        <div className="max-w-xl">
          <h1 className="md:text-[80px] text-[45px] md:leading-[78px] leading-[53px] bannerTexts">
            Hello,
          </h1>
          <h1 className="md:text-[80px] text-[45px] md:leading-[78px] leading-[53px] bannerTexts">
            <span className="text-primary">I'm</span> Shahadat,
          </h1>
          <h1 className="md:text-[80px] text-[45px] md:leading-[78px] leading-[53px] bannerTexts">
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

export default Banner;
