import React, { useContext } from "react";
import about from "../../assets/images/about.png";
import { hireMeInfoContext } from "../../App";

const AboutMe = () => {
  const [hireMeInfo, setHireMeInfo] = useContext(hireMeInfoContext);

  return (
    <div id="about" className="section about hero min-h-screen">
      <div className="hero-content flex-col gap-x-12 lg:flex-row">
        <img
          src={about}
          className="md:max-w-[280px] max-w-[200px] rounded-lg"
          alt=""
        />
        <div className="md:max-w-[450px] max-w-[330px]">
          <h1 className="md:text-2xl text-xl font-bold md:pb-1">About me</h1>
          <h1 className="md:text-[45px] text-4xl font-bold">
            <span className="text-primary">I'm</span> Shahadat!
          </h1>
          <p className="md:pt-4 pt-3 pb-0">
            I was always an enthusiast of technologies and curious about the new
            staff. I Finally started web development which I found super
            interesting.
          </p>
          <p className="pb-3 md:pb-5">
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
