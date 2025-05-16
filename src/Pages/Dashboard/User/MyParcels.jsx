import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import UseContext from "../../../Hooks/UseContext";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ParcelUpdateForm from "../../../components/ParcelUpdateForm";
import { ColorRing } from "react-loader-spinner";


const MyParcels = () => {
  const axiosSecure = useAxiosSecure()
  const axiosPublic = useAxiosPublic()
  const [filterStatus, setFilterStatus] = useState("all");
  const { user } = UseContext()
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [price, setPrice] = useState(0);
  // const [updateData,setUpdateData] = useState([])
  const [parcelId, setParcelId] = useState('')


  const { data: bookedAllParcels, isLoading,refetch } = useQuery({
    queryKey: ['bookedParcel'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedMyParcel/${user?.email}`)
      return res?.data
    },
  })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const weight = watch("parcelWeight");

  useEffect(() => {
    if (!weight) return;
    const w = parseFloat(weight);
    if (w === 1) setPrice(50);
    else if (w === 2) setPrice(100);
    else if (w > 2) setPrice(150);
    else setPrice(0);
  }, [weight]);

  const onSubmit = async (data) => {
    const bookingData = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      price,
      status: "Pending"
    };
    // console.log("Parcel Booked:", bookingData);
  }

  const handleUpdate = async (id) => {
    onOpenModal()
    setParcelId(id)
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
    }).then(async(result) => {
      if (result.isConfirmed) {
        // console.log("Cancel", id);
        // delete parcel
        await axiosSecure.delete(`/updateBookedParcel/update/${id}`)
                    .then(res => {
                      refetch()
                        if (res.data?.deletedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your parcel has been deleted!",
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
      }
    });
  };

  const handleReview = (id) => {
    // console.log("Review", id);
    // redirect to review form
  };

  const handlePay = (id) => {
    // console.log("Pay", id);
    // trigger payment logic
  };

  const filteredParcels = filterStatus === "all"
    ? bookedAllParcels
    : bookedAllParcels.filter((item) => item.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div>
    {
      isLoading && <div className='min-h-[calc(100vh-88px)] max-w-full flex justify-center items-center'>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
    }
    <>
      {/* Modal */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          modal: {
            width: '50vw',
            height: '90vh',
            maxWidth: '50vw',
            padding: 16,
            margin: 0,
            borderRadius: 8,
          },
        }}

      >
        {
          // (Array.isArray(updateData) ? updateData : []).map((parcel,idx)=>{
          //   <ParcelUpdateForm
          //   key={idx}
          //   parcels={bookedAllParcels
          //   }
          //   />
          // })
          <ParcelUpdateForm
            parcels={bookedAllParcels}
            id={parcelId}
            refetch={refetch}
            onCloseModal={onCloseModal}
          />
        }
      </Modal>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Parcels</h2>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="on the way">On The Way</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-secondaryColor">
              <tr>
                <th className="p-3">Parcel Type</th>
                <th className="p-3">Requested Date</th>
                <th className="p-3">Booking Date</th>
                <th className="p-3">Approximate Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Delivery Men</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredParcels?.map((parcel, idx) => (
                <tr key={idx} className="text-center border-t">
                  <td className="p-2">{parcel.parcelType}</td>
                  <td className="p-2">{parcel.deliveryDate}</td>
                  <td className="p-2">{parcel.bookingDate}</td>
                  <td className="p-2">{parcel?.approxDate || "Not Assigned"}</td>
                  <td className={`p-2 text-sm font-medium capitalize ${parcel.status === "Pending"
                        ? " text-yellow-800"
                        : " text-green-800"
                        }`}>{parcel.status}</td>
                  <td className="p-2">{parcel.deliveryMenId || "Not Assigned"}</td>
                  <td className="p-2 space-x-2 flex flex-wrap justify-center">
                    <button
                      onClick={() => handleUpdate(parcel._id)}
                      disabled={parcel.status !== "Pending"}
                      className={`px-2 py-1 rounded text-white text-xs ${parcel.status === "Pending" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleCancel(parcel._id)}
                      disabled={parcel.status !== "Pending"}
                      className={`px-2 py-1 rounded text-white text-xs ${parcel.status === "Pending" ? "bg-pinkRed hover:bg-red-500" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                      Cancel
                    </button>

                    {parcel?.status === "Delivered" && (
                      <button
                        onClick={() => handleReview(parcel._id)}
                        className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs"
                      >
                        Review
                      </button>
                    )}

                    {["Pending", "On the way", "Delivered"].includes(parcel.status) && (
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
          {filteredParcels?.length === 0 && (
            <p className="text-center py-4 text-gray-500">No parcels found for selected status.</p>
          )}
        </div>
      </div >
    </>
    </div>
  );
};

export default MyParcels;
