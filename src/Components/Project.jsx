import React from 'react'
import ProjectCard from './ProjectCard'

function Projectss() {
    return (
        <>
        <div className='p-10 md:p-24 text-white' id='Projects'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='py-12 px-8 flex flex-wrap gap-5'>
                <ProjectCard
                title="Blogging Website" main="This is a blogging website in next js and some component liabrary" 
                />
                <ProjectCard
                title="E-Commerce" main="This is a e-commerce website in react js and some component liabrary" 
                />
                <ProjectCard
                title="Spotify Clone" main="This is a Spotify Clone in react js, node js and some component liabrary" 
                />
            </div>
        </div>
        </>
    )
}

export default Projectss
