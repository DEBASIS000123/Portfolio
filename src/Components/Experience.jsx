import React from "react";
import html from "../assets/Experience/html.png";
import css from "../assets/Experience/css.png";
import js from "../assets/Experience/javascript.png";
import react from "../assets/Experience/react.png";
import bootstrap from "../assets/Experience/Bootstrap.png";
import tailwind from "../assets/Experience/tailwind.png";
import java from "../assets/Experience/java.png";
import python from "../assets/Experience/python.png";
import git from "../assets/Experience/Git.png";
import github from "../assets/Experience/github.png";
import mysql from "../assets/Experience/MySql.png";
import springboot from "../assets/Experience/SpringBoot.png";

const Experience = () => {
  const languages = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: " shadow-yellow-500",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: mysql,
      title: "My SQL",
      style: "shadow-cyan-400",
    },
    {
      id: 12,
      src: springboot,
      title: "SpringBoot",
      style: "shadow-green-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-auto pt-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold inline ">
            Professional <span className="text-Primary">Skillset</span>
          </h1>
          <h3 className="py-2">These are the technologies I've worked with</h3>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {languages.map((language) => (
            <div
              key={language.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${language.style}`}
            >
              <img
                src={language.src}
                alt={language.title}
                className="w-20 mx-auto"
              />
              <p className="mt-4">{language.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
