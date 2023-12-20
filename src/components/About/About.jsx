import React from "react";

function About() {
    return (
        <div
            name='about'
            className='w-full h-screen bg-[#0a192f] text-gray-300'
        >
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div />
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi. I&apos;m Jacob Cochrane, nice to meet you.
                            Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p>
                            I&apos;m a passionate software developer based in
                            Arizona. I build web apps that are both visually
                            stunning and user-friendly. I&apos;m committed to
                            delivering high-quality solutions that exceed
                            expectations, with a focus on innovation and problem
                            solving. I&apos;m dedicated to helping businesses
                            and individuals achieve their digital goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;