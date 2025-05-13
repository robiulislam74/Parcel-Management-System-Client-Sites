// Statistics.jsx
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Statistics = () => {
  const parcelStats = [
    { date: '2025-05-01', bookedCount: 10, deliveredCount: 5 },
    { date: '2025-05-02', bookedCount: 15, deliveredCount: 8 },
    { date: '2025-05-03', bookedCount: 12, deliveredCount: 10 },
    { date: '2025-05-04', bookedCount: 20, deliveredCount: 18 },
    { date: '2025-05-05', bookedCount: 25, deliveredCount: 22 },
  ]
  // const [axiosSecure] = useAxiosSecure();
  // const [parcelStats, setParcelStats] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axiosSecure.get('/parcel-stats'); 
  //     setParcelStats(res.data); 
  //   };
  //   fetchData();
  // }, [axiosSecure]);

  // Extracting data for charting
  const dates = parcelStats.map(item => item.date);
  const bookedCounts = parcelStats.map(item => item.bookedCount);
  const deliveredCounts = parcelStats.map(item => item.deliveredCount);

  // Bar chart options
  const barOptions = {
    chart: {
      id: 'bookings-bar'
    },
    xaxis: {
      categories: dates
    },
    title: {
      text: 'Parcel Bookings by Date',
      align: 'center'
    }
  };

  const barSeries = [
    {
      name: 'Bookings',
      data: bookedCounts
    }
  ];

  // Line chart options
  const lineOptions = {
    chart: {
      id: 'booked-vs-delivered'
    },
    xaxis: {
      categories: dates
    },
    title: {
      text: 'Booked vs Delivered Parcels',
      align: 'center'
    }
  };

  const lineSeries = [
    {
      name: 'Booked',
      data: bookedCounts
    },
    {
      name: 'Delivered',
      data: deliveredCounts
    }
  ];

  return (
    <div className="p-6 space-y-10 w-full">
      <h2 className="text-3xl font-bold text-center">📊 Statistics</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded p-4 w-full">
          <Chart options={barOptions} series={barSeries} type="bar" width="100%" height={350} />
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-md rounded p-4 w-full">
          <Chart options={lineOptions} series={lineSeries} type="line" width="100%" height={350} />
        </div>
      </div>

    </div>
  );
};

export default Statistics;
