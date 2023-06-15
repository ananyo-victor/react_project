import React from 'react'
import Skill from './Skill'

const arr = [
    {skill:'C', percentage:75},
    {skill:'C++', percentage:80},
    {skill:'Java', percentage:60},
    {skill:'HTML', percentage:85},
    {skill:'CSS', percentage:85},
    {skill:'JavaScript', percentage:70},
    {skill:'React.js', percentage:50},
];

const alpha = arr.map((obj)=>{;
return <Skill skill={obj.skill} percentage={obj.percentage} />});

export default function About() {
return(
 <>
 <section className="body-font bg-gray-900 text-gray-400">
  <div className="container h-screen mx-auto flex flex-col justify-evenly px-5 pt-24">
    <div className="flex w-full flex-col text-center justify-evenly my-auto">
      <h1 className="title-font text-xl font-medium text-white sm:text-6xl my-auto font-mono">About</h1>
      <p className="text-justify text-xl font-medium text-gray-100 my-auto h-auto">I'm a frontend web developer passionate about creating beautiful and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I enjoy transforming design concepts into functional code. I stay updated with the latest frontend technologies to deliver seamless user experiences. Explore my portfolio to see my work and feel free to reach out for collaboration opportunities. Let's bring your ideas to life!</p>
    </div>
    <div className="my-auto bg-slate-500">
      <p className="text-5xl font-semibold font-mono text-white">Skill</p>
      <div className="my-5" id='Skill'>
        {alpha}
      </div>
    </div>
  </div>
</section>
 </>   
)
}