import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainDashboardLayOut = () => {
  return (
    <div className='flex'>
        <div className='3/12 bg-secondaryColor min-h-screen'>
        <Sidebar/>
        </div>
        <Outlet/>
    </div>
  )
}

export default MainDashboardLayOut