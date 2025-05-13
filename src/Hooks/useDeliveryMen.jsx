import { useQuery } from '@tanstack/react-query'
import UseContext from './UseContext'
import useAxiosSecure from './useAxiosSecure'

const useDeliveryMen = () => {
  const { user } = UseContext()
    const axiosSecure = useAxiosSecure()

    const { data: isDeliveryMen, isLoading } = useQuery({
        queryKey: [user?.email, "isDeliveryMen"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/deliveryMen/${user?.email}`)
            return res?.data?.isDeliveryMen;
        },

    })
    return {isDeliveryMen, isLoading}
}

export default useDeliveryMen