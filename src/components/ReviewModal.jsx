import React, { useState } from 'react'
import Button from './Button';
import { format } from 'date-fns';
import axios from 'axios';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ReviewModal = ({ user, deliveryManId, onClose }) => {
    const [rating, setRating] = useState(5);
    const [feedback, setFeedback] = useState("");
    const axiosPublic = useAxiosPublic()
    const now = new Date()
    const formattedDate = format(now, 'dd/MM/yyyy')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewInfo = {
            name: user.displayName,
            photoURL: user.photoURL,
            deliveryMenId: deliveryManId,
            rating: parseFloat(rating),
            feedback,
            date: formattedDate

        }

        const res = await axiosPublic.post('/reviews', reviewInfo)
        if (res?.data?.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Review Successfully done!",
                showConfirmButton: false,
                timer: 2000
            });
        }
        onClose()
    };


    return (
        <div className="bg-white p-8 rounded-2xl h-full w-full  relative">
            <h2 className="text-2xl font-semibold text-center mb-6">Give a Review</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Image */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Image</label>
                    <div className="mt-1 flex items-center space-x-3">
                        <img
                            name='photoUrl'
                            src={user?.photoURL}
                            alt="User"
                            className="w-12 h-12 outline-2 outline-bg-secondary rounded-full border object-cover"
                        />
                    </div>
                </div>

                {/* User Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        name='name'
                        type="text"
                        value={user?.displayName}
                        readOnly
                        className="w-full outline-pinkRed cursor-not-allowed mt-1 px-4 py-2 border rounded-md bg-gray-100"
                    />
                </div>

                {/* Delivery Man ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Delivery Man ID</label>
                    <input
                        name='deliveryMenId'
                        type="text"
                        value={deliveryManId}
                        readOnly
                        className="w-full outline-pinkRed mt-1 cursor-not-allowed px-4 py-2 border rounded-md bg-gray-100"
                    />
                </div>


                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating (1–5)</label>
                    <input
                        name='rating'
                        type="number"
                        min={1}
                        max={5}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full outline-pinkRed mt-1 px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Feedback */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Feedback</label>
                    <textarea
                        name='feedback'
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={3}
                        className="w-full outline-pinkRed mt-1 px-4 py-2 border rounded-md"
                        placeholder="Write your feedback..."
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-4 pb-8 text-center">
                    {/* <button
              type="submit"
              className="w-full bg-blue-600 text-white pt-2 mb-8 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Submit Review
            </button> */}
                    <Button
                        type={"submit"}
                        text={'Submit Review'}
                        bgColor={'bg-black/90'}
                        overBgColor={'bg-pinkRed'}
                        textColor={'text-white'}
                        groupHover={'group-hover:text-black'}
                        padding={'px-5 py-2'}
                    />
                </div>
            </form>
        </div>

    )
}

export default ReviewModal