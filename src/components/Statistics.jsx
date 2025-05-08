import React from 'react';
import CountUp from 'react-countup';
import { FaAward, FaUsers } from 'react-icons/fa';
import { BsBoxSeam, BsTruck } from 'react-icons/bs';

const stats = [
  {
    id: 1,
    icon: <FaAward className="text-white text-3xl" />,
    count: 35,
    label: 'Years of Experience',
  },
  {
    id: 2,
    icon: <BsBoxSeam className="text-white text-3xl" />,
    count: 528,
    label: 'Parcels Booked',
  },
  {
    id: 3,
    icon: <BsTruck className="text-white text-3xl" />,
    count: 475,
    label: 'Parcels Delivered',
  },
  {
    id: 4,
    icon: <FaUsers className="text-white text-3xl" />,
    count: 45,
    label: 'Registered Users',
  },
];


const Statistics = () => {
  return (
    <section className="bg-cover relative bg-center bg-fixed bg-[#0f172a] text-white py-20 px-4" style={{ backgroundImage: "url('https://i.ibb.co/C5HS2Tsx/pexels-tomfisk-3856433.jpg')" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((items,id ) => (
          <div key={id} className="flex z-20 flex-col items-center">
            <div className="bg-pinkRed p-4 rounded">
              {items.icon}
            </div>
            <h2 className="text-4xl font-bold mt-4">
              <CountUp end={items.count} duration={3} />
            </h2>
            <p className="mt-2 text-sm font-semibold">+ {items.label}</p>
          </div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    </section>
  );
};

export default Statistics;
