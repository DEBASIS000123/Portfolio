import React from "react";
import dmimg from "../assets/DebasisMishra.png";
const About = () => {
  return (
    <div
      name="about"
      className="pt-72 md:pt-32 w-full h-auto bg-gradient-to-b from-gray-800 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-28">
        <div className="pb-8 flex flex-col items-center">
          <h1 className="text-5xl font-bold inline ">
            <span className="text-Primary">About</span>
          </h1>
        </div>

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className=" flex flex-col justify-center items-center h-auto md:items-start md:w-2/3">
            <p className="text-sm md:text-lg mt-10">
              As a highly motivated individual with a passion for developing
              technologies with global impact, my objective is to secure a
              Software Engineering position within a dynamic organization. I am
              seeking an opportunity where I can apply my skills and
              capabilities to contribute to the planning, development, and
              implementation of innovative applications. Through hands-on
              experience, continuous learning, and collaboration with senior
              business leaders, I aim to enhance my expertise in next-generation
              technologies such as big data, cybersecurity, DevOps, cloud
              computing, and continuous integration and deployment.
            </p>
            <br />
            <p className="text-sm md:text-lg ">
              By leveraging my knowledge and skills, I am dedicated to making a
              meaningful difference for customers and helping to build
              technology platforms that will have a significant impact on a wide
              range of users, including households, corporate clients,
              institutional organizations, and government entities.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              className="rounded-2xl md:mx-4 lg:mx-14 xl:mx-24 w-auto h-auto md:h-80 md:w-auto mt-12
              shadow-lg shadow-Primary "
              src={dmimg}
              alt="dmimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
