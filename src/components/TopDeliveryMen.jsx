import React from "react";
import { FaStar } from "react-icons/fa";
import Heading from "./Heading";

const TopDeliveryMen = () => {

  const topDeliveryMen = [
    {
      name: "John Doe",
      image: "https://i.ibb.co.com/tMdcd7YC/pexels-kindelmedia-6867935.jpg",
      parcelsDelivered: 120,
      averageRating: 4.8
    },
    {
      name: "Sara Smith",
      image: "https://i.ibb.co.com/v6Fy4mDm/pexels-artempodrez-5025633.jpg",
      parcelsDelivered: 110,
      averageRating: 4.7
    },
    {
      name: "David Lee",
      image: "https://i.ibb.co.com/ZRwHzbKD/pexels-tiger-lily-4487517.jpg",
      parcelsDelivered: 105,
      averageRating: 4.9
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Heading
          title={'Our Top Delivery Heroes'}
          subTitle={' Meet the most reliable and highest-rated delivery personnel who go the extra mile to serve you best.'}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topDeliveryMen?.map((man, index) => (
            <div
              key={index}
              className="bg-white border hover:border-pinkRed duration-500 transition-all group shadow-lg rounded-xl p-6 hover:shadow-2xl"
            >
             <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
             <div
                style={{ backgroundImage: `url(${man.image})` }}
                className="w-24 h-24 mx-auto rounded-full bg-cover bg-center object-fill mb-4 transition duration-300 group-hover:scale-125"
              />
             </div>
              <h3 className="text-xl font-semibold text-primaryColor mb-2">
                {man.name}
              </h3>
              <p className="text-gray-700">
                <strong>Parcels Delivered:</strong> {man.parcelsDelivered}
              </p>
              <div className="flex items-center justify-center mt-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-gray-700 font-medium">
                  {man.averageRating.toFixed(1)} / 5
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeliveryMen;
