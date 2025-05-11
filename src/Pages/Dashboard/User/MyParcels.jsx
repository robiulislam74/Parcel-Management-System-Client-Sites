import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure()
  // const [bookedAllParcels, setBookedAllParcels] = useState([])


  const { data: bookedAllParcels } = useQuery({
    queryKey: ['bookedParcel'],
    queryFn: async () => {
      const res = await axiosSecure.get('/bookedParcel')
      return res?.data
    },
  })

  console.log("arr:",bookedAllParcels)


  const handleUpdate = (id) => {
    // Redirect or open update form
    console.log("Update", id);
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to cancel this booking.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Cancel", id);
        // update status logic
      }
    });
  };

  const handleReview = (id) => {
    console.log("Review", id);
    // redirect to review form
  };

  const handlePay = (id) => {
    console.log("Pay", id);
    // trigger payment logic
  };

  // const filteredParcels = filterStatus === "all"
  //   ? parcels
  //   : parcels.filter((p) => p.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Parcels</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Parcel Type</th>
              <th className="p-2">Requested Date</th>
              <th className="p-2">Booking Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Delivery Men</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookedAllParcels.map((parcel, idx) => (
              <tr key={idx} className="text-center border-t">
                <td className="p-2">{parcel.parcelType}</td>
                <td className="p-2">{parcel.deliveryDate}</td>
                <td className="p-2">{parcel.bookingDate}</td>
                <td className="p-2 capitalize">{parcel.status}</td>
                <td className="p-2">{parcel.deliveryMenId || "Not Assigned"}</td>
                <td className="p-2 space-x-2 flex flex-wrap justify-center">
                  <button
                    onClick={() => handleUpdate(parcel._id)}
                    disabled={parcel.status !== "pending"}
                    className={`px-2 py-1 rounded text-white text-xs ${parcel.status === "pending" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleCancel(parcel._id)}
                    disabled={parcel.status !== "pending"}
                    className={`px-2 py-1 rounded text-white text-xs ${parcel.status === "pending" ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"}`}
                  >
                    Cancel
                  </button>

                  {parcel.status === "delivered" && (
                    <button
                      onClick={() => handleReview(parcel._id)}
                      className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs"
                    >
                      Review
                    </button>
                  )}

                  {["pending", "on the way", "delivered"].includes(parcel.status) && (
                    <button
                      onClick={() => handlePay(parcel._id)}
                      className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-xs"
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {bookedAllParcels.length === 0 && (
          <p className="text-center py-4 text-gray-500">No parcels found for selected status.</p>
        )}
      </div>
    </div>
  );
};

export default MyParcels;
