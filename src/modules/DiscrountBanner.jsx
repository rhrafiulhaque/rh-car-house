import React from "react";

const DiscrountBanner = () => {
  return (
    <div
      className=" bg-no-repeat relative lg:block md:block hidden "
      style={{
        backgroundImage: "url('/assets/image/hero_car.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="relative  py-20 px-5 text-white">
          <h4 className="text-xl my-5">Limited Offer</h4>
          <h1 className="text-5xl font-bold">
            <span className="text-[#FF3426]">30%</span> Off For First Time{" "}
            <br /> Buy A Car
          </h1>
          <button className="py-3 px-3 mt-6 bg-[#FF3426] hover:bg-transparent border border-[#FF3426] duration-300   rounded text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscrountBanner;
