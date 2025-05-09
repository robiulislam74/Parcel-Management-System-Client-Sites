
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseContext from "../Hooks/UseContext";

const GoogleLogin = () => {
    const {googleWithLogin}=UseContext()
    const navigate = useNavigate()

    const handleGoogleBtn =()=>{
       googleWithLogin()
        .then( (result)=>{
          console.log(("result:",result))
          navigate('/')
             Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Google Login Successful!",
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