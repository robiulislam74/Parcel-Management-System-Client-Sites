import axios from 'axios'

const axiosPublic = axios.create({
    // baseURL: 'https://parcel-management-system-server-sites-2.onrender.com',
    baseURL: 'http://localhost:5000',
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic