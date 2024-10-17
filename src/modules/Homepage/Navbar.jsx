import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="absolute left-0  top-0 z-40 flex w-full items-center bg-transparent px-4">
        <div className="container m-auto">
          <div className="mt-[20px]  ">
            <div className="flex justify-between items-center">
              <img src="/assets/image/car_logo.png" className="h-[45px]"></img>
              <ul className="hidden lg:flex">
                <li className="pl-[5px] text-[14px] mr-8 font-semibold">
                  <a href="">Home</a>
                </li>
                <li className="pl-[5px] text-[14px] mr-8 font-semibold">
                  <a href="">About</a>
                </li>
                <li className="pl-[5px] text-[14px] mr-8 font-semibold">
                  <a href="">Cars</a>
                </li>
                <li className="pl-[5px] text-[14px] mr-8 font-semibold">
                  <a href="">How it work</a>
                </li>
                <li className="pl-[5px] text-[14px] mr-8 font-semibold">
                  <a href="">Why choose us</a>
                </li>
                <li className="pl-[5px] text-[14px] mr-8 font-semibold">
                  <a href="">Contact</a>
                </li>
              </ul>

              <div className="sm:flex ">
                <a
                  className="mr-5 px-4 py-2 border border-red-500 rounded text-[14px] hover:bg-red-600 hover:text-white  duration-300"
                  href=""
                >
                  Login
                </a>
                <a
                  className="mr-5 p-2 border border-red-500 rounded text-[14px] bg-red-600 hover:bg-red-300 text-white duration-300"
                  href=""
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Application  */}
      <div class=" w-full bg-white fixed bottom-0 h-[60px] border shadow-md p-2 z-50 lg:invisible md:invisible">
        <div class="flex justify-between  px-4 ">
          <div className="text-[#FF3426] p-2 rounded-full justify-center items-center flex flex-col ">
            <FontAwesomeIcon icon={faHome} />
            <p className="text-[10px]">Home</p>
          </div>
          <div className="justify-center items-center flex flex-col">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <p className="text-[10px]">Cart</p>
          </div>
          <a className="justify-center items-center flex flex-col">
            <FontAwesomeIcon icon={faUser} />
            <p className="text-[10px]">Account</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
