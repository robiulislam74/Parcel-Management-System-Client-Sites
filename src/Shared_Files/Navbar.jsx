import React, { useContext } from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Bell } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider/AuthProvider'
// #195266
const Navbar = () => {
    const { user, signOutFun } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOutBtn = (e) => {
        e.preventDefault()
        signOutFun().then(() => {
            navigate('/login')
        }).catch((error) => {
            // An error happened.
        });
    }

    const navItems = <div className='uppercase navItem text-base font-semibold flex gap-6 items-center'>
        <NavLink to={'/'}>
            <li>Home</li>
        </NavLink>

    </div>
    return (
        <>
            <div className='bg-thirdColor'>
                <div className="navbar max-w-screen-xl mx-auto text-primaryColor py-3">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}
                            </ul>
                        </div>
                        <div className=" text-center">
                            <img className='mx-auto w-14' src='https://i.ibb.co.com/60MLdpSR/delivery.png' alt="" />
                            <p className='font-extrabold text-xs text-center uppercase text-primaryColor'>ParcelPro</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    {/* Profile Avater */}
                    <div className="navbar-end flex items-center gap-4">
                        <div className='relative'>
                            <Bell className='w-8 h-8' />
                            <p className='bg-red-500 rounded-full text-center inline-block px-1 text-xs absolute top-0 text-white right-0'>1</p>
                        </div>

                        {
                            user
                                ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div data-tooltip-id="my-tooltip-1" className="ring-primaryColor ring-offset-base-100 w-12  rounded-full ring ring-offset-2">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ReactTooltip
                                        id="my-tooltip-1"
                                        place="bottom"
                                        content="Click on!"
                                    />
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-md dropdown-content bg-fourthColor rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li>
                                            <a className="justify-between">
                                                {user?.displayName}
                                            </a>
                                        </li>
                                        <li>
                                        <Link to={'/dashboard'}><a>Dashboard</a></Link>
                                        </li>
                                        <li onClick={handleLogOutBtn}><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <Link to={'/login'} className="px-5 py-2 rounded-md font-semibold text-base text-white bg-primaryColor">Login</Link>
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar