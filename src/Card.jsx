import React, { useEffect, useRef } from 'react';

function Card(props) {
    const svgRef = useRef(null);

    useEffect(() => {
        const move = () => {
            const sel = svgRef.current;
            const but = sel.parentNode.parentNode.parentNode;
            but.classList.toggle('h-fit');
            but.classList.toggle('h-48');
            sel.classList.toggle('rotate-180');
            sel.classList.toggle('origin-center');
        };

        const svg = svgRef.current;
        svg.addEventListener('click', move);

        return () => {
            svg.removeEventListener('click', move);
        };
    }, []);

    return (
        <div className="relative m-5 block h-48 max-w-sm rounded-lg border-2 sm:transition delay-150 hover:sm:scale-110 duration-200 sm:ease-in-out hover:sm:h-fit shadow hover:border-red-700 dark:border-gray-700">
            <div className='h-full w-full bg-gradient-to-b from-transparent to-slate-300 dark:to-slate-700'>
                <div className="overflow-hidden sm:h-full h-[calc(100%-1.75rem)] hover:sm:-translate-y-1 hover:sm:overflow-visible p-6">
                    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                    <p className="font-normal mb-5">{props.description}</p>
                    <a href={props.link} className="hover:text-red-700 hover:font-semibold">Github Link</a>
                </div>
                <button name="button" className="absolute z-10 w-7 h-7 sm:hidden dark:text-white text-gray-800 pl-1 bottom-2 right-2">
                    <svg ref={svgRef} className="w-5 h-5 text-gray-800 dark:text-white pt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Card;
