import React from "react";

import { FaVuejs } from "react-icons/fa";

import Angular from "../../assets/angular.png";
import Aws from "../../assets/aws.png";
import Bootstrap from "../../assets/bootstrap.png";
import CSS from "../../assets/css.png";
import FireBase from "../../assets/firebase.png";
import Git from "../../assets/github.png";
import HTML from "../../assets/html.png";
import JavaScript from "../../assets/javascript.png";
import Jquery from "../../assets/jQuery.png";
import MongoDB from "../../assets/mongo.png";
import Node from "../../assets/node.png";
import postgreSQL from "../../assets/postgreSQL.png";
import Python from "../../assets/python.png";
import ReactLogo from "../../assets/react.png";
// import Express from '../../assets/express.png';
import Redux from "../../assets/redux.png";
import Tailwind from "../../assets/tailwind.png";
import Vue from "../../assets/vue.png";

function Skills() {
    return (
        <div name='skills' className='w-full h-auto bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div
                    data-aos='fade-down-left'
                    data-aos-duration='3000'
                    data-aos-once='true'
                >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                        Skills
                    </p>
                    <p className='py-4'>
                        // These are the technologies I&apos;ve worked with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={HTML}
                                alt='HTML icon'
                            />
                            <p className='my-4'>HTML</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={CSS}
                                alt='CSS icon'
                            />
                            <p className='my-4'>CSS</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={JavaScript}
                                alt='JavaScript icon'
                            />
                            <p className='my-4'>JAVASCRIPT</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://react.dev/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={ReactLogo}
                                alt='React icon'
                            />
                            <p className='my-4'>REACT</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://vuejs.org/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Vue}
                                alt='VUE icon'
                            />
                            <p className='my-4'>VUE</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://angular.io/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Angular}
                                alt='Angular icon'
                            />
                            <p className='my-4'>ANGULAR</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://www.python.org/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Python}
                                alt='Python icon'
                            />
                            <p className='my-4'>PYTHON</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://jquery.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Jquery}
                                alt='jQuery icon'
                            />
                            <p className='my-4'>JQUERY</p>
                        </a>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://tailwindcss.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Tailwind}
                                alt='Tailwind icon'
                            />
                            <p className='my-4'>TAILWIND</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://getbootstrap.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Bootstrap}
                                alt='Bootstrap icon'
                            />
                            <p className='my-4'>BOOTSTRAP</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://github.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Git}
                                alt='Git icon'
                            />
                            <p className='my-4'>GITHUB</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://nodejs.org/en'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Node}
                                alt='Node icon'
                            />
                            <p className='my-4'>NODE JS</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://redux.js.org/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Redux}
                                alt='Redux icon'
                            />
                            <p className='my-4'>REDUX</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://www.mongodb.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={MongoDB}
                                alt='MongoDB icon'
                            />
                            <p className='my-4'>MONGO DB</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://firebase.google.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={FireBase}
                                alt='Firebase icon'
                            />
                            <p className='my-4'>FIREBASE</p>
                        </a>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://aws.amazon.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={Aws}
                                alt='AWS icon'
                            />
                            <p className='my-4'>AWS</p>
                        </a>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a
                            href='https://www.postgresql.org/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='w-20 mx-auto'
                                src={postgreSQL}
                                alt='PostgreSQL icon'
                            />
                            <p className='my-4'>PostgreSQL</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
