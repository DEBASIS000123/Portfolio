import React, { useContext } from "react";
import heroimg from "../assets/home-main.svg";
import { IoIosArrowForward } from "react-icons/io";
import Type from "./Type.jsx";
import { Link } from "react-scroll";
import { AppStore } from "../Store/AppstoreProvider.jsx";

const Home = () => {
  const { lightmode } = useContext(AppStore);
  return (
    <div
      name="home"
      className={`h-screen w-full 
         ${
           lightmode
             ? "bg-gradient-to-br from-cyan-100 to-purple-100"
             : "bg-gradient-to-b from-black to-gray-800"
         }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="pt-72 md:pt-24 flex flex-col justify-center items-center h-full md:items-start">
          <h1
            className={`text-4xl font-bold flex  ${
              lightmode ? "text-black sm:text-4xl " : "text-white sm:text-4xl "
            }`}
          >
            Hey There{"  "}
            <span className="wave" role="img" aria-label="Emoji">
              👋🏻
            </span>
          </h1>
          <h2
            className={`py-10 text-4xl sm:text-4xl font-bold  ${
              lightmode ? "text-black" : "text-white"
            }`}
          >
            I'M <span className="text-Primary">DEBASIS MISHRA</span>
          </h2>
          <h2 className="py-10 text-4xl sm:text-4xl font-bold text-Primary">
            <Type />
          </h2>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className={`text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group font-bold `}
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} />
              </span>
            </Link>
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
