import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../Shared/Button";

const ContactUs = () => {
  return (
    <div className="my-24 px-4">
      <div className="container m-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[120px]">
          <div>
            <div className="text-center lg:text-left py-5 lg:py-0">
              <h4 className="text-[#FA3427] font-semibold">
                Contact Our Company
              </h4>
              <h1 className="text-4xl font-bold py-3">
                Our <span className="text-[#FA3427]">Branch</span> Office
              </h1>
              <p>
                Our branch office serves as a vital hub for local operations,
                fostering community engagement and providing tailored services.
              </p>
            </div>

            <div className="flex py-4">
              <FontAwesomeIcon icon={faMessage} className="p-4 text-2xl" />
              <div>
                <h1 className="text-2xl font-semibold">Chat To Us:</h1>
                <p>rhrafiulhaque@gmail.com</p>
              </div>
            </div>
            <div className="flex py-4">
              <FontAwesomeIcon icon={faLocation} className="p-4 text-2xl" />
              <div>
                <h1 className="text-2xl font-semibold">
                  Visit Our Office Branch:
                </h1>
                <p>18/8 Gulshan, Dhaka-1212, Bangladesh</p>
              </div>
            </div>
            <div className="flex py-4">
              <FontAwesomeIcon icon={faPhone} className="p-4 text-2xl" />
              <div>
                <h1 className="text-2xl font-semibold">Call Us:</h1>
                <p>+8801700*******</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">Get In Touch</h1>
            <p className="py-5">
              Get in touch with us to explore opportunities, ask questions, or
              provide feedback. We're here to assist you and ensure your needs
              are met. Your connection is our priority!
            </p>

            <form action="" className="py-5 px-5 lg:py-0">
              <div className="lg:flex">
                <input
                  className="border border-gray-300 p-2 ml-4 my-4 rounded w-full "
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border border-gray-300 p-2 ml-4 my-4 rounded w-full "
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="lg:flex">
                <input
                  className="border border-gray-300 p-2 ml-4 my-4 rounded w-full "
                  type="text"
                  placeholder="Your Phone"
                />
                <input
                  className="border border-gray-300 p-2 ml-4 my-4 rounded w-full "
                  type="text"
                  placeholder="Your Subject"
                />
              </div>
              <textarea
                className="border border-gray-300 p-2 ml-4 my-4 w-full"
                placeholder="Type Your Message"
              ></textarea>
            </form>
            <Button message={"Get Started"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
