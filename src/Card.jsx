import React from 'react';

function Card(props) {
    const move = (event) => {
        const parent1 = event.target.parentNode;
        parent1.classList.toggle('h-fit');
        parent1.classList.toggle('h-48');
        const parent2 = event.target.childNodes[0];
        parent2.classList.toggle('rotate-180');
        parent2.classList.toggle('origin-center');
    };

    return (
        <div className="relative m-5 block h-48 max-w-sm rounded-lg border-2sm:transition delay-150 hover:sm:scale-110 duration-200 sm:ease-in-out hover:sm:h-fit bg-slate-100 shadow hover:border-red-700 dark:border-gray-700 dark:bg-gray-800">
            <div className="overflow-hidden sm:h-full h-[calc(100%-1.75rem)]  hover:sm:-translate-y-1 hover:sm:overflow-visible p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">{props.description}</p> */}
                <a href={props.link} className="hover:text-red-700 hover:font-semibold">Github Link</a>
            </div>
            <button className="absolute z-10 w-7 h-7 sm:hidden dark:text-white text-gray-800 pl-1 bottom-2 right-2 bg-slate-600" onClick={move}>
                <svg className="w-5 h-5 text-gray-800 dark:text-white bg-white pt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </button>

        </div>
    );
}

export default Card;