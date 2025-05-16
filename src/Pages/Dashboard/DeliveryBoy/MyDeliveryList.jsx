
import UseContext from '../../../Hooks/UseContext'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import Modal from 'react-responsive-modal'
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import io from 'socket.io-client';
import 'leaflet/dist/leaflet.css';
import RecenterMap from '../../../components/RecenterMap'
import { SlLocationPin } from 'react-icons/sl'
import { Tooltip as ReactTooltip } from "react-tooltip";

const MyDeliveryList = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const { user } = UseContext()
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // const [position, setPosition] = useState([23.160554583304265, 89.20188905087441]);
  const [latitude,setLatitude]=useState(null)
  const [longitude,setLongitude]=useState(null)

  const position = [latitude,longitude]

  const { data: singleUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`)
      return res?.data
    }
  })


  const { data: deliveryList } = useQuery({
    queryKey: ['deliveryList', singleUser?._id],
    enabled: !!singleUser?._id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/deliveryMenParcel/${singleUser?._id}`)
      return res?.data
    }
  })

  // View Location btn control
  const handleLocationBtn =async (id) => {
    onOpenModal()
    await axiosSecure.get(`/singleParcel/${id}`)
    .then((res)=>{
      setLatitude(parseFloat(res.data.latitude))
      setLongitude(parseFloat(res.data.longitude))
    })
  }

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
                    {/* Modal */}
                    <Modal
                      open={open}
                      onClose={onCloseModal}
                      center
                      styles={{
                        modal: {
                          width: '70vw',
                          height: '90vh',
                          maxWidth: '70vw',
                          margin: 0,
                          borderRadius: 8,
                        },
                      }}
                    // 23.160554583304265, 89.20188905087441 MM
                    // 23.177413234761673, 89.16069252339092 Airport
                    // 22.9829225722106, 89.16238498713096 Rajgonj,Monirampu
                    // 23.039328906038243, 88.89820222203436 Banapal
                    >
                      <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {/* <RecenterMap lat={position[0]} lng={position[1]} /> */}
                        {/* {Object.entries(locations).map(([id, loc]) => ( */}
                        <Marker position={position}>
                          <Popup>DeliveryMan ID: </Popup>
                        </Marker>
                        {/* // ))} */}
                      </MapContainer>
                    </Modal>
                    {/* <button onClick={() => handleLocationBtn(parcel._id)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded w-full">
                      View Location
                    </button> */}
                    <button onClick={() => handleLocationBtn(parcel._id)} className="text-2xl text-blue-600">
                      <SlLocationPin data-tooltip-id="my-tooltip-2" />
                    </button>
                    <ReactTooltip
                      id="my-tooltip-2"
                      place="left"
                      content="View Location"
                      style={{
                        backgroundColor: '#2f2937', // Tailwind gray-800
                        color: '#ffffff',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        fontSize: '14px',
                      }}
                    />
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