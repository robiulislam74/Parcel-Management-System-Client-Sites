import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ chartData }) => {
    const chartData = [
        { date: '2025-05-01', booked: 10, delivered: 5 },
        { date: '2025-05-02', booked: 15, delivered: 8 },
        { date: '2025-05-03', booked: 12, delivered: 10 },
        { date: '2025-05-04', booked: 20, delivered: 18 },
        { date: '2025-05-05', booked: 25, delivered: 22 },
    ];
    // Simulated data (replace with your API data or props)
    const dates = chartData?.map(item => item.date);
    const booked = chartData?.map(item => item.booked);
    const delivered = chartData?.map(item => item.delivered);

    const options = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: { show: true },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            categories: dates,
            title: { text: 'Booking Date' },
        },
        yaxis: {
            title: { text: 'Parcel Count' },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'top',
        },
        colors: ['#00E396', '#FF4560'],
    };

    const series = [
        {
            name: 'Booked',
            data: booked,
        },
        {
            name: 'Delivered',
            data: delivered,
        },
    ];

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Parcel Booked vs Delivered</h2>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;
