import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItem = [
    <>
      <li>
        <Link to="info" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          PROJECTS
        </Link>
      </li>
      <li>
        <Link to="skill" spy={true} smooth={true} offset={50} duration={500}>
          Skill
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          CONTACT ME
        </Link>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>,
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-secondary text-3xl normal-case font-bold ml-10"
        >
          SHARIF
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end mr-8">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          href="https://drive.google.com/file/d/1ux2zmyZOVEbcqBr1umohjz1c6e5cOVN2/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
