import React from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

    // const screenHeight = window.innerHeight;

    // function scrollT (n) {
    //     const screenH = n*screenHeight;
    //     window.scrollTo({
    //         top: screenH,
    //       behavior: "smooth",
    //       block: "start",
    //       inline: "nearest",
    //     })
    //   };
    return (
        <header className="body-font dark:bg-gray-900 bg-gray-200 dark:text-gray-100 text-gray-800 fixed top-0 z-20 w-screen">
            <div className={`container mx-auto flex items-center h-[${props.height}px]`}>
                <nav className="sm:text-2xl flex justify-evenly sm:w-fit w-full text-sm sm:ml-auto">
                    <a className="relative inline-flex items-center justify-center md:mr-5 p-0.5 mx-auto rounded-lg group bg-gradient-to-br from-red-500 to-red-700 hover:text-white" href="#intro" ><span className='relative transition-all ease-in duration-75 dark:bg-gray-900 bg-gray-200 rounded-md group-hover:bg-opacity-0 md:px-5 p-2'> Home</span></a>
                    <a className="relative inline-flex items-center justify-center md:mr-5 p-0.5 mx-auto rounded-lg group bg-gradient-to-br from-red-500 to-red-700 hover:text-white" href="#about" ><span className='relative transition-all ease-in duration-75 dark:bg-gray-900 bg-gray-200 rounded-md group-hover:bg-opacity-0 md:px-5 p-2'> About</span></a>
                    <a className="relative inline-flex items-center justify-center md:mr-5 p-0.5 mx-auto rounded-lg group bg-gradient-to-br from-red-500 to-red-700 hover:text-white" href="#project" ><span className='relative transition-all ease-in duration-75 dark:bg-gray-900 bg-gray-200 rounded-md group-hover:bg-opacity-0 md:px-5 p-2'> Projects</span></a>
                    <a className="relative inline-flex items-center justify-center md:mr-5 p-0.5 mx-auto rounded-lg group bg-gradient-to-br from-red-500 to-red-700 hover:text-white" href="#contact" ><span className='relative transition-all ease-in duration-75 dark:bg-gray-900 bg-gray-200 rounded-md group-hover:bg-opacity-0 md:px-5 p-2'> Contact</span></a>
                    
                </nav>
            </div>
        </header>
    )
}