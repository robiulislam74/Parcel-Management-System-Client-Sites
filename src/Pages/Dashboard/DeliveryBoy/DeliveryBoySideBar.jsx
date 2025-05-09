import {
    FaCog,
    FaSignOutAlt,
    FaTruckMoving,
    FaStar
  } from "react-icons/fa";
  import UseContext from "../../../Hooks/UseContext";
  
  const DeliveryBoySideBar = () => {
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
                <img
                  alt="Delivery Avatar"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-700">{user?.displayName}</h4>
              <p className="text-sm font-medium text-gray-500">Delivery Men</p>
            </div>
          </div>
  
          {/* Menu */}
          <div>
            <p className="font-bold text-xs text-gray-500 uppercase mb-2">Main Menu</p>
            <ul className="space-y-3">
              <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                <FaTruckMoving />
                <span>My Delivery List</span>
              </li>
              <li className="flex text-lg items-center space-x-3 text-gray-700 hover:text-pinkRed transition cursor-pointer">
                <FaStar />
                <span>My Reviews</span>
              </li>
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
  
  export default DeliveryBoySideBar;
  