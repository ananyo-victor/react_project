import React from 'react'
import Card from './Card';
// import Down from './Down';


const arr = [
    { name: 'Portfolio Website', description: 'It is just a prototype of my portfolio website, which i have created with react, as i was learning react and also i was lacking on projects, So i created this portfolio website to practice on react and also to showcase all my other works. I have just created the frontend of the website with React.js and tailwind', link: 'https://github.com/ananyo-victor/react_project.git' },
    { name: 'Drop-service Website', description: `It is a design of a drop-service commercial website. It is in it's developing Stage. Later i will be adding the backend to make it a full fledged website for my friend`, link: 'https://github.com/ananyo-victor/drop_service_website.git' },
    { name: 'Resume maker Website', description: `it is a resume maker website, where user can make there resume by log-in into the website. It is a free website, but it has rich user experience and also easy to use. User will get multiple choices for templates also. In the end user can download the resume.`, link: 'https://github.com/ananyo-victor/resume_maker_-website.git' },
    { name: 'Job Searching Website', description: 'It is a job serching website design. Here user can select their prefereces and will get best results from which they can select their ideal job and apply.', link: 'https://github.com/ananyo-victor/Job_searching_website.git' },
    { name: 'Student Management System Application', description: 'It is an application to store the data of the student of the school or college in a proper manner. It provides a clear and simplified view of the list of the students addmited in the school, in each class, in each section. I have created this application using JAVA and MySQL', link: 'https://github.com/ananyo-victor/Student-Management-System---Java-SQL.git' },
    // { name: 'Portfolio Website', description: 'It is just a prototype of my portfolio website, which i have created with react, as i was learning react and also i was lacking on projects, So i created this portfolio website to practice on react and also to showcase all my other works. I have just created the frontend of the website with React.js and tailwind', link: 'https://github.com/ananyo-victor/react_project.git' },
]
const alpha = arr.map((obj) => {
    return <Card name={obj.name} description={obj.description} link={obj.link} />
});
function Project(props) {
    return (
        <>
            <section id='project' className={`body-font relative top-[${props.height}px] sm:snap-start scroll-mt-[${props.height}px] dark:bg-gray-900 bg-gray-200 dark:text-gray-200 text-gray-600`}>
                <div className={`container sm:h-[calc(100vh-${props.height}px)] h-fit flex flex-col justify-evenly mx-auto px-5`}>
                    <div className="flex w-full flex-col text-center justify-evenly h-full">
                        <p className="title-font text-4xl font-medium sm:text-6xl font-mono">Projects</p>
                    </div>
                    <div className="mx-auto flex flex-wrap items-center justify-center px-5">
                        {alpha}
                    </div>
                </div>
            </section>
            {/* <Down name={'#contact'} /> */}
        </>
    )
}

export default Project
