import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"


const AllDeliveryMen = () => {
  const axiosSecure = useAxiosSecure()

  // Get all DeliveryMen
  const { data: allDeliveryMen } = useQuery({
    queryKey: ['allDeliveryMen'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allDeliveryMen`)
      return res?.data
    },
  })

  return (
    <div className="p-8">
     <div className="text-center">
       <h2 className="text-2xl font-bold mb-4">Our All Delivery Men</h2>
     </div>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border border-gray-200 bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 border">Name</th>
              <th className="px-6 py-3 border">Phone Number</th>
              <th className="px-6 py-3 border text-center">Parcels Delivered</th>
              <th className="px-6 py-3 border text-center">Average Review</th>
            </tr>
          </thead>
          <tbody>
            {allDeliveryMen?.map((man, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 border">{man.name}</td>
                <td className="px-6 py-4 border">{man.phone ||"Not Provided"}</td>
                <td className="px-6 py-4 border text-center">{man.parcelsDelivered || "N/A"}</td>
                <td className="px-6 py-4 border text-center">
                  <span className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-800 font-semibold text-xs">
                    ⭐ {man.averageReview || "N/A"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {allDeliveryMen?.length === 0 && (
          <p className="text-center text-gray-500 py-4">No delivery men found.</p>
        )}
      </div>
    </div>

  )
}

export default AllDeliveryMen
