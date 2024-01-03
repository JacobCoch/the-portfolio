import React, { useState } from "react";

import eslintImage from "../../assets/projects/modals/eslint-modal.png";
import homeView from "../../assets/projects/modals/homeview-modal.png";
import loginView from "../../assets/projects/modals/login-modal.png";
import moviesView from "../../assets/projects/modals/movieview-modal.png";
import similarMovies from "../../assets/projects/modals/similarmovies-modal.png";
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
        <div
            name='work'
            className='w-full min-h-screen text-gray-300 bg-[#0a192f]'
        >
            <div className='max-w-[1000px] mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full'>
                <div
                    data-aos='fade-down-left'
                    data-aos-duration='3000'
                    data-aos-once='true'
                >
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>
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
              flex justify-center text-center items-center mx-auto content-div'
                        >
                            {/* Hover effect for images */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <h2 className='text-2xl font-bold text-white mb-2'>
                                    {item.name}
                                </h2>
                                <p className='text-sm text-gray-300 pr-1 pl-1'>
                                    {item.details}
                                </p>

                                <div className='pt-8 text-center '>
                                    <a
                                        href={item.github}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <button
                                            type='button'
                                            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
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
                                            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
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
                        <h1 className='border-b-2 border-pink-600 '>
                            myFlix Case Study
                        </h1>
                        <span className='three-min'>3 min read</span>
                        <div className='start-section'>
                            <a
                                href='https://themovieflicks.netlify.app/'
                                target='_blank'
                                rel='noreferrer'
                                className='live-link'
                            >
                                Live Site
                            </a>
                            <div className='overview-section'>
                                <h2>Overview</h2>
                                <p>
                                    Crafted within the MERN stack, this project
                                    introduces a responsive movie application,
                                    providing movie enthusiasts with an
                                    immersive platform to explore details about
                                    movies, directores, actors, genres, and
                                    more.
                                </p>
                            </div>

                            <div className='purpose-section'>
                                <h2>Purpose</h2>
                                <p>
                                    This project, part of my web development
                                    studies, is to showcase my skills in
                                    full-stack JavaScript development, covering
                                    both front-end and back-end aspects.
                                </p>
                            </div>
                            <div className='objective-section'>
                                <h2>Objective</h2>
                                <p>
                                    The project&apos;s goal was to develop a
                                    comprhensive server-side and client-side web
                                    application from the ground up, with the
                                    intention of presenting the finished product
                                    in a professional portfolio.
                                </p>
                            </div>
                        </div>
                        <div className='credits-section'>
                            <div className='credits'>
                                <h3>Credits</h3>
                                <div className='credits-left'>
                                    <ul>
                                        <li>Developer: Jacob Cochrane</li>
                                        <li>Mentors: Elliot Himmelfarb</li>
                                        <li>
                                            Tutors: Aram Hammoudeh, Chance
                                            Cochrane
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='tools'>
                                <h3>Tools</h3>
                                <div className='tools-right'>
                                    <div>
                                        <li>MERN Stack</li>
                                        <li>React Bootstrap</li>
                                        <li>Postman</li>
                                    </div>
                                    <div>
                                        <li>Axios</li>
                                        <li>Heroku</li>
                                        <li>Redux</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='server-side-section'>
                            <div className='server-side-top'>
                                <a
                                    href='https://github.com/JarJarDinks/myFlix-API'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button
                                        type='button'
                                        className='api-button text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-700 font-bold text-lg'
                                    >
                                        Github
                                    </button>
                                </a>
                                <img src={similarMovies} alt='similar movies' />
                                <h2>Server-side</h2>

                                <p>
                                    Using Node.js and Express, I created a
                                    RESTful API interfacing with a
                                    non-relational MongoDB database. This API,
                                    accessible through widely adopted HTTP
                                    methods such as GET or POST, employs CRUD
                                    operations for seamless data retrieval and
                                    storage. The outcome is a JSON-formatted
                                    presentation of movie details.
                                </p>
                            </div>
                            <div className='server-side-bottom'>
                                <div className='card'>
                                    <div className='basics'>
                                        <h2>Basics</h2>
                                        <p>
                                            To kick off the server-side
                                            development, I covered the basics,
                                            established business logic for
                                            consistent data formatting, and
                                            chose Heroku for deployment.
                                            Security measures, uncluding CORS,
                                            password hashing, and JWT
                                            authentication, further enhanced the
                                            API&apos;s functionality.
                                        </p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='database-schema'>
                                        <h2>Database</h2>
                                        <p>
                                            Choosing between relational and
                                            non-relational databases, I tested
                                            PostGreSQL and MongoDB. Opting for
                                            mongoDB due to its flexibility, I
                                            then used Mongoose to create
                                            structured models for seamless
                                            interaction.
                                        </p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='authentication'>
                                        <h2>Authentication</h2>
                                        <p>
                                            Ensuring site security involved a
                                            basic HTTP login paired with JWT
                                            token-based authorization. This
                                            approach enhanced overall
                                            protection, addressing potential
                                            vulnerabilities.
                                        </p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='deployment'>
                                        <h2>Deployment</h2>
                                        <p>
                                            After testing with Postman, the app
                                            was deployed on Heroku, with MongoDB
                                            Atlas hosting the database. This
                                            process ensures a secure, reliable,
                                            and scalable application.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='client-side-section'>
                            <div className='client-side-top'>
                                <h2>Client-side</h2>

                                <p>
                                    Utilizing React and Redux, I developed a
                                    responsive front-end application that
                                    interacts with the server-side REST API.
                                    This client-side application, built with a
                                    single-page architecture, offers users a
                                    user-friendly interface for effortless
                                    browsing and exploration of movie details.
                                </p>
                                <a
                                    href='https://github.com/JarJarDinks/myFlix-client'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button
                                        type='button'
                                        className='client-button text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-700 font-bold text-lg'
                                    >
                                        Github
                                    </button>
                                </a>
                            </div>
                            <div className='client-side-left'>
                                <div className='architecture-component'>
                                    <div className='architecture'>
                                        <h2>Architecture</h2>
                                        <p>
                                            The project aimed to implement MVC
                                            architecture, choosing React for its
                                            speed and maintainability. This
                                            decision structured the application,
                                            enhancing scalability and
                                            simplifying maintenance.
                                        </p>
                                    </div>
                                    <div className='loginview-image'>
                                        <img src={loginView} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='client-side-right'>
                                <div className='code-quality-component'>
                                    <div className='code-quality'>
                                        <h2>Code Quality</h2>
                                        <p>
                                            During client-side development, I
                                            prioritized code quality by
                                            integrating ESLint. This robust tool
                                            detected errors early, ensuring a
                                            standardized and consistent
                                            codebase, and significantly
                                            contributed to maintaining
                                            high-quality code and best practices
                                            in the React ecosystem.
                                        </p>
                                    </div>
                                    <div className='eslint-image'>
                                        <img src={eslintImage} alt='eslint' />
                                    </div>
                                </div>
                                <div className='final-product-component'>
                                    <div className='final-product'>
                                        <h2>Final Product</h2>
                                        <p>
                                            With Parcel for efficiency, React
                                            Bootstrap for a sleek UI, and ESLint
                                            for clean code,the project ensured
                                            smooth processes, an attractive
                                            design, and a uniform codebase.
                                        </p>
                                        <div className='final-product-images'>
                                            <img
                                                src={homeView}
                                                alt='home view'
                                            />

                                            <img
                                                src={moviesView}
                                                alt='movies view'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='retrospective'>
                            <h2>Retrospective</h2>
                            <div>
                                <h3>What went well?</h3>
                                <p>
                                    I found myself very intrigued with the
                                    back-end process of creating the API.
                                    Especially with the database, I enjoyed
                                    working with MongoDB and Mongoose to
                                    structure the data for the API.
                                </p>
                            </div>
                            <div>
                                <h3>What didn&apos;t go well?</h3>
                                <p>
                                    Implementing ESlint later into the project
                                    posed a challenge during development,
                                    actually leading to a complete restart of
                                    the client-side application. However, this
                                    process was a valuable learning experience,
                                    and the final product was significantly
                                    improved because of it.
                                </p>
                            </div>
                            <div>
                                <h3>Final Thoughts</h3>
                                <p>
                                    Overall, I am very pleased with the final
                                    product. I believe the application is
                                    intuitive and user-friendly, and I am
                                    excited to continue to improve it in the
                                    future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
