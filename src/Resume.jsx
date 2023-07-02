import React from 'react';
import resume from './assests/Ananyo Resume Final_new_react-1_page-0001.jpg'

function Resume(props) {
  return (
    <div className={`absolute top-0 container`}>
      <div className={`w-fit h-[calc(100vh-${props.height}px)] mx-auto`}>
        <embed src={resume} type="application/pdf" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Resume;
