import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex gap-10 justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
         pchakma952@gmail.com
        </li>
        {/* <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/username
        </li> */}
        <li className="flex gap-1 items-center">
          <FaPhone />
         01893095824
        </li>
      </ul>
    </div>
  );
};

export default Footer;