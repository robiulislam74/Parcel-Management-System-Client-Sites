import { useQuery } from '@tanstack/react-query'
import UseContext from './UseContext'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = () => {
    const { user } = UseContext()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res?.data?.isAdmin;
        },

    })
    return {isAdmin, isLoading}
}

export default useAdmin