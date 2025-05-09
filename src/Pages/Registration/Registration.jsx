import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../../FireBase/firebase.config';
import Navbar from '../../Shared_Files/Navbar';
import Footer from '../../Shared_Files/Footer';
import { format } from 'date-fns';

import useAxiosPublic from '../../Hooks/useAxiosPublic';
import UseContext from '../../Hooks/UseContext';

const Registration = () => {
  const [userType, setUserType] = useState('User');
  const { createSignUp } = UseContext()
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()

  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd"); 

  const handleRegistration = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const registerData = Object.fromEntries(data.entries())

    const userInfo = {
      name: registerData.name,
      email: registerData.email,
      photoURL: registerData.photoURL,
      role: userType,
      date: formattedDate

    }
    console.log("userInfo:",userInfo)

    createSignUp(registerData.email, registerData.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: registerData.name,
          photoURL: registerData.photoURL
        }).then(async () => {
          await axiosPublic.post('/users',userInfo)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successful!",
            showConfirmButton: false,
            timer: 2000
          });
          navigate('/')
        }).catch((error) => {
          // An error occurred
          // ...
        });

        console.log("Registeration Successfull:", user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      e.target.reset()
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgColor flex items-center justify-center p-4">
        <div className="w-full border-2 border-thirdColor max-w-4xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

          {/* Left: Info */}
          <div className="bg-thirdColor text-white flex flex-col justify-center items-center p-8">
            <h2 className="text-3xl font-bold mb-4">Join ParcelPro</h2>
            <p className="text-center">Create an account to start booking and managing your parcels with ease.</p>
            <img
              src="https://i.ibb.co/KpgSqvzz/register.png"
              alt="Register"
              className="w-96 mt-6 hidden md:block"
            />
          </div>

          {/* Right: Form */}
          <div className="pb-4 pt-6 px-8">
            <h3 className="text-2xl font-bold text-primaryColor mb-6">Create an Account</h3>
            <form onSubmit={handleRegistration} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                <input type="text" name='photoURL' placeholder="URL"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name='name' placeholder="Enter your name" required
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name='email' placeholder="Enter your email" required
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name='password' placeholder="********" required
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                />
              </div>

              {/* <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" placeholder="********" required
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700">User Type</label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <option value="User">User</option>
                  <option value="DeliveryMen">DeliveryMen</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-pinkRed text-white py-2 rounded-md hover:bg-hoverColor transition"
              >
                Registration
              </button>

              <p className="text-sm text-center mt-4 text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-pinkRed hover:text-hoverColor font-semibold hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
