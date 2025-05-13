import { FaBoxOpen, FaUserShield, FaMotorcycle, FaChartBar, FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import UseContext from "../../../Hooks/UseContext";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
    const { user } = UseContext();

    return (
        <div className="w-64 h-screen bg-white shadow-md p-4 pl-10 flex flex-col justify-between">
            {/* Top Section */}
            <div>
                {/* Logo */}
                <h2 className="text-2xl font-bold mb-6 uppercase text-black">ParcelPro</h2>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 mb-6">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="ring-offset-thirdColor w-12 rounded-full ring ring-offset">
                            <img alt="Admin Avatar" src={user?.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-gray-700 uppercase">{user?.displayName}</h4>
                        <p className="text-sm font-medium text-gray-500">Admin</p>
                    </div>
                </div>

                {/* Menu */}
                <div>
                    <p className="font-bold text-xs text-gray-500 uppercase mb-2">Main Menu</p>
                    <ul className="space-y-3">
                        <NavLink to={'allParcels'}>
                            <li className="flex mb-3 text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                            <FaBoxOpen />
                            <span>All Parcels</span>
                        </li>
                        </NavLink>
                        <NavLink to={'allUsers'}>
                            <li className="flex mb-3  text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                            <FaUserShield />
                            <span>All Users</span>
                        </li>
                        </NavLink>
                        <NavLink to={'allDeliveryMen'}>
                            <li className="flex mb-3  text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                            <FaMotorcycle />
                            <span>All Delivery Men</span>
                        </li>
                        </NavLink>
                        <NavLink to={'statistics'}>
                            <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                            <FaChartBar />
                            <span>Statistics</span>
                        </li>
                        </NavLink>
                    </ul>

                    <p className="text-gray-500 font-bold text-xs uppercase mt-6 mb-2">General</p>
                    <ul className="space-y-2">
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                            <FaCog />
                            <span>Settings</span>
                        </li>
                        <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                            <FaSignOutAlt />
                            <span>Log out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminSideBar;
