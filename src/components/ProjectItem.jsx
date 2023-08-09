import React from "react";

const ProjectItem = ({ imgURL, title, description, videoURL, sourceURL }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgURL})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover effect */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider flex justify-center align-center mx-auto px-4 text-center">
          {title}
        </span>
        <div className="pt-8 text-center">
          {videoURL !== null ? (
            <a href={videoURL} target="_blank" rel="noreferrer">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-300">
                Video
              </button>
            </a>
          ) : (
            <></>
          )}
          <a href={sourceURL} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-300">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
