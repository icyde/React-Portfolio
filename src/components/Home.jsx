import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import avatar from "../assets/avatar.webp";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-gradient-to-b pt-[80px] from-[#000B18] to-[#00172D]"
    >
      {/* bg-[#0a192f] */}
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <div>
          <div className="md:flex items-end gap-16">
            <div className="md:flex-col">
              <div className="flex items-end">
                <p className="text-gray-300 pl-1 md:text-xl">Hi, my name is</p>
                <img
                  className="mx-auto w-[100px] md:hidden my-auto"
                  src={avatar}
                  alt="my avatar"
                />
              </div>
              <h1 className="flex text-4xl sm:text-7xl font-bold text-slate-300">
                Brandon Tan
              </h1>
            </div>
            <img
              className="hidden md:flex w-[250px] my-auto"
              src={avatar}
              alt="my avatar"
            />
          </div>
          <h2 className="text-4xl sm:text-7xl font-bold text-slate-400">
            I'm a Front-end Developer.
          </h2>
        </div>

        <p className="text-slate-400 py-4 max-w-[700px] md:text-xl">
          I specialize in building intuitive and exceptional user-centric
          applications. Currently, I'm focused on building responsive full-stack
          web applications and honing my expertise.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-gray-200 group border-[1px] px-6 py-3 my-2 flex items-center hover:bg-[#8892b0]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
