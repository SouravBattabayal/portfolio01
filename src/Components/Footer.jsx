import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'


function Footer() {
    return (
        <>
        <div id='Footer' className='flex justify-around bg-[#162358] text-white p-10 md:p-12 items-center'>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
                <h3 className='text-2xl md:text-sm font-normal'>Feel free to reach out</h3>
            </div>

            <ul className='text-sm md:text-xl'>
                <li className='flex gap-2 items-center'>
                    <MdOutlineEmail size={20} />
                    souravbattabayal@gmail.com
                </li>
                <li className='flex gap-2 items-center'>
                    <CiLinkedin />
                    <a href="https://linkedin.com/in/sourav-battabayal-b0243b239" target='main'>LinkedIn</a>
                </li>
                <li className='flex gap-2 items-center'>
                    <FaGithub />
                    github.com/SouravBattabayal
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer

