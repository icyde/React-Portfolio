import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#00172D] to-[#00264D] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#8892b0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-slate-400">
              Hi, I'm Brandon. Please take a look around!
            </p>
          </div>
          <div>
            <p className="md:text-xl">
              I am a penultimate Computer Science undergraduate at Singapore
              University of Technology and Design. This portfolio website serves
              as a testament to my journey, showcasing the projects I've
              undertaken, the skills I've acquired, and the perspectives I've
              developed along the way. From coding elegant algorithms to
              crafting intuitive user interfaces, I am dedicated to creating
              solutions that are both functional and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
