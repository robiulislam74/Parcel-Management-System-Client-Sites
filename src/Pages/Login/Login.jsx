import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../Shared_Files/GoogleLogin';
import Swal from 'sweetalert2';
import Navbar from '../../Shared_Files/Navbar';
import Footer from '../../Shared_Files/Footer';
import UseContext from '../../Hooks/UseContext';

const Login = () => {
    const { signInUser} = UseContext()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const registerData = Object.fromEntries(data.entries())

        signInUser(registerData.email, registerData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome Back!",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <>
        <Navbar/>
            <div className="min-h-screen bg-bgColor flex items-center justify-center p-4">
                <div className="w-full border-2 border-thirdColor max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                    {/* Left Side */}
                    <div className="bg-thirdColor text-white flex flex-col justify-center items-center p-8">
                        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                        <p className="text-center">Login to access your ParcelPro dashboard and track your deliveries.</p>
                        <img
                            src="https://i.ibb.co.com/1fvMYVdV/login.png"
                            alt="Login Illustration"
                            className="w-72 mt-6 hidden md:block"
                        />
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-primaryColor mb-6">Login</h3>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="********"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pinkRed text-white py-2 rounded-md hover:bg-hoverColor transition"
                            >
                                Login
                            </button>

                            {/* Social Login Button */}
                            <div className="mt-4  text-center">
                                <GoogleLogin />
                            </div>

                            <p className="text-sm text-center mt-4 text-gray-600">
                                Don’t have an account?{' '}
                                <Link to="/register" className="text-pinkRed hover:text-hoverColor font-semibold hover:underline">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Login;
