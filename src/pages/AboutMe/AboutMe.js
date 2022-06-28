import React, { useContext } from "react";
import about from "../../assets/images/about.png";
import { hireMeInfoContext } from "../../App";

const AboutMe = () => {
  const [hireMeInfo, setHireMeInfo] = useContext(hireMeInfoContext);

  return (
    <div id="about" className="section relative about hero min-h-screen">
      <h2 className="absolute top-5 left-4 md:text-3xl text-[20px]">
        <span className="text-primary">ABOUT</span> ME
      </h2>
      <div className="hero-content flex-col gap-x-20 lg:flex-row">
        <img
          src={about}
          className="md:max-w-[240px] max-w-[165px] rounded-lg"
          alt=""
        />
        <div className="md:max-w-[450px] max-w-[330px]">
          <h1 className="md:text-[45px] text-[32px] font-bold">
            <span className="text-primary">I'm</span> Shahadat!
          </h1>
          <p className="md:pt-4 pt-2 pb-1">
            I was always an enthusiast of technologies and curious about the new
            staff. I Finally started web development which I found super
            interesting.
          </p>
          <p className="pb-4 md:pb-7">
            I have worked with numerous technologies on multiple MERN Stack
            projects. Now I am on my way to evolving into a full-stack
            developer.
          </p>
          <label
            htmlFor="hireMeModal"
            onClick={() => setHireMeInfo("HireMe")}
            className="btn btn-primary"
          >
            Hire me
          </label>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
