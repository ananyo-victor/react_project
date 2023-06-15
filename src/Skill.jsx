import React from 'react'


export default function Skill(prop) {
    return (
        <div className="flex my-2">
            <p className="flex w-2/12 items-center text-2xl text-white font-medium justify-end px-10">{prop.skill}</p>
            <div className="flex h-10 w-8/12 items-center"><div className={`h-5 w-[${prop.percentage}%] bg-gradient-to-r from-gray-800 to-violet-800 rounded `}></div></div>
        </div>
    )
}