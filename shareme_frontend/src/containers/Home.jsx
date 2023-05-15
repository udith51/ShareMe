import React, { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Sidebar, UserProfile } from '../components/index'
import { client } from '../client'
import logo from '../assets/logo.png'
import Pins from './Pins'
import { Link } from 'react-router-dom'

export default function Home() {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const userInfo = localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) : JSON.parse(localStorage.clear());
    useEffect(() => { }, []);



    return (
        <div className='flex bg-gray-50  flex-col md:flex-row h-screen transition-shadow duration-75 ease-out'>
            <div className="hidden md:flex h-screen flex-initial">
                <Sidebar />
            </div>
            <div className="flex md:hidden flex-row">
                <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)} />
                <Link to="/">
                    <img src={logo} alt="logo" className='w-28' />
                </Link>
                <Link to={`user-profile/${user?._id}`}></Link>
            </div>
        </div>
    )
}
