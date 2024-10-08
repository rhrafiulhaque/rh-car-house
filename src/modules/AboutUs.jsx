import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FFEDED] px-4">
      <div className="container  m-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 py-[80px]">
          <div>
            <img src="/assets/image/choose_us.png" alt="Car-2" />
          </div>
          <div>
            <h4 className="text-[#FF3527] font-semibold">- About Us - </h4>
            <h1 className="text-4xl font-bold mb-6">
              World Dealer Largest <br /> Marketplace
            </h1>
            <p className="text-justify p-2">
              Discover unparalleled access to a vast selection of vehicles from
              around the globe. Our marketplace connects you with trusted
              dealers, ensuring a seamless experience for buying, selling, and
              trading vehicles. With our extensive inventory and user-friendly
              platform, finding your dream car has never been easier. Join us
              and explore the world of automotive possibilities today!
            </p>
            <div className="mt-5">
              <p className="py-1">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="bg-[#FF3426] text-white  mr-2 rounded-full text-2xl"
                />
                Vast selection of vehicles from global dealers.
              </p>
              <p className="py-1">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="bg-[#FF3426] text-white  mr-2 rounded-full text-2xl"
                />
                User-friendly platform for seamless transactions.
              </p>
              <p className="py-1">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="bg-[#FF3426] text-white  mr-2 rounded-full text-2xl"
                />
                Expert support and competitive pricing available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
