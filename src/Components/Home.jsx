import React from "react";
import heroimg from "../assets/home-main.svg";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="pt-72 md:pt-24 flex flex-col justify-center items-center h-full md:items-start">
          <h2 className="text-4xl sm:text-4xl font-bold flex text-white">
            Hey There{"  "}
            <span role="img" aria-label="Emoji" className="flex emoji">
              👋🏼
            </span>
          </h2>
          <h2 className="py-10 text-4xl sm:text-4xl font-bold text-white">
            I'M <span className="text-Primary">DEBASIS MISHRA</span>
          </h2>
          <h2 className="py-10 text-4xl sm:text-4xl font-bold text-Primary">
            Software Developer
          </h2>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group font-bold">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl md:mx-4 lg:mx-14 xl:mx-24 w-auto h-96 md:w-full"
            src={heroimg}
            alt="heroimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
