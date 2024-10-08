import {
  faDollar,
  faHeadphones,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#FFEDED] ">
      <div className="container m-auto">
        <div className=" py-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <img
            className="lg:block hidden"
            src="/assets/image/choose_us.png"
            alt="car"
          />

          <div>
            <div className="text-center lg:text-left">
              <h4 className="uppercase font-bold text-2xl text-[#FF1F1B]">
                - Why Choose Us -
              </h4>
              <h1 className="text-[40px] font-semibold leading-[50px]">
                We Offer The Best Experience With Our Rental Deals
              </h1>
            </div>
            <div className="pt-10 flex justify-center lg:justify-start  ">
              <FontAwesomeIcon
                icon={faDollar}
                className="text-[#FF1F1B] bg-[#ECEDEF]  p-4 rounded mr-3"
              />
              <div className="w-1/2">
                <h4 className="text-[24px] font-semibold">
                  Best Price Guaranteed
                </h4>
                <p className="text-[15px] font-semibold">
                  We ensure the most competitive prices, offering unbeatable
                  value for your money.
                </p>
              </div>
            </div>

            <div className="pt-5 flex justify-center lg:justify-start ">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-[#FF1F1B] bg-[#ECEDEF]  p-4 rounded mr-3"
              />
              <div className="w-1/2">
                <h4 className="text-[24px] font-semibold">
                  24 Hour Car Delivery
                </h4>
                <p className="text-[15px] font-semibold">
                  Enjoy fast, hassle-free car delivery within 24 hours of your
                  order.
                </p>
              </div>
            </div>

            <div className="pt-5 flex justify-center lg:justify-start ">
              <FontAwesomeIcon
                icon={faHeadphones}
                className="text-[#FF1F1B] bg-[#ECEDEF]  p-4 rounded mr-3"
              />
              <div className="w-1/2">
                <h4 className="text-[24px] font-semibold">
                  24/7 Technical Support
                </h4>
                <p className="text-[15px] font-semibold">
                  Our dedicated team is available around the clock to assist
                  with any technical issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
