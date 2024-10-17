import {
  faCarAlt,
  faHome,
  faList,
  faPowerOff,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`pl-[20px] lg:w-[25%] absolute lg:static lg:bg-transparent ${
        sidebarOpen ? "visible" : "invisible"
      } lg:visible bg-black bg-opacity-70 h-full  shadow-md text-white `}
    >
      <div className=" relative pt-[30px] pb-[60px]">
        <img src="/assets/image/car_logo.png" alt="car" className="w-[120px]" />
        <h1 className="py-5">User Dashboard</h1>
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`absolute top-[30px] lg:invisible ${
            sidebarOpen ? "visible" : "invisible"
          } right-[10px] bg-white p-2 text-black rounded-full flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
      <div>
        <ul className=" pr-[30px]">
          <li className="flex   py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center">
            <FontAwesomeIcon icon={faHome} className="px-2" />
            Dashboard
          </li>
          <li className="flex   py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center">
            <FontAwesomeIcon icon={faUser} className="px-2" />
            My Profile
          </li>
          <li className="flex   py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center">
            <FontAwesomeIcon icon={faCarAlt} className="px-2" />
            Order List
          </li>
          <li className="flex   py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center">
            <FontAwesomeIcon icon={faList} className="px-2" />
            Review List
          </li>
          <li className="flex   py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center">
            <FontAwesomeIcon icon={faPowerOff} className="px-2" />
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSidebar;
