import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SignUp = () => {
  return (
    <div className="bg-login px-4 h-full ">
      <div className="container m-auto lg:py-[40px]">
        <div className="flex justify-center items-center lg:py-8 md:py-8 py-4">
          <img
            src="/assets/image/car_logo.png"
            alt=""
            className="lg:w-[150px] md:w-[150px] w-[50px]"
          />
        </div>
        <div className=" flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="bg-white lg:py-[80px] md:py-[80px] py-[30px]  lg:pl-[120px] md:pl-[120px] pl-[50px] lg:rounded-s-xl md:rounded-s-xl order-2 lg:order-1  ">
              <h1 className="uppercase text-2xl">Sign Up</h1>
              <p className="text-base">
                Enter your data for to create your Account
              </p>

              <div className="pt-8 leading-9">
                <p>Full Name</p>
                <input
                  className="border border-gray-600 w-[70%] px-[8px] rounded"
                  type="text"
                />
              </div>
              <div className="leading-9">
                <p>Email</p>
                <input
                  className="border border-gray-600 w-[70%] px-[8px] rounded"
                  type="email"
                />
              </div>
              <div className="leading-9">
                <p>Password</p>
                <input
                  className="border border-gray-600 w-[70%] px-[8px] rounded"
                  type="password"
                />
              </div>
              <div className="leading-9">
                <p>Re-enter Password</p>
                <input
                  className="border border-gray-600 w-[70%] px-[8px] rounded"
                  type="password"
                />
              </div>
              <div className="leading-9">
                <button className="w-[70%] mt-[40px] bg-[#262626] text-white px-5 py-2 border border-[#262626] hover:bg-white hover:text-[#262626] duration-300 rounded-xl">
                  Sign Up
                </button>
                <div className="flex py-4 items-center">
                  <div className="bg-slate-500 w-[30%] h-[1px] m-2"></div>
                  <p>OR</p>
                  <div className="bg-slate-500 w-[30%] h-[1px] m-2"></div>
                </div>

                <div className=" flex justify-center  text-center w-[70%] ">
                  <a
                    href=""
                    className="border border-gray-600 px-4 py-2  w-[130px] rounded-md hover:bg-[#262626] hover:text-white duration-300"
                  >
                    <FontAwesomeIcon icon={faGoogle} className="pr-2" />
                    Google
                  </a>
                </div>
              </div>

              <p className="text-base ml-[60px] my-5  ">
                Have a Account?{" "}
                <a href="" className="text-[#FFDE9F]">
                  Login
                </a>
              </p>
            </div>
            <div className="bg-[#F6BB4D] flex justify-center items-center rounded-e-xl order-1 lg:order-2">
              <img
                src="/assets/image/login-car.png"
                alt="Car"
                className="lg:w-full md:w-full w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
