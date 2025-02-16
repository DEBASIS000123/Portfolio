import React, { useContext } from "react";
import heroimg from "../assets/home-main.svg";
import Avatar from "../assets/Avatar.png";
import { IoIosArrowForward } from "react-icons/io";
import Type from "./Type.jsx";
import { Link } from "react-scroll";
import { AppStore } from "../Store/AppstoreProvider.jsx";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  const { lightmode } = useContext(AppStore);
  return (
    <div
      name="home"
      className={`h-auto w-full md:pt-32 pb-32
         ${
           lightmode
             ? "bg-gradient-to-br from-cyan-100 to-purple-100"
             : "bg-gradient-to-b from-black to-gray-800"
         }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="pt-44 md:pt-24 flex flex-col justify-center items-center h-full md:items-start">
          <h1
            className={`text-4xl font-bold flex ${
              lightmode ? "text-black sm:text-4xl " : "text-white sm:text-4xl "
            } z-10 relative`} // Add relative and z-10 here
          >
            Hey There{"  "}
            <span className="wave" role="img" aria-label="Emoji">
              👋🏻
            </span>
          </h1>

          <h2
            className={`py-10 text-4xl sm:text-4xl font-bold text-center ${
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
              to="secoundpart"
              smooth
              duration={500}
              className={`text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group font-bold `}
            >
              Read more..
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

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row secoundpart">
        <div className="pt-44 md:pt-24 flex flex-col justify-center items-center h-full md:items-start">
          <h1
            className={`text-4xl font-bold flex ml-5 ${
              lightmode ? "text-black sm:text-4xl " : "text-white sm:text-4xl "
            }`}
          >
            Brief <p className="text-Primary ml-4">Introduction</p>
          </h1>
          <div className={`mt-8 ${lightmode ? "text-black  " : "text-white "}`}>
            <p className="text-sm md:text-lg mt-10 m-10">
              I love the process of changing a raw idea into a website or a
              product that impacts lives. I want to do work that challenges me
              as a developer & work that I can be proud of.
              <br />
              <br />I am fluent in{" "}
              <b className="text-Primary">
                Java Python C React-Js ML SQL Networking & DSA{" "}
              </b>{" "}
              and know a bit of <b className="text-Primary">C++</b> and am
              working on a few projects in the{" "}
              <b className="text-Primary">SpringBoot</b>.
              <br />I plan to learn <b className="text-Primary">AWS</b> and
              <b className="text-Primary"> Microservices</b> in the near future.{" "}
              <br />
              <br />
              Also, I love <b className="text-Primary">coffee</b>{" "}
              <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
            </p>
          </div>
          <div>
            <img
              className=" md:mx-4 lg:mx-10 w-auto h-96 md:w-full"
              src={Avatar}
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
