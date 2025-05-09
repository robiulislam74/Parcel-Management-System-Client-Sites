import { Mail, Phone } from "lucide-react";
import Button from "./Button";

const ContactSection = () => {
    return (
        <div className="w-full px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left - Form */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Need To Make An Inquiry?
                    </h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border rounded-md p-3 w-full outline-pinkRed"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border rounded-md p-3 w-full outline-pinkRed"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border rounded-md p-3 w-full outline-pinkRed"
                        />
                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="border rounded-md p-3 w-full outline-pinkRed"
                        ></textarea>
                        {/* <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-800 transition"
                        >
                            Submit Request <span>↗</span>
                        </button> */}
                        <Button
                        type={"submit"}
                        text={'Submit Request'}
                        bgColor={'bg-black'}
                        overBgColor={'bg-pinkRed'}
                        textColor={'text-white'}
                        groupHover={'group-hover:text-black'}
                        padding={'px-6 py-3'}
                        />
                    </form>
                </div>

                {/* Right - Contact Info */}
                <div className="bg-gradient-to-br overflow-hidden relative from-pinkRed to-red-400 text-white rounded-2xl p-8 flex flex-col justify-between">
                    {/* Overlay */}
                    <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-10 z-10"></div>
                    <div className="z-20">
                        <p className="uppercase text-sm tracking-wide mb-3">Contact Us</p>
                        <h3 className="text-2xl font-bold mb-6">We’d Love to Hear From You</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white text-red-600 p-3 rounded-full">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm">Phone</p>
                                <p className="font-medium">+8801770070249</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-white text-red-600 p-3 rounded-full">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm">Email</p>
                                <p className="font-medium">codecraft.robiul@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://i.ibb.co.com/v4JgSyjT/pexels-polina-tankilevitch-4440800-removebg-preview.png"
                        alt="Cargo"
                        className="w-32 md:w-52 absolute bottom-0 right-0 mt-10 self-end bg-transparent"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
