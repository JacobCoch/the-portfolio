import React, { useState } from "react";

import { BsFillPersonLinesFill } from "react-icons/bs";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaMedium,
    FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

import letterJ from "../../assets/letterJ.png";

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={letterJ} alt='Logo' style={{ width: "50px" }} />
            </div>

            {/* Navigation Links */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Mobile Navigation Menu Icon */}
            <div
                onClick={handleClick}
                className='md:hidden z-10'
                onKeyDown={handleClick}
                role='button'
                tabIndex='0'
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {" "}
                    <Link
                        onClick={handleClick}
                        to='about'
                        smooth
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {" "}
                    <Link
                        onClick={handleClick}
                        to='skills'
                        smooth
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {" "}
                    <Link onClick={handleClick} to='work' smooth duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Social Media Links */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/jacob-cochrane-534a8122a/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/JarJarDinks'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FFf]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-500'
                            href='https://twitter.com/jarjardiinks'
                            target='_blank'
                            rel='noreferrer'
                        >
                            X <FaTwitter size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FFC017]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-500'
                            href='https://medium.com/@cochranejacob22'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Medium <FaMedium size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:cochranejacob22@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
