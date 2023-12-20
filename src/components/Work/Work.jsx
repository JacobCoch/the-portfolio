import React, { useState } from "react";

import data from "../../data/data";
import "../../App.css";

function Work() {
    const [modal, setModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModal(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModal(false);
    };

    // projects file
    const project = data;
    // setProject(data);

    return (
        <div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '
                        >
                            {/* Hover effect for images */}
                            <div className='opacity-0 group-hover:opacity-100 '>
                                <span className='text-2xl font bold text-white tracking-wider '>
                                    {item.name}
                                </span>
                                <div className='pt-8 text-center '>
                                    <a
                                        href={item.github}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <button
                                            type='button'
                                            className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'
                                        >
                                            Code
                                        </button>
                                    </a>

                                    <a
                                        href={item.live}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <button
                                            type='button'
                                            className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'
                                        >
                                            Live
                                        </button>
                                    </a>

                                    {item.id === 1 && (
                                        <button
                                            type='button'
                                            onClick={() => openModal(item)}
                                            className='case-study-btn text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'
                                        >
                                            Case Study
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modal && selectedProject && (
                <div className='modal'>
                    <div className='overlay' onClick={closeModal} />

                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>
                            &times;
                        </span>
                        <h1>Case Study</h1>
                        <div className='start-section'>
                            <div className='start-section__left'>
                                <h2>Overview</h2>
                                <p>
                                    This project was initiated to develop a
                                    responsive movie application, leveraging
                                    Angular for the client-side and an existing
                                    REST API for the server-side. The objective
                                    was to offer movie enthusiasts an immersive
                                    platform to explore details about movies,
                                    directores, actors, genres, and more.
                                </p>
                            </div>
                            <div className='start-section__right'>
                                <h2>Purpose</h2>
                                <p>
                                    I was the sole developer on this project. I
                                    was responsible for the design, development,
                                    and deployment of the application.
                                </p>
                            </div>
                            <div className='start-section__left'>
                                <div className='start-section__left__image'>
                                    <img src={selectedProject.mobile} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
