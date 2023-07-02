import React, { useState } from 'react';
import profile_picture from "./assests/profile_picture.jpg";
import Resume from './Resume';
import resumePdf from './assests/Ananyo Resume Final_new_react-1_page-0001.jpg'; // Path to the PDF file

export default function Intro(props) {
  const hei = 2 * props.height;
  const [showResume, setShowResume] = useState(false);

  const op = () => {
    setShowResume(!showResume);
    // Download PDF
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Ananyo_Resume.pdf'; // Set the desired filename for the downloaded PDF
    link.click();
  };

  const closeResume = () => {
    setShowResume(false);
  };
  return (
    <>
      <section id='intro' className={`body-font relative top-[${props.height}px] sm:snap-start scroll-mt-[${props.height}px] dark:bg-gray-900 bg-gray-200 dark:text-gray-200 text-gray-800`}>
        <div className={`container mx-auto h-[calc(100vh-${props.height}px)] h-[calc(100vh-${hei}px)] flex flex-col-reverse md:flex-row justify-between px-5`}>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center h-full">
            <div className=''>
              <p className="title-font lg:text-7xl text-4xl font-semibold dark:text-white text-gray-800">Hi,</p>
              <p className="title-font lg:text-4xl text-2xl font-semibold dark:text-white text-gray-800">I am <span className='text-red-500 text-4xl lg:text-7xl'>Ananyo Maitra</span></p>
            </div>
            <div className="flex mt-5">
              <button className="sm:text-2xl m-5 flex items-center rounded border-2 border-red-600 px-6 py-2 dark:text-white text-gray-800 hover:bg-red-600 focus:outline-none" onClick={op}>Download CV</button>
              <a className="sm:text-2xl m-5 flex items-center rounded border-2 border-red-600 bg-red-600 px-6 py-2 dark:text-white hover:text-gray-800 text-gray-200 hover:bg-transparent focus:outline-none" href='#project'>Projects</a>
            </div>
          </div>
          <div className='px-5 lg:w-1/2 flex justify-center items-center pt-5 sm:pt-0'>
            <img alt="ecommerce" className="sm:w-[600px] rounded-xl sm:h-[600px] sm:px-24 py-10" src={profile_picture} />
          </div>
        </div>
        {showResume && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen dark:bg-transparent cursor-pointer" onClick={closeResume}></div>
        )}
        {showResume && <Resume height={props.height} />}
      </section>

    </>
  )
}