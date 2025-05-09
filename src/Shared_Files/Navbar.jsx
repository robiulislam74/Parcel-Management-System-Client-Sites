import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Bell } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import UseContext from '../Hooks/UseContext';
// #195266
const Navbar = () => {
    const { user, signOutFun } = UseContext()
    const navigate = useNavigate()

    const handleLogOutBtn = (e) => {
        e.preventDefault()
        signOutFun().then(() => {
            navigate('/login')
        }).catch((error) => {
            // An error happened.
        });
    }

    const navItems = <div className='uppercase text-gray-500 navItem text-base font-semibold flex gap-8 items-center'>
        <NavLink to={'/'}>
            <li>Home</li>
        </NavLink>
        <li >About</li>
        <li >Features</li>
        <li >Location</li>
        <li >Contact</li>
        <NavLink to={'/dashboard'}>
            <li>Dashboard</li>
        </NavLink>
    </div>
    return (
        <>
            <div className='bg-secondaryColor border-b-2 border-borderColor'>
                <div className="navbar max-w-screen-xl mx-auto py-3">
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
                            <img className='mx-auto w-12' src='https://i.ibb.co.com/k6sh80G3/login.png' alt="" />
                            <p className='font-extrabold text-xs text-center uppercase text-primaryColor'>Parcel<span className='text-pinkRed'>Pro</span></p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    {/* Profile Avater */}
                    <div className="navbar-end flex items-center gap-5">
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-8 w-8 fill-current text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-8 w-8 fill-current text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        <div className='relative'>
                            <Bell className='w-8 h-8 text-gray-500' />
                            <p className='bg-red-500 rounded-full text-center inline-block px-1 text-xs absolute top-0 text-white right-0'>1</p>
                        </div>

                        {
                            user
                                ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div data-tooltip-id="my-tooltip-1" className=" ring-offset-thirdColor w-12  rounded-full ring ring-offset">
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
                                        className="menu menu-md dropdown-content bg-red-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li>
                                            <a className="justify-between">
                                                {user?.displayName}
                                            </a>
                                        </li>
                                        <li>
                                            <Link to={'/dashboard'}>Dashboard</Link>
                                        </li>
                                        <li onClick={handleLogOutBtn}><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                // <Link to={'/login'} className="px-5 py-2 rounded-md font-semibold text-base text-white bg-pinkRed">Join Us</Link>
                                <Link to={'/login'}><Button /></Link>
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