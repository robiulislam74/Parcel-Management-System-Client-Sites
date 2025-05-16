
import UseContext from '../../../Hooks/UseContext'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const MyDeliveryList = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const { user } = UseContext()

  const { data: singleUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`)
      return res?.data
    }
  })


  const { data: deliveryList } = useQuery({
    queryKey: ['deliveryList',singleUser?._id],
    enabled: !!singleUser?._id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/deliveryMenParcel/${singleUser?._id}`)
      return res?.data
    }
  })
  // console.log("parcel:",deliveryMenParcel)

  // Parcel Cancelled
  const handleCancelBtn = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Cancel this parcel!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch(`/cancelStatus/${id}`)
          .then((res) => {
            if (res.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Cancelled!",
                text: "Parcel has been cancel!",
                icon: "success"
              });
            }
          })


      }
    });
  }

  // Parcel Delivered
  const handleDeliveredBtn = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to deliver this parcel!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch(`/deliveredStatus/${id}`)
          .then((res) => {
            if (res.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Delivered!",
                text: "Parcel has been Delivered!",
                icon: "success"
              });
            }
          })


      }
    });
  }




  return (
    <div className='p-6'>
      <div className='text-center items-center mx-auto'>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
          My Delivery List
        </h2>
      </div>
      <div className="w-full overflow-x-auto mt-6">
        <div className="min-w-[1000px] md:min-w-full">
          <table className="min-w-full table-auto text-sm text-left bg-white border border-gray-300">
            <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
              <tr>
                <th className="px-3 md:px-4 py-2 border">Booked User</th>
                <th className="px-3 md:px-4 py-2 border">Receiver Name</th>
                <th className="px-3 md:px-4 py-2 border">User Phone</th>
                <th className="px-3 md:px-4 py-2 border">Delivery Date</th>
                <th className="px-3 md:px-4 py-2 border">Approx. Date</th>
                <th className="px-3 md:px-4 py-2 border">Receiver Phone</th>
                <th className="px-3 md:px-4 py-2 border">Address</th>
                <th className="px-3 md:px-4 py-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveryList?.map((parcel, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-center">
                  <td className="px-3 md:px-4 py-2 border">{parcel.name}</td>
                  <td className="px-3 md:px-4 py-2 border">{parcel.receiverName}</td>
                  <td className="px-3 md:px-4 py-2 border">{parcel.phone}</td>
                  <td className="px-3 md:px-4 py-2 border">{parcel.deliveryDate}</td>
                  <td className="px-3 md:px-4 py-2 border">{parcel.approxDate || "Not Assigned"}</td>
                  <td className="px-3 md:px-4 py-2 border">{parcel.receiverPhone}</td>
                  <td className="px-3 md:px-4 py-2 border">{parcel.deliveryAddress}</td>
                  <td className="px-3 md:px-4 py-2 border space-y-2 flex flex-col items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded w-full">
                      View Location
                    </button>
                    <button
                      disabled={parcel.status == 'Cancelled'}
                      onClick={() => handleCancelBtn(parcel._id)} className={` ${parcel.status !== 'Cancelled' ? "bg-pinkRed hover:bg-red-500" : "bg-gray-400 cursor-not-allowed"} ${parcel.status == "Delivered" && 'hidden'} text-white px-3 py-1 rounded w-full`}>
                      {
                        parcel.status == 'Cancelled' ? "Cancelled" : "Cancel"

                      }

                    </button>
                    <button onClick={() => handleDeliveredBtn(parcel._id)} className={`${parcel.status !== 'Delivered' ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}   text-white px-3 py-1 rounded w-full`}>
                      {
                        parcel.status == 'Delivered' ? "Delivered" : "Deliver"

                      }
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {deliveryList?.length === 0 && (
            <p className="text-center text-gray-500 py-4">No deliveries assigned yet.</p>
          )}
        </div>
      </div>


    </div>
  )
}

export default MyDeliveryList