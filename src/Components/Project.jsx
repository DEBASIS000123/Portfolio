import React, { useContext } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import image0 from "../assets/projects/image0.png";
import image1 from "../assets/projects/image1.png";
import image2 from "../assets/projects/image2.webp";
import image3 from "../assets/projects/image3.jpg";
import image4 from "../assets/projects/image4.png";
import image6 from "../assets/projects/image6.png";
import { AppStore } from "../Store/AppstoreProvider";

const Project = () => {
  const { lightmode } = useContext(AppStore);
  const projectlists = [
    {
      id: 1,
      src: image0,
      code: "https://github.com/DEBASIS000123/Optimal-Network-Planner",
      demo: "https://github.com/DEBASIS000123/Optimal-Network-Planner",
      title: "Optimal Coverage Path",
      extraabout: "Published At (ICMIB-2025)",
      about:
        "It is a Machine learning algorithm to minimize the road cost at the cell tower regions by 60% and also covers all the cell towers without any human iteractions.",
    },
    {
      id: 2,
      src: image1,
      code: "https://github.com/DEBASIS000123/Luminex",
      demo: "https://github.com/DEBASIS000123/Luminex",
      title: "Luminex",
      about:
        "Luminex is a stylish contact management app built with Spring Boot and Tailwind CSS. Users can upload contacts, add photos, and store details securely in the cloud. With seamless GitHub and Google login options, Luminex offers an intuitive, responsive interface for managing profiles.",
    },
    {
      id: 3,
      src: image2,
      code: "https://github.com/DEBASIS000123/Restaurant-Review-predictor",
      demo: "https://github.com/DEBASIS000123/Restaurant-Review-predictor",
      title: "Restaurant Review Predictor",
      about:
        "The Restaurant Review Predictor is a machine learning project that classifies restaurant reviews as positive or negative. Using Natural Language Processing (NLP) techniques.",
    },
    {
      id: 4,
      src: image3,
      code: "https://github.com/DEBASIS000123/ChatBot",
      demo: "https://keen-salamander-5ea07e.netlify.app/",
      title: "AI ChatBot",
      about:
        "This chatbot project is built using React JS for the frontend and Google Gemini API for advanced natural language processing. It delivers human conversational experiences with a sleek, responsive UI and seamless real-time communication.",
    },
    {
      id: 5,
      src: image6,
      code: "https://github.com/DEBASIS000123/Memory-Matching-Game",
      demo: "https://app.netlify.com/sites/vermillion-macaron-04a34f/deploys/67a0fda140f90f1e0a91494a",
      title: "Memory Matching Game",
      about:
        "This is a simple memory matching game which is created by HTML,CSS,Javascript. Which provides an interface to the user to match the icons by pairs. It shows the no of moves and time taken to complete the match.",
    },
    {
      id: 6,
      src: image4,
      code: "https://github.com/DEBASIS000123/Lagunitas-",
      demo: "https://lagunitasbeer.netlify.app/",
      title: "Lagunitas Webpage",
      about:
        "This is a Lagunitas webpage using Html Css and Javascript. Is is modern stylish webpage for Desktop.There are Dynamic Effects are Added.Whether you're enjoying a cold pint at a backyard barbecue or sharing a few laughs with friends at a local pub.",
    },
  ];

  return (
    <div
      name="projects"
      className={`md:h-auto w-full  pt-32 pb-36 ${
        lightmode
          ? "bg-gradient-to-br from-cyan-100 to-purple-100"
          : "bg-gradient-to-b from-black to-gray-800  text-white"
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4">
        <div className="pb-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold inline ">
            My Recent<span className="text-Primary"> Works</span>
          </h1>
          <h3 className="py-2 text-center">
            Here are few projects I've worked on recently.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-0 mt-20">
          {projectlists.map((list) => (
            <div
              key={list.id}
              className="shadow-md hover:shadow-lg hover:shadow-Primary shadow-Primary rounded-lg p-4"
            >
              <div className="flex justify-center">
                <img
                  src={list.src}
                  alt="preview"
                  className="rounded-md duration-200 hover:scale-105 "
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold mt-4 text-center">
                  {list.title}
                </h1>

                <h2 className="text-3xl text-red-600 font-bold mt-4 text-center">
                  {list.extraabout}
                </h2>
                <p className=" mt-4 text-justify">{list.about}</p>
              </div>
              <div className="flex items-center justify-center mt-5">
                <a
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
                bg-fuchsia-400 hover:bg-cyan-500 text-white font-bold rounded  cursor-pointer  flex flex-row gap-1"
                  href={list.code}
                >
                  <IoLogoGithub size={22} /> Code
                </a>
                <a
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
               text-white font-bold rounded bg-fuchsia-400 hover:bg-cyan-500 cursor-pointer flex flex-row  gap-1"
                  href={list.demo}
                >
                  <FaDisplay className="pt-1" size={20} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
