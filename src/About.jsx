import React from 'react'
import Skill from './Skill'
// import Down from './Down';


const arr = [
  { skill: 'C', percentage: 75 },
  { skill: 'C++', percentage: 80 },
  { skill: 'Java', percentage: 60 },
  { skill: 'HTML', percentage: 85 },
  { skill: 'CSS', percentage: 85 },
  { skill: 'JavaScript', percentage: 70 },
  { skill: 'React.js', percentage: 70 },
];

const alpha = arr.map((obj) => {
  return <Skill skill={obj.skill} percentage={obj.percentage} />
});

export default function About(props) {
  const hei = 2* props.height;
  return (
    <>
<section id='about' className={`body-font relative top-[${props.height}px] sm:snap-start scroll-mt-[${props.height}px] dark:bg-gray-900 bg-gray-200 dark:text-gray-300  text-gray-800`}>
        <div className={`container mx-auto sm:h-[calc(100vh-${props.height}px)] h-[calc(100vh-${hei}px)] flex flex-col justify-evenly sm:px-10 px-5 sm:pt-10`}>
          <div className="flex w-full flex-col text-center justify-evenly sm:h-full h-full">
            <p className="title-font text-4xl font-medium sm:text-6xl font-mono">About</p>
            <p className="text-justify sm:text-xl text-sm font-medium h-fit">I'm a frontend web developer passionate about creating beautiful and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I enjoy transforming design concepts into functional code. I stay updated with the latest frontend technologies to deliver seamless user experiences. Explore my portfolio to see my work and feel free to reach out for collaboration opportunities. Let's bring your ideas to life!</p>
          </div>
          <div className="sm:my-auto">
            <p className="sm:text-5xl text-4xl font-semibold font-mono ">Skill</p>
            <div className="my-5" id='Skill'>
              {alpha}
            </div>
          </div>
        </div>
      </section>
      {/* <Down name={'#project'} /> */}
    </>
  )
}