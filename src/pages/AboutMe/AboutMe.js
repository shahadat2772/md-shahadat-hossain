import React from "react";
import about from "../../assets/images/about.png";

const AboutMe = () => {
  return (
    <div id="about" className="section about hero min-h-screen">
      <div className="hero-content flex-col gap-x-12 lg:flex-row">
        <img
          src={about}
          className="md:max-w-[320px] max-w-[200px] rounded-lg"
          alt=""
        />
        <div className="md:max-w-[450px] max-w-[330px]">
          <h1 className="md:text-5xl text-4xl font-bold">
            <span className="text-primary">I'm</span> Shahadat!
          </h1>
          <p className="pt-5 pb-0">
            I was always an enthusiast of technologies and curious about the new
            staff. I Finally started web development which I found super
            interesting.
          </p>
          <p className="pb-7">
            I have worked with numerous technologies on multiple MERN Stack
            projects. Now I am on my way to evolving into a full-stack
            developer.
          </p>
          <button className="btn btn-primary">Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
