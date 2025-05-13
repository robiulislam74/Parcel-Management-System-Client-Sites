
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Hooks/useAxiosSecure'
import Button from './Button'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ManageParcelForm = ({ id,onCloseModal }) => {
    const axiosSecure = useAxiosSecure()
    const [approxDate, setApproxDate] = useState(null)
    const [deliveryMenId, setDeliveryMenId] = useState(null)

    // Get all DeliveryMen
    const { data: allDeliveryMen,refetch } = useQuery({
        queryKey: ['allDeliveryMen'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allDeliveryMen`)
            return res?.data
        },
    })

    const handleAssignBtn = async () => {

        const assignInfo = {
            status: 'On the way',
            deliveryMenId: deliveryMenId,
            approxDate: approxDate
        }

        // manage Parcel 
        await axiosSecure.patch(`/manageParcel/${id}`, assignInfo)
            .then(res => {
                refetch()
                onCloseModal()
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: " Deliveryman assign successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }


    return (
        <>
            <div className="p-6 w-full max-w-md">
                <h2 className="text-2xl text-center font-bold mb-4">Assign Deliveryman</h2>

                {/* Select Deliveryman */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Select Deliveryman</label>
                    <select
                        name='optionValue'
                        onChange={(e) => setDeliveryMenId(e.target.value)}
                        className="w-full border px-3 py-2 rounded focus:outline-none">
                        <option value="">-- Choose One --</option>
                        {
                            allDeliveryMen?.map(deliveryMen => (
                                <option key={deliveryMen._id} value={deliveryMen._id}>
                                    {deliveryMen.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                {/* Approx Delivery Date */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Approx. Delivery Date</label>
                    <input
                        name='date'
                        onChange={(e) => setApproxDate(e.target.value)}
                        type="date"
                        className="w-full border px-3 py-2 rounded focus:outline-none"
                    />
                </div>

                {/* Assign Button */}
                <div
                    onClick={handleAssignBtn}
                    className='mx-auto text-center pt-4'>
                    <Button
                        // type={"submit"}
                        text={'Submit Request'}
                        bgColor={'bg-black'}
                        overBgColor={'bg-pinkRed'}
                        textColor={'text-white'}
                        groupHover={'group-hover:text-black'}
                        padding={'px-4 py-3'}
                    />
                </div>
            </div>
        </>
    )
}

export default ManageParcelForm