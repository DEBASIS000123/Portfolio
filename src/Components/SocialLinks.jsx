import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/debasis-mishra-579bb226a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DEBASIS000123",
    },
    {
      id: 3,
      child: (
        <>
          Mail <IoIosMail size={30} />
        </>
      ),
      href: "mailto:debasismishra160@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600" +
              " " +
              link.style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};
export default SocialLinks;
