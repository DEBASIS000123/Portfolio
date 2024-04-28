import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import style from "./NavBar.module.css";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { AppStore } from "../../Store/AppstoreProvider";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { lightmode, setlightmode } = useContext(AppStore);
  const [nav, setnav] = useState(false);

  const linkitem = [
    {
      id: 1,
      Link: "home",
      icon: <IoHomeOutline />,
    },
    {
      id: 2,
      Link: "about",
      icon: <FaRegUser />,
    },
    {
      id: 3,
      Link: "projects",
      icon: <GoGraph />,
    },
    {
      id: 4,
      Link: "experience",
      icon: <MdOutlineComputer />,
    },
    {
      id: 5,
      Link: "contact",
      icon: <FiPhone />,
    },
  ];

  return (
    <div className="w-full h-16 px-4 bg-navbg items-center flex justify-between fixed">
      <div>
        <h1 className="text-6xl ml-2 text-sky-400 font-bold font-signature">
          D.M.
        </h1>
      </div>

      <ul className="hidden md:flex items-center ">
        {linkitem.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200  hover:text-Primary"
          >
            <NavLink
              to={`/${link.Link}`}
              smooth
              duration={700}
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"}`
              }
            >
              {link.Link}
            </NavLink>
          </li>
        ))}
        <li className="ml-10">
          <label className={style["switch"]}>
            <span className={style["moon"]}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span className={style["sun"]}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <g fill="#FFE484">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </g>
              </svg>
            </span>
            <input
              type="checkbox"
              className={style["input"]}
              onClick={() => setlightmode(!lightmode)}
            />
            <span className={style["slider"]}></span>
          </label>
        </li>
      </ul>
      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-Primary md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white md:hidden ">
          {linkitem.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200 flex gap-x-2  hover:text-Primary"
            >
              <NavLink
                to={`/${link.Link}`}
                smooth
                duration={700}
                className={({ isActive }) =>
                  `${isActive ? "text-Primary" : "text-white"}`
                }
              >
                {link.Link}
              </NavLink>
            </li>
          ))}
          <li className="mt-10 pb-10">
            <label className={style["switch"]}>
              <span className={style["moon"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className={style["sun"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <g fill="#FFE484">
                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                  </g>
                </svg>
              </span>
              <input
                type="checkbox"
                className={style["input"]}
                onClick={() => setlightmode(!lightmode)}
              />
              <span className={style["slider"]}></span>
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
