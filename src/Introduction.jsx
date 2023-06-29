import React from 'react';
import profile_picture from "./assests/profile_picture.jpg";
// import Down from './Down';

export default function Intro(props) {
  console.log(window.innerHeight);
  const hei = 2* props.height;
  return (
    <>
      <section id='intro' className={`body-font relative top-[${props.height}px] sm:snap-start scroll-mt-[${props.height}px] bg-red-900 text-gray-400`}>
        <div className={`container mx-auto h-[calc(100vh-${props.height}px)] h-[calc(100vh-${hei}px)] flex flex-col-reverse md:flex-row justify-between px-5`}>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center h-full">
            <div className=''>
              <p className="title-font lg:text-7xl text-4xl font-semibold text-white">Hi,</p>
              <p className="title-font lg:text-4xl text-2xl font-semibold text-white">I am <span className='text-red-500 text-4xl lg:text-7xl'>Ananyo Maitra</span></p>
            </div>
            <div className="flex mt-5">
              <button className="sm:text-2xl m-5 flex items-center rounded border-2 border-red-600 px-6 py-2 text-white hover:bg-red-600 focus:outline-none">Download CV</button>
              <button className="sm:text-2xl m-5 flex items-center rounded border-2 border-red-600 bg-red-600 px-6 py-2 text-white hover:bg-transparent focus:outline-none">Projects</button>
            </div>
          </div>
          <div className='px-5 lg:w-1/2 flex justify-center items-center pt-5 sm:pt-0'>
            <img alt="ecommerce" className="sm:w-[600px] rounded-xl sm:h-[600px] sm:px-24 py-10" src={profile_picture} />
          </div>
        </div>
      </section>
      {/* <Down name={'#about'} /> */}
    </>
  )
}