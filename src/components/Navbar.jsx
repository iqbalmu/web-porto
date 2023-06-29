import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="bg-[#212529] h-20 max-w-full border-b mx-16 flex justify-between items-center sticky top-0 z-50 px-6">
      <h1>
        <Link to="hero" spy={true} smooth={true} duration={500} offset={-130}>
          <a href="">.IMDev</a>
        </Link>
      </h1>
      <ul className="flex text-sm">
        <li className="ml-5">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
          >
            <p className="cursor-pointer hover:text-zinc-400">.about()</p>
          </Link>
        </li>
        <li className="ml-5">
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
          >
            <p className="cursor-pointer hover:text-zinc-400">.project()</p>
          </Link>
        </li>
        <li className="ml-5">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
          >
            <p className="cursor-pointer hover:text-zinc-400">.contact()</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
