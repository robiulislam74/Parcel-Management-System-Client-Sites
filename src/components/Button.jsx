import { ArrowUpRight } from 'react-feather'; // or from 'react-icons/fi'

const Button = ({text,bgColor,overBgColor,textColor,groupHover,padding,submit}) => {
    return (
        <div className='relative group inline-block cursor-pointer'>
            <button
            type={submit}
             className={`overflow-hidden inline-flex items-center gap-2 ${padding}  ${textColor} ${groupHover} font-medium rounded-md  ${bgColor} transition duration-500`}>
               <span className='group-hover:z-50'>{text}</span>
                <ArrowUpRight className="transition-transform group-hover:z-50 group-hover:ease-in duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
            </button>
            <div className={`h-full w-1 group-hover:w-full  transition-all duration-500 group-hover:rounded-r-md rounded-l-md  ${overBgColor} absolute top-0 left-0`}></div>
        </div>
    );
};

export default Button;