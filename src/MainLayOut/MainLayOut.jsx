import React from 'react'
import Navbar from '../Shared_Files/Navbar'
import Footer from '../Shared_Files/Footer'
import { Outlet } from 'react-router-dom'

const MainLayOut = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className=' min-h-[calc(100vh-409px)]'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayOut