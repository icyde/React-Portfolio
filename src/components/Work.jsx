import React from "react";
import projects from "./ProjectList";
import ProjectItem from "./ProjectItem";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-gradient-to-t from-[#000B18] to-[#00172D] text-gray-300 pt-16"
    >
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#8892b0]">
            Work
          </p>
          <p className="py-6 md:text-xl">Some of my recent projects:</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* grid item */}
          {projects.map((project, idx) => {
            return (
              <ProjectItem
                key={idx}
                title={project.title}
                description={project.description}
                imgURL={project.img}
                videoURL={project.videoURL}
                sourceURL={project.sourceURL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
