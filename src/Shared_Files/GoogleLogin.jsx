
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseContext from "../Hooks/UseContext";
import { format } from "date-fns";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const GoogleLogin = () => {
    const {googleWithLogin}=UseContext()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

     const now = new Date();
      const formattedDate = format(now, "yyyy-MM-dd"); 

    const handleGoogleBtn =()=>{
       googleWithLogin().then(async (result)=>{
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Google Login Successful!",
          showConfirmButton: false,
          timer: 2000
        });

        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
          date: formattedDate,
          role: "User"
        }
        await axiosPublic.post('/users',userInfo).then(user=>{
          console.log('user',user)
        })

      }).catch((error)=>{
        console.log("ErrorNew:",error)
      })
      navigate('/')
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