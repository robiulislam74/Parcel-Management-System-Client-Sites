import React from 'react';
import CountUp from 'react-countup';
import { FaShieldAlt, FaBolt, FaUsers } from 'react-icons/fa';
import Heading from './Heading';

const Features = () => {
  return (
    <section className="pt-24 pb-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Feature Cards */}
       <Heading
       title={'Why Choose Our Delivery Service?'}
       subTitle={'Discover how our parcel delivery system ensures safety, speed, and satisfaction. We are committed to making your shipping experience seamless, secure, and efficient — every time.'}
       />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white p-6  transition duration-300 hover:scale-110 rounded-xl shadow-lg text-center">
            <FaShieldAlt className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Parcel Safety</h3>
            <p className="text-gray-600">We ensure your parcel is safe and secure during the entire journey.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 hover:scale-110 transition duration-300 rounded-xl shadow-lg text-center">
            <FaBolt className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Super Fast Delivery</h3>
            <p className="text-gray-600">Experience lightning-fast delivery across the country.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 hover:scale-110 transition duration-300 rounded-xl shadow-lg text-center">
            <FaUsers className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">24/7 support team to assist you anytime you need.</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Features;
