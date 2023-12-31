import React, { useState, useEffect } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

import snowboarder from "../../assets/snowboarder.svg";

import "../../App.css";

const Snowboarder = (
    <div className='snowboarder'>
        <img src={snowboarder} className='' alt='snowboarder' />
    </div>
);

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative'>
                <div>
                    {Snowboarder}
                    <h1 className='name-slide text-4xl sm:text-7xl font-bold text-[#ccd6f6] mr-20'>
                        Jacob Cochrane
                    </h1>
                </div>

                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]  mb-10 mr-20 '>
                    Software Developer.
                </h2>
                <p className='text-[#8892b0] text-xl py-4 max-w-[600px] flex justify-center mr-23'>
                    I have expertise in creating outstanding digital
                    experiences. Currently, my primary focus is on developing
                    responsive full-stack web applications.
                </p>
                <div className='redirect-buttons'>
                    <Link to='about' smooth duration={500}>
                        <button
                            type='button'
                            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
                        >
                            About Me
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                    <Link to='work' smooth duration={500} offset={-80}>
                        <button
                            type='button'
                            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
                        >
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
