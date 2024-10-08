import React from "react";
import Button from "./Shared/Button";
import SingleCar from "./SingleCar";

const CarSection = () => {
  return (
    <div className="bg-[#FFF4F4] px-4">
      <div className="container m-auto">
        <div className=" lg:py-24 py-16 ">
          <div className="text-center">
            <h4 className="text-xl text-[#FC5950] font-bold">
              - Best Car Deals-
            </h4>
            <h1 className="text-5xl font-bold py-5">Explore Our Top Deal</h1>
          </div>
          <div className="lg:flex py-5 lg:items-center lg:justify-center hidden">
            <a
              className="bg-[#FC5950] font-semibold text-white px-4 py-1 mx-4"
              href=""
            >
              All
            </a>
            <a
              className="bg-[#EBEBEB] px-4 py-1 mx-4 hover:bg-[#FC5950] hover:text-white duration-300 rounded font-semibold"
              href=""
            >
              Honda
            </a>
            <a
              className="bg-[#EBEBEB] px-4 py-1 mx-4 hover:bg-[#FC5950] hover:text-white duration-300 rounded font-semibold"
              href=""
            >
              Audi
            </a>
            <a
              className="bg-[#EBEBEB] px-4 py-1 mx-4 hover:bg-[#FC5950] hover:text-white duration-300 rounded font-semibold"
              href=""
            >
              Nissan
            </a>
            <a
              className="bg-[#EBEBEB] px-4 py-1 mx-4 hover:bg-[#FC5950] hover:text-white duration-300 rounded font-semibold"
              href=""
            >
              Mazda
            </a>
            <a
              className="bg-[#EBEBEB] px-4 py-1 mx-4 hover:bg-[#FC5950] hover:text-white duration-300 rounded font-semibold"
              href=""
            >
              Toyota
            </a>
            <a
              className="bg-[#EBEBEB] px-4 py-1 mx-4 hover:bg-[#FC5950] hover:text-white duration-300 rounded font-semibold"
              href=""
            >
              Explore{" "}
              <span className="text-[#FC5950] hover:text-white duration-300">
                20+
              </span>
            </a>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <SingleCar />
            <SingleCar />
            <SingleCar />
            <SingleCar />
            <SingleCar />
          </div>

          <div className="text-center mt-[50px]">
            <Button message={"View All"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSection;
