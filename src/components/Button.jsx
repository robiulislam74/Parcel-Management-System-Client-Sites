import { ArrowUpRight } from 'react-feather'; // or from 'react-icons/fi'

const Button = () => {
    return (
        <div className='relative group'>
            <button className="overflow-hidden inline-flex items-center gap-2 px-4 py-2  text-black group-hover:text-white font-medium rounded-md  bg-red-100 transition duration-500">
               <span className='group-hover:z-50'>Log In</span>
                <ArrowUpRight className="transition-transform group-hover:z-50 group-hover:ease-in duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
            </button>
            <div className='h-full w-1 group-hover:w-full  transition-all duration-500 group-hover:rounded-r-md rounded-l-md  bg-pinkRed absolute top-0 left-0'></div>
        </div>
    );
};

export default Button;