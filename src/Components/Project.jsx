import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";

const Project = () => {
  const projectlists = [
    {
      id: 1,
      src: "",
      link: "",
      title: "Chat App",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 2,
      src: "",
      link: "",
      title: "responsive App",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 3,
      src: "",
      link: "",
      title: "video App",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 4,
      src: "",
      link: "",
      title: "Qrcode App",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 5,
      src: "",
      link: "",
      title: "timer App",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
  ];

  return (
    <div
      name="project"
      className=" md:h-auto w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-white">
        <div className="pb-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold inline ">
            My Recent<span className="text-Primary"> Works</span>
          </h1>
          <h3 className="py-2">
            Here are few projects I've worked on recently.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-20">
          {projectlists.map((list) => (
            <div
              key={list.id}
              className="shadow-md hover:shadow-lg hover:shadow-Primary shadow-Primary rounded-lg p-4"
            >
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU"
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 "
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold mt-4 text-center">
                  {list.title}
                </h1>
                <p className=" mt-4 text-justify">{list.about}</p>
              </div>
              <div className="flex items-center justify-center mt-5">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
                bg-fuchsia-400 hover:bg-cyan-500 text-white font-bold rounded  cursor-pointer  flex flex-row gap-1"
                >
                  <IoLogoGithub size={22} /> Code
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
               text-white font-bold rounded bg-fuchsia-400 hover:bg-cyan-500 cursor-pointer flex flex-row  gap-1"
                >
                  <FaDisplay className="pt-1" size={20} /> Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
