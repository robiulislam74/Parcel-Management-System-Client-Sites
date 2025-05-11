import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared_Files/Navbar'
import Footer from '../Shared_Files/Footer'

const MainDashboardLayOut = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
        <div className='3/12 bg-white min-h-screen  shadow-md'>
        <Sidebar/>
        </div>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default MainDashboardLayOut