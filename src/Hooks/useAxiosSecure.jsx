import axios from 'axios'
import UseContext from './UseContext';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {signOutFun} = UseContext()
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('secret-token')
        // console.log("token:", token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });


      // intercepts 401 and 403 status
    axios.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await  signOutFun()
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure
}

export default useAxiosSecure