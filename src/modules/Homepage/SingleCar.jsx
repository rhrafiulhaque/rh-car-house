import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCarAlt,
  faCarBattery,
  faTachometer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../Shared/Button";

const SingleCar = () => {
  return (
    <div className="bg-white rounded p-4 shadow">
      <div className="rounded">
        <img src="/assets/image/cars/car_1.jpg" alt="" />
      </div>
      <div>
        <h1 className="text-3xl uppercase font-bold py-6">Thunderbolt GT</h1>
        <div className="text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span> 4.0 (1.5k)</span>
        </div>
        <div className="flex py-6 mb-[20px]">
          <div className="mx-4 text-center">
            <FontAwesomeIcon
              icon={faCarAlt}
              className="bg-[#FFF1F1] p-3 rounded"
            />
            <p>3 Seat</p>
          </div>
          <div className="mx-4 text-center">
            <FontAwesomeIcon
              icon={faCarBattery}
              className="bg-[#FFF1F1] p-3 rounded"
            />
            <p>Diesel</p>
          </div>
          <div className="mx-4 text-center">
            <FontAwesomeIcon
              icon={faTachometer}
              className="bg-[#FFF1F1] p-3 rounded"
            />
            <p>15K</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="text-2xl text-[#FC5950] font-bold">$16.000</h1>
        <Button message={"Buy Now"} />
      </div>
    </div>
  );
};

export default SingleCar;
