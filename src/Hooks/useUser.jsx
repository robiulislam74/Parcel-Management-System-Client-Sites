import { useQuery } from '@tanstack/react-query'
import UseContext from './UseContext'
import useAxiosSecure from './useAxiosSecure'

const useUser = () => {
  const { user } = UseContext()
    const axiosSecure = useAxiosSecure()

    const { data: isUser, isLoading } = useQuery({
        queryKey: [user?.email, "isUser"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/user/${user?.email}`)
            return res?.data?.isUser;
        },

    })
    return {isUser, isLoading}
}

export default useUser