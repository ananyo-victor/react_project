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
        <header className="body-font bg-gray-700 text-gray-400 fixed top-0 z-10 w-screen">
            <div className={`container mx-auto lg:flex block items-center h-[${props.height}px]`}>
                <nav className=" flex items-center justify-center sm:text-2xl text-sm md:ml-auto">
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white" href="#intro" >Home</a>
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white" href="#about" >About</a>
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white" href="#project" >Project</a>
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white" href="#contact" >Contact</a>
                </nav>
            </div>
        </header>
    )
}