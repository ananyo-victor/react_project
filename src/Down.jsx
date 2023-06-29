import React from 'react'
// import  { useState } from 'react'


function Down(props) {
    // const changeColor = () => {
    //     console.log("clicked");
    //     setBackgroundColor(backgroundColor === 'red'?'slate':'red');
    // }
    // const [backgroundColor, setBackgroundColor] = useState('red');
    const backgroundColor = 'red';
    return (
        <>
            <div className="w-screen fixed bottom-0 bg-opacity-75">
                <div className="hover:opacity-100 opacity-0 flex flex-col items-center" >
                    {/* onMouseEnter={changeColor} onMouseOut={changeColor} */}
                    <button className={`flex h-12 w-24 items-center justify-center rounded-tl-full rounded-tr-full bg-${backgroundColor}-700 pt-3 opacity-60`}>
                        <a href={`${props.name}`}>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 animate-bounce text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </a>
                    </button>
                    <div className={`h-10 w-full bg-gradient-to-b from-${backgroundColor}-700 to-transparent opacity-60`}></div>
                </div>
            </div>
        </>
    )
}

export default Down
