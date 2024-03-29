import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GoGraph } from "react-icons/go";

const NavBar = () => {
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

      <ul className="hidden md:flex">
        {linkitem.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200  hover:text-Primary"
          >
            <Link to={link.Link} smooth duration={700}>
              {link.Link}
            </Link>
          </li>
        ))}
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
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200 flex gap-x-2  hover:text-Primary"
            >
              <Link
                onClick={() => setnav(!nav)}
                to={link.Link}
                smooth
                duration={700}
              >
                {link.Link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
