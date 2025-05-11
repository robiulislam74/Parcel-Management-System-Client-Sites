import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import UseContext from "../../../Hooks/UseContext";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Button from "../../../components/Button";

const BookAParcel = () => {
  const { user } = UseContext();
  const [price, setPrice] = useState(0);
  const axiosPublic = useAxiosPublic()

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
      bookingDate: new Date().toLocaleDateString(),
      status: "Pending"
    };
    console.log("Parcel Booked:", bookingData);
    // Send bookingData to backend 
    const res = await axiosPublic.post('/bookedParcel', bookingData)

    if (res?.data?.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Booking a Parcel Successfully!",
        background: "#F5F7FA",
        showConfirmButton: false,
        timer: 2000
      });
    }


    reset();
  };

  return (
    <div className="w-8/12 my-12 mx-auto p-6  rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">📦 Book a Parcel</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={user?.displayName}
            readOnly
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            {...register("phone", { required: true })}
            placeholder="017XXXXXXXX"
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
        </div>

        {/* Parcel Type */}
        <div>
          <label className="block mb-1 font-medium">Parcel Type</label>
          <input
            type="text"
            name="parcelType"
            {...register("parcelType", { required: true })}
            placeholder="Documents / Box / Gift etc."
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.parcelType && <p className="text-red-500 text-sm">Parcel type is required</p>}
        </div>

        {/* Weight */}
        <div>
          <label className="block mb-1 font-medium">Parcel Weight (kg)</label>
          <input
            type="weight"
            step="0.1"
            {...register("parcelWeight", { required: true })}
            placeholder="e.g. 1.5"
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.parcelWeight && <p className="text-red-500 text-sm">Weight is required</p>}
        </div>

        {/* Receiver Name */}
        <div>
          <label className="block mb-1 font-medium">Receiver's Name</label>
          <input
            type="text"
            name="receiverName"
            {...register("receiverName", { required: true })}
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.receiverName && <p className="text-red-500 text-sm">Receiver's name is required</p>}
        </div>

        {/* Receiver Phone */}
        <div>
          <label className="block mb-1 font-medium">Receiver's Phone</label>
          <input
            type="text"
            name="receiverPhone"
            {...register("receiverPhone", { required: true })}
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.receiverPhone && <p className="text-red-500 text-sm">Receiver's phone is required</p>}
        </div>

        {/* Delivery Address */}
        <div className="">
          <label className="block mb-1 font-medium">Parcel Delivery Address</label>
          <input
            type="text"
            name="deliveryAddress"
            {...register("deliveryAddress", { required: true })}
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.deliveryAddress && <p className="text-red-500 text-sm">Delivery address is required</p>}
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block mb-1 font-medium">Requested Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            {...register("deliveryDate", { required: true })}
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
          {errors.deliveryDate && <p className="text-red-500 text-sm">Date is required</p>}
        </div>

        {/* Latitude */}
        <div>
          <label className="block mb-1 font-medium">Delivery Latitude</label>
          <input
            type="text"
            name="latitude"
            {...register("latitude", { required: true })}
            placeholder="e.g. 21.121365"
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
        </div>

        {/* Longitude */}
        <div>
          <label className="block mb-1 font-medium">Delivery Longitude</label>
          <input
            type="text"
            name="longitude"
            {...register("longitude", { required: true })}
            placeholder="e.g. 91.123456"
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price (Auto Calculated)</label>
          <input
            type="text"
            value={`${price} Tk`}
            readOnly
            className="w-full border outline-pinkRed border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          {/* <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Book Parcel
          </button> */}
          <Button
            type={"submit"}
            text={'Submit Request'}
            bgColor={'bg-black/90'}
            overBgColor={'bg-pinkRed'}
            textColor={'text-white'}
            groupHover={'group-hover:text-black'}
            padding={'px-6 py-3'}
          />
        </div>
      </form>
    </div>
  );
};

export default BookAParcel;
