import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import ReviewCard from "../../../components/ReviewCard"
import UseContext from "../../../Hooks/UseContext"

const MyReviews = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = UseContext()

  const { data: singleUser } = useQuery({
     queryKey: ['user'],
     queryFn: async () => {
       const res = await axiosSecure.get(`/users/${user?.email}`)
       return res?.data
     }
   })
 
 
   const { data: allReviews } = useQuery({
     queryKey: ['allReviews', singleUser?._id],
     enabled: !!singleUser?._id,
     queryFn: async () => {
       const res = await axiosSecure.get(`/allReviews/${singleUser?._id}`)
       return res?.data
     }
   })

  return (
     <div className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Reviews</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allReviews?.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </div>
  )
}

export default MyReviews