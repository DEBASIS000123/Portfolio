import React, { useContext } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import image0 from "../assets/projects/image0.png";
import image1 from "../assets/projects/image1.png";
import image2 from "../assets/projects/image2.png";
import image3 from "../assets/projects/image3.png";
import image4 from "../assets/projects/image4.png";
import image5 from "../assets/projects/image5.png";
import { AppStore } from "../Store/AppstoreProvider";

const Project = () => {
  const { lightmode } = useContext(AppStore);
  const projectlists = [
    {
      id: 1,
      src: image0,
      link: "",
      title: "Currency Converter",
      about:
        "It is a webpage created by html,css,javascript using some apis. It will help to convert the real time value of one currency to another.you can convert the value of money.",
    },
    {
      id: 2,
      src: image1,
      link: "",
      title: "Bootstrap Webpage",
      about:
        "Its a Responsive webpage by using only bootstrap it will responsive for all type of devices like mobile phones, laptop ,tablet etc. we can easily create a responsive app using bootstrap.",
    },
    {
      id: 3,
      src: image2,
      link: "",
      title: "Amazon UI",
      about:
        "It is the Userinterface of Amazob it is made by html and css and javascript. In the point of Beginer level it is the basic and important thing to do. It will help you to Boost your confidence to make Webpages.",
    },
    {
      id: 4,
      src: image3,
      link: "",
      title: "Travel App",
      about:
        "This is a responsive webpage in which you can book your holiday packages and travels by easy. There are so many options are avalabe by the help of this web site you can easily book the packages.",
    },
    {
      id: 5,
      src: image4,
      link: "",
      title: "QR Code Generator",
      about:
        "It is a Qr code generator app Which will convert your text into Qr Code , it is made by html , css and JavaScript by using Some api. By help of this you can Secure and transfer your data anywhere in form of Qr code.",
    },
    {
      id: 6,
      src: image5,
      link: "",
      title: "Filter Products",
      about:
        "This is a webpage in which you can search your favoraite products by their name and price. It is made by Html,css And javascript and using some dummy apis. By writing the content in the search box then search you will get the filtered products.",
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
