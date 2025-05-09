import { FaTachometerAlt, FaCreditCard, FaCog, FaSignOutAlt } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import UseContext from "../Hooks/UseContext";
import { FaBoxOpen, FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
    const { user } = UseContext()
    return (
        <div className="w-64 h-screen bg-white shadow-md p-4 pl-10 flex flex-col justify-between">
            {/* Top Section */}
            <div>
                {/* Logo */}
                <h2 className="text-2xl font-bold mb-6 uppercase text-black">ParcelPro</h2>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 mb-6">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div data-tooltip-id="my-tooltip-1" className=" ring-offset-thirdColor w-12  rounded-full ring ring-offset">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-gray-700">{user?.displayName}</h4>
                        <p className="text-sm font-medium text-gray-500">User</p>
                    </div>
                </div>

                {/* Menu */}
                <div>
                    <p className="font-bold text-xs text-gray-500 uppercase mb-2">Main Menu</p>
                    <ul className="space-y-3">
                        {/* <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed">
                            <FaTachometerAlt />
                            <span>Dashboard</span>
                        </li> */}
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <FaBoxOpen />
                            <span>Book a Parcel</span>
                        </li>
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100  cursor-pointer">
                            <MdOutlineLocalShipping />
                            <span>My Parcels</span>
                        </li>
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <FaUserCircle />
                            <span>My Profile</span>
                        </li>
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <MdOutlineLocalShipping />
                            <span>Tracking</span>
                        </li>
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <FaCreditCard />
                            <span>Payments</span>
                        </li>
                        <li className="flex text-lg items-center justify-between text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <BiMessageDetail />
                                <span>Messages</span>
                            </div>
                            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">5</span>
                        </li>
                    </ul>

                    <p className="text-gray-500 font-bold text-xs uppercase mt-6 mb-2">General</p>
                    <ul className="space-y-2">
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <FaCog />
                            <span>Settings</span>
                        </li>
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition duration-100 cursor-pointer">
                            <FaSignOutAlt />
                            <span>Log out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
