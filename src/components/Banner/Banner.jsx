import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css'; // Add this CSS file for fade effect

const Banner = () => {
  return (
    <div className="relative min-h-[calc(100vh-88px)] w-full">
      {/* Background Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        swipeable={false}
        className="fade-carousel"
      >
        
        <div>
          <img
            src="https://i.ibb.co.com/1YmNkCB0/pexels-kampus-8931736.jpg"
            alt="Slide 1"
            className="w-full h-[calc(100vh-88px)] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/mVdvfrZt/pexels-kampus-8931730.jpg"
            alt="Slide 2"
            className="w-full h-[calc(100vh-88px)] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/7tnLSHg5/pexels-shvets-production-7203783.jpg"
            alt="Slide 3"
            className="w-full h-[calc(100vh-88px)] object-cover"
          />
        </div>
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Fixed Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {/* Find the Fastest Parcel Delivery Service */}
            Delivering Your Products Worldwide
          </h1>

          <form className="flex items-center bg-white rounded-full overflow-hidden shadow-lg mt-4">
            <input
              type="text"
              placeholder="Search your parcel destination..."
              className="flex-grow px-6 py-3 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pinkRed hover:bg-hoverColor text-white px-6 py-3 font-semibold transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
