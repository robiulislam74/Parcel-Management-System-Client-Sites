import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import Swal from "sweetalert2"
import { GiQueenCrown } from "react-icons/gi"


const AllUsers = () => {

  const axiosSecure = useAxiosSecure()
  // Get all parcels
  const { data: allUsers, isLoading, refetch } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers`)
      return res?.data
    },
  })

  // Make DeliveryMen control
  const handleMakeDeliveryMen = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "He will be appointed as a DeliveryMen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make DeliveryMen!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch(`/makeDeliveryMen/${id}`)
          .then((res) => {
            refetch()
            if (res.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Modified!",
                text: "Appointed him as DeliveryMen!",
                icon: "success"
              });
            }
          })


      }
    });


  }
  // Make Admin Control
  const handleMakeAdmin= async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "He will be appointed as a Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch(`/makeAdmin/${id}`)
          .then((res) => {
            refetch()
            if (res.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Modified!",
                text: "Appointed him as Admin!",
                icon: "success"
              });
            }
          })


      }
    });


  }

// const totalSpent = parcelsData.reduce((sum, parcel) => sum + parcel.price, 0);
  return (
    <div className="overflow-x-auto rounded-lg shadow-md p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">All Registered Users</h1>
        <p className="text-sm text-gray-500 mt-1">Manage roles, view activity, and analyze user data.</p>
      </div>

      <table className="min-w-full table-auto border border-gray-200 bg-white text-sm text-left">
        <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 border">User Name</th>
            <th className="px-6 py-3 border">Phone Number</th>
            <th className="px-6 py-3 border text-center">Parcels Booked</th>
            <th className="px-6 py-3 border text-center">Total Spent</th>
            <th className="px-6 py-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-4 border">
                {
                  user.role === "Admin" && <GiQueenCrown className="text-pinkRed"/>
                }
                {user.name}
                </td>
              <td className="px-6 py-4 border">{user.phone || "Not Provided"}</td>
              <td className="px-6 py-4 border text-center">{user.totalParcels || 0}</td>
              <td className="px-6 py-4 border text-center">৳ {user.totalSpent || 0}</td>
              <td className="px-6 py-4 border text-center space-x-2 flex justify-center flex-wrap">
                {user.role !== "DeliveryMen" && (
                  <button
                    onClick={() => handleMakeDeliveryMen(user._id)}
                    className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded"
                  >
                    Make Delivery Men
                  </button>
                )}
                {user.role !== "Admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {allUsers?.length === 0 && (
        <p className="text-center py-4 text-gray-500">No registered users found.</p>
      )}
    </div>

  )
}

export default AllUsers