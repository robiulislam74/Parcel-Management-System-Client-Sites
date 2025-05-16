import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import ManageParcelForm from '../../../components/ManageParcelForm';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const AllParcels = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const axiosSecure = useAxiosSecure()
   const [parcelId, setParcelId] = useState('')

  // Get all parcels
  const { data: bookedAllParcels, isLoading, refetch } = useQuery({
    queryKey: ['bookedParcel'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedParcel`)
      return res?.data
    },
  })

  const handleManageBtn = async (id) => {
    onOpenModal()
    setParcelId(id)
  };


  // const parcels = [
  //   {
  //     name: "robiul islam",
  //     phone: "01770070249",
  //     bookingDate: "5/11/2025",
  //     deliveryDate: "2025-06-18",
  //     price: 100,
  //     status: "Pending",
  //   },
  // ];

  return (
    <>
      {/* Modal */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          modal: {
            width: '35vw',
            height: '60vh',
            maxWidth: '35vw',
            padding: 16,
            margin: 0,
            borderRadius: 8,
          },
        }}

      >
        {
          <ManageParcelForm
          // parcels={bookedAllParcels}
          id={parcelId}
          // refetch={refetch}
          onCloseModal={onCloseModal}
          />
        }
      </Modal>
      <div className="p-8">
        <div className='text-center'>
          <h2 className="text-2xl font-bold mb-4">All Booked Parcels</h2>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700 bg-white border">
            <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 border">User Name</th>
                <th className="px-6 py-3 border">Phone</th>
                <th className="px-6 py-3 border">Booking Date</th>
                <th className="px-6 py-3 border">Delivery Date</th>
                <th className="px-6 py-3 border">Cost</th>
                <th className="px-6 py-3 border">Status</th>
                <th className="px-6 py-3 border">Manage</th>
              </tr>
            </thead>
            <tbody>
              {bookedAllParcels?.map((parcel, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 border">{parcel.name}</td>
                  <td className="px-6 py-4 border">{parcel.phone}</td>
                  <td className="px-6 py-4 border">{parcel.bookingDate}</td>
                  <td className="px-6 py-4 border">{parcel.deliveryDate}</td>
                  <td className="px-6 py-4 border">৳ {parcel.price}</td>
                  <td className="px-6 py-4 border">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${parcel.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-green-200 text-green-800"
                        }`}
                    >
                      {parcel.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 border">
                    <button
                      onClick={() => handleManageBtn(parcel._id)}
                      className="px-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllParcels;
