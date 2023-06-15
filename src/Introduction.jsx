import React from 'react';
import profile_picture from "./assests/profile_picture.jpg";

export default function Intro() {
  return (
    <>
      <section className="body-font overflow-hidden bg-gray-900 text-gray-400">
        <div className="h-screen container mx-auto flex flex-col-reverse md:flex-row justify-between px-5 sm:pt-10">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center   h-full">
            <div className=''>
              <p className="mt-3 title-font lg:text-7xl text-4xl font-semibold text-white">Hi,</p>
              <p className="mt-3 title-font lg:text-4xl text-2xl font-semibold text-white">I am <span className='text-red-500 text-4xl lg:text-7xl'>Ananyo Maitra</span></p>
            </div>
            {/* <p className="mt-3 title-font sm:text-xl text-xs text-justify font-semibold text-white">I'm a frontend web developer passionate about creating beautiful and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I enjoy transforming design concepts into functional code. I stay updated with the latest frontend technologies to deliver seamless user experiences. Explore my portfolio to see my work and feel free to reach out for collaboration opportunities. Let's bring your ideas to life!</p> */}
            <div className="flex  mt-5">
              <button className="sm:text-2xl m-5 flex items-center rounded border-2 border-red-600 px-6 py-2 text-white hover:bg-red-600 focus:outline-none">Download CV</button>
              <button className="sm:text-2xl m-5 flex items-center rounded border-2 border-red-600 bg-red-600 px-6 py-2 text-white hover:bg-transparent focus:outline-none">Projects</button>
            </div>
          </div>
          <div className='px-5 lg:w-1/2 flex justify-center items-center pt-10 sm:pt-0'>
            <img alt="ecommerce" className="sm:w-[650px] rounded-xl sm:h-[650px] sm:px-24 py-10" src={profile_picture} />
          </div>
        </div>
      </section>
    </>
  )
}