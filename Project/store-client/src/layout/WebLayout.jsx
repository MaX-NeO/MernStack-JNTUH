import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    return (
        <>
            <div className=''>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default WebLayout