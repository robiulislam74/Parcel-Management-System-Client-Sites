import React, { useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const GoogleLogin = () => {
    const {googleWithLogin}=useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoogleBtn =()=>{
      googleWithLogin()
        .then(result=>{
          const photoURL = result.photoURL;
          console.log("URL:",photoURL)
            navigate('/')
             Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Login Successful!",
                      showConfirmButton: false,
                      timer: 2000
                    });
        }).catch((error)=>{
        })
    }
  return (
    <>
    <div className='divider'>Or</div>
    <div className='flex gap-3 items-center justify-center'>
        <p className='text-lg text-gray-600'>Login with Via</p>
        <button onClick={handleGoogleBtn} className='px-5  border border-primaryColor hover:border-secondaryColor text-white py-1 rounded-md hover:bg-secondaryColor transition'>
            <FcGoogle className='text-3xl'/>
        </button>
    </div>
    </>
  )
}

export default GoogleLogin