import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
//import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex  justify-between items-center text-white px-10 pt-6 md:px-20">
      <span className="text-2xl font-bold tracking-wide ">Poresh Chakma</span>

      <ul
        className={`${ 
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold text-xl md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Home
          </li>
        </a>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
        onClick={()=>{setShowmenu(!showMenu),openMenu(false)}}
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;