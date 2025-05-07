import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css'; // Add this CSS file for fade effect

const Banner = () => {
  return (
    <div className="relative min-h-[100vh] w-full">
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
            src="https://i.ibb.co.com/C5HS2Tsx/pexels-tomfisk-3856433.jpg"
            alt="Slide 1"
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/v46pkrQt/pexels-domenik-drz-153181248-11410334.jpg"
            alt="Slide 2"
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/4w915Pz9/pexels-tima-miroshnichenko-6169056.jpg"
            alt="Slide 3"
            className="w-full h-[100vh] object-cover"
          />
        </div>
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Fixed Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find the Fastest Parcel Delivery Service
          </h1>

          <form className="flex items-center bg-white rounded-full overflow-hidden shadow-lg mt-4">
            <input
              type="text"
              placeholder="Search your parcel destination..."
              className="flex-grow px-6 py-3 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primaryColor hover:bg-secondaryColor text-white px-6 py-3 font-semibold transition"
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
