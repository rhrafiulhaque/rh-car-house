import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero px-4">
      <div className="container m-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 py-[100px] ">
          <div className="order-2 lg:order-1">
            <h1 className="lg:text-[60px] text-[40px] font-bold">
              Best Place To <br /> Rented A Dream <br /> Car
            </h1>
            <p className="text-justify font-semibold">
              Discover the ultimate destination for renting your dream car! With
              a diverse fleet of luxury and exotic vehicles, this premier rental
              service offers a seamless experience tailored to your desires.
            </p>
            <button className="bg-[#FF3426] px-[20px] py-[10px] mt-[60px] text-white border border-[#FF3426] rounded hover:bg-white hover:text-[#FF3426] duration-300 ">
              Book Now
            </button>
          </div>
          <div className="lg:order-2 order-1 ">
            <img src="/assets/image/hero_car.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
