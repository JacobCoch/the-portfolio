import React, { useState } from 'react';

import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

import letterJ from '../../assets/letter-j.png';
import darkmodeLogo from '../../assets/darkmode.png';
import lightmodeLogo from '../../assets/lightmode.png';

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="mb-4">
        <img src={letterJ} alt="Logo" style={{ width: '50px' }} />
      </div>

      {/* Navigation Links */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-4xl'
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Media Links */}
      <div className="flex fixed flex-col top=[35%] left-0">
        <ul>
          <li>
            <a href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Dark Mode Switch */}
      {/* <button
        className="bg-gray-600 text-white p-2 rounded-md"
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? (
          <img src={lightmodeLogo} alt="Light Mode Logo" />
        ) : (
          <img src={darkmodeLogo} alt="Dark Mode Logo" />
        )}
      </button> */}
    </div>
  );
}
