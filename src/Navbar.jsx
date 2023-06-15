import React from 'react';

export default function Navbar() {
    return (
        <header className="body-font bg-gray-700 text-gray-400 fixed top-0 z-10 w-screen">
            <div className="container mx-auto lg:flex block items-center">
                <nav className=" flex items-center justify-center sm:text-2xl text-sm md:ml-auto ">
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white">Home</a>
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white">About</a>
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white">Project</a>
                    <a className="md:mr-5 md:p-5 p-3 mx-auto hover:bg-red-500 hover:font-semibold hover:text-white">Contact</a>
                </nav>
            </div>
        </header>
    )
}