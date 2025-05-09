import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import footerIcon from "../assets/images/footerIcon.png"

const Footer = () => {
  return (
    <footer className="bg-[#212121] ">
      <div className='text-white px-6 pb-10 pt-16'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className=" text-center">
            <img className='mx-auto w-20' src='https://i.ibb.co.com/k6sh80G3/login.png' alt="" />
            <p className='font-extrabold text-sm text-center uppercase text-primaryColor'>Parcel<span className='text-pinkRed'>Pro</span></p>
          </div>
          {/* <div>
              <h2 className="text-xl font-extrabold uppercase">ParcelPro</h2>
              <p className="text-sm">LOGISTIC SERVICE</p>
            </div> */}
        </div>

        {/* Footer Links */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Address */}
          <div>
            <h4 className="text-pinkRed text-xl font-bold mb-2">Our Address</h4>
            <p className="text-base">Bangladesh —<br />7400 Shah Abdul Karim Rd<br />Jessore,<br />Khulna, Bangladesh</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-pinkRed text-xl font-bold mb-2">Contact Us</h4>
            <p className="text-base underline">codecraft.robiul@gmail.com</p>
            <p className="text-lg font-semibold mt-2">+8801770070249</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-pinkRed text-xl font-bold mb-2">Our Social</h4>
            <div className="flex gap-4 text-2xl">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-950 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© ParcelPro 2025.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
