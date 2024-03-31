import React, { useContext } from "react";
import { AppStore } from "../Store/AppstoreProvider";

const Contact = () => {
  const { lightmode } = useContext(AppStore);

  return (
    <div
      name="contact"
      className={`w-full h-auto pt-44 ${
        lightmode
          ? "bg-gradient-to-br from-cyan-100 to-purple-100"
          : "bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      }`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold inline text-Primary">Contact Me</h1>
          <h3 className="py-2">
            Submit the form below to get in touch with me.
          </h3>
        </div>

        <div className=" flex justify-center items-center pt-14">
          <form
            action="https://getform.io/f/rbeqryyb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 bg-transparent border-2 rounded-md focus:outline-none ${
                lightmode
                  ? "text-black border-slate-400 hover:border-slate-800"
                  : " text-white"
              }`}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none ${
                lightmode
                  ? "text-black border-slate-400 hover:border-slate-800"
                  : " text-white"
              }`}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none ${
                lightmode
                  ? "text-black border-slate-400 hover:border-slate-800"
                  : " text-white"
              }`}
            ></textarea>

            <button
              className={` bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ${
                lightmode ? "text-black font-bold" : "text-white"
              }`}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
